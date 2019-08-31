
console.log('derp')

const Cite = require('citation-js')

module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
}