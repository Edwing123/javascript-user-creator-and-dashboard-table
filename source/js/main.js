console.log('%cSTOP!', 'color: #de432a; font-size: 6em;')



// MAIN ENTRY FUNCTION  
function main() {
  initLocalStorage()
  let createButton = document.querySelector('#createButton')
  let InputIds = ['#username', '#age', '#country', '#picture']
  let warningIds = ['#usernameWarning', '#ageWarning', '#countryWarning', '#pictureWarning']
  let storageKey = '__correct-validation'
  applyValidationWarnings(InputIds, warningIds, storageKey)
  

  createButton.addEventListener('click', function() {
    createButton.disabled = true
    let userForm = document.querySelector('#userForm')
    let userFormData = new FormData(userForm)
    
    checkForDataValidation(userFormData)
      .then(function(isOk) {
        console.log(isOk)
        let user = {
          name: userFormData.get('username'),
          age: userFormData.get('age'),
          country: userFormData.get('country'),
          picture: userFormData.get('picture')
        }
        getDataURL(user.picture)
          .then(function(url) {
            user.picture = url
            
            let message = insertUser(user)
            showWarning(message)
          })
          .catch(function(error) {
            console.log(error)
            showWarning('An error happended when reading picture file, try again please!!')
          })
      })
      .catch(function(error) {
        console.log(error)
        showWarning('Please fill up the required fields')
      })
      .finally(function() {
        createButton.disabled = false
      })
  })
}


main()