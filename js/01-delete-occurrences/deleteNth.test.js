const deleteNth = require('./deleteNth')

test('it works', () => {
  expect(deleteNth([20,37,20,21], 1))
  .toEqual([20,37,21])
})
