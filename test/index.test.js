describe('hello', () => {
  it('returns "Hello World!"', async () => {
    const hello = require('../src/index')
    const result = hello()
    expect(result).toEqual('Hello World!')
  })
})
