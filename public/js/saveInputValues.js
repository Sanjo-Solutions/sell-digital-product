export function saveInputValues() {
  restoreValues()
  listenForChanges()
  saveBeforeLeavingPage()
}

function restoreValues() {
  for (const input of document.querySelectorAll('input[type="text"]')) {
    if (input.id) {
      const value = localStorage.getItem(input.id)
      if (typeof value === "string") {
        input.value = value
      }
    }
  }
}

function listenForChanges() {
  document.addEventListener("change", function (event) {
    if (isTrackedElement(event.target)) {
      const input = event.target
      saveValueOfInput(input)
    }
  })
}

function saveBeforeLeavingPage() {
  let focusedInput = null

  document.addEventListener("focusin", function (event) {
    if (isTrackedElement(event.target)) {
      focusedInput = event.target
    }
  })

  window.addEventListener("beforeunload", function () {
    if (focusedInput) {
      saveValueOfInput(focusedInput)
    }
  })
}

function isTrackedElement(element) {
  return element.matches('input[type="text"]')
}

function saveValueOfInput(input) {
  if (input.id) {
    localStorage.setItem(input.id, input.value)
  }
}
