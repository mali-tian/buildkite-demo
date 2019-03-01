const httpServer = require('./http')

const main = async () => {
	console.log("i am new");
  try {
    await httpServer()
  } catch (err) {
    throw new Error(err)
  }
}

main()
