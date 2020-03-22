import faunadb, { query as q } from 'faunadb';

const { FAUNADB_SECRET } = process.env;

let client;

if (FAUNADB_SECRET) {
  client = new faunadb.Client({ secret: FAUNADB_SECRET });
}

export default async function handler(req, res) {
  try {
    if (!client) {
      throw new Error('DataBase connection failed');
    }

    const { sessionId, metrics } = req.body;

    await client.query(
      q.If(
        q.Exists(
          q.Match(q.Index('pageflows_by_sessionId'), sessionId),
        ),
        q.Update(q.Select('ref', q.Get(q.Match(q.Index('pageflows_by_sessionId'), sessionId))), {
          data: {
            metrics: q.Prepend(
              q.Select(['data', 'metrics'], q.Get(q.Match(q.Index('pageflows_by_sessionId'), sessionId))),
              metrics
            ),
          },
        }),
        q.Create(q.Collection('PageFlows'), {
          data: {
            sessionId,
            metrics,
          },
        }),
      )
    );

    res.json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'failed', error });
  }
}
