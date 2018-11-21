const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const defaults = {
  eventSourcePolyfillUrl: null,
  ldUserKey: "test",
  ldUserCustomAttributeKey: "group",
  ldUserCustomAttributeValue: "test",
  ldClientSideId: null,
  ldFlagKey: "test",
  ldFlagDefault: false
}
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', Object.assign({}, defaults, req.query)))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
