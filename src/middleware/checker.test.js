const checker = require("./checker")
// @ponicode
describe("checker.default", () => {
    test("0", () => {
        let callFunction = () => {
            checker.default(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            checker.default(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            checker.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
