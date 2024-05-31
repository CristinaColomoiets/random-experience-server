module.exports = app => {

  const AuthRouter = require('./auth.routes')
  app.use('/api/auth', AuthRouter)

  const ExperiencesRouter = require("./experience.routes")
  app.use("/api/experiences", ExperiencesRouter)

  const PackageRouter = require('./package.routes')
  app.use('/api/packages', PackageRouter)

  const PurchaseRouter = require('./purchase.routes')
  app.use('/api/purchases', PurchaseRouter)

  const UserRouter = require('./user.routes')
  app.use('/api/users', UserRouter)

  const UploadRouter = require('./upload.routes.js')
  app.use('/api/upload', UploadRouter)

}