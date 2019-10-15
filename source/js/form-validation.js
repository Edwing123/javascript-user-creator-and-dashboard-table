function showWarningIfLeftEmpty(inputElId, warningElId, warningText = 'This field is required', storageKey) {
  let inputEl = document.querySelector(inputElId)
  let warningEl = document.querySelector(inputElId + ' + ' + warningElId)
  let isFile = inputEl.type === 'file' ? true : false
  warningEl.textContent = warningText

  inputEl.addEventListener('blur', function(event) {
    // let value = isFile ? event.target.files[0] : event.target.value
    let value = event.target.value
    if (!value) {
      warningEl.style.visibility = 'visible'
      inputEl.classList.add('border--red')
    } else {
      warningEl.style.visibility = 'hidden'
      inputEl.classList.remove('border--red')
    }
  })
}

function applyValidationWarnings(inputIds, warningIds, storageKey) {
  badIds = inputIds.length !== warningIds.length ? true : false
  if (badIds) return 'IDS NOT COMPLETE'
  let index = 0
  for (index; index < inputIds.length; index++) {
    let inputId = inputIds[index]
    let warningId = warningIds[index]
    showWarningIfLeftEmpty(inputId, warningId, 'This field is required', storageKey)
  }
  return true
}

function initValidationStorage(storageKey) {
  localStorage.setItem(storageKey, false)
}

function checkForDataValidation(formData) {
  return new Promise(function(resolve, reject) {
    for (let data of formData) {
      if (!data[1]) return reject('NOT VALID DATA')
    }
    resolve('VALID DATA')
  })
}