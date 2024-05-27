module.exports = app => {

  const AuthRouter = require('./auth.routes')
  app.use('/api/user', AuthRouter)

  const ExperiencesRouter = require("./experience.routes")
  app.use("/api/experiences", ExperiencesRouter)

  const PackageRouter = require('./package.routes')
  app.use('/api/packages', PackageRouter)

  const PurchaseRouter = require('./purchase.routes')
  app.use('/api/purchases', PurchaseRouter)

}