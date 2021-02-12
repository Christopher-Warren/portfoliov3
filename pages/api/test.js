export default function Test(req, res) {
  console.log("test: ", req.body);

  res.status("200");
}
