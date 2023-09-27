export function saveInputValues() {
  restoreValues()
  listenForChanges()
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
    if (event.target.matches('input[type="text"]')) {
      const input = event.target
      if (input.id) {
        localStorage.setItem(input.id, input.value)
      }
    }
  })
}
