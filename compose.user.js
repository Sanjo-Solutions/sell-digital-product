export function setTitle(compose, pageTitle) {
  compose.setVariable("title", pageTitle)
}

export function retrieveTitle(compose) {
  return compose.getVariable("title") || ""
}

function md() {}
