module.exports = app => {

  const ExperiencesRouter = require("./experience.routes")
  app.use("/api/experience", ExperiencesRouter)


}