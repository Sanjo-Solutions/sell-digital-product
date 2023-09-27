import { saveInputValues } from "./saveInputValues.js"

describe("saveInputValues", () => {
  it("restores values", () => {
    const id = "test"
    const value = "value"
    localStorage.setItem(id, value)
    document.body.innerHTML = `<input id="${id}" type="text">`
    saveInputValues()
    const input = document.querySelector(`#${id}`)
    expect(input.value).toEqual(value)
  })

  it("saves values after they have changed", () => {
    const id = "test"
    const value = "value"
    document.body.innerHTML = `<input id="${id}" type="text">`
    const input = document.querySelector(`#${id}`)
    saveInputValues()
    input.value = value
    expect(localStorage.getItem(id)).toEqual(value)
  })
})
