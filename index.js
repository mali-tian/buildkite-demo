const httpServer = require('./http')

const main = async () => {
  try {
    await httpServer()
  } catch (err) {
    throw new Error(err)
  }
}

main()
