const {deposit} = require("./slotMachine")
const mockPrompt = jest.fn()
jest.mock("prompt-sync", () => () => mockPrompt)
describe("deposit", () => {
  it('should call prompt with "Please enter a deposit amount: "', () => {
    const expected = "Please enter a deposit amount: "
      deposit()
      expect(mockPrompt).toHaveBeenCalledWith(expected)
    })
})
