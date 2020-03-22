export default function handler(req, res) {
  console.log(process.env.GITHUB_TOKEN);
  console.log(req.query);
  console.log(req.body);
  res.status(200).json({
    message: 'success',
    data: {},
  });
}
