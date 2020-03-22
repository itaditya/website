import faunadb, { query as q } from 'faunadb';

const { FAUNADB_SECRET } = process.env;

let client;

console.log(FAUNADB_SECRET);

if (secret) {
  client = new faunadb.Client({ secret: FAUNADB_SECRET });
}

export default async function handler(req, res) {
  console.log(process.env.GITHUB_TOKEN);
  console.log(req.body);

  try {
    if (!client) {
      return [];
    }

    res.json({
      message: 'success',
      data: {},
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}
