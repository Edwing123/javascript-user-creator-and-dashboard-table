console.log('%cSTOP!', 'color: #de432a; font-size: 6em;')


function main() {
  initLocalStorage()
  let dashboard = document.querySelector('#dashboard')
  let headings = ['Name', 'Age', 'Country', 'Picture']
  let users = getStorage()
  if(users.length < 1) return showWarning('Not users created yet!!', 3000)
  insertDataToDashboard(headings, users, dashboard)

}


window.addEventListener('storage', function(event) {
  // does the __users key update ?
  if (event.key !== '__users') return false
  let storage = getStorage()
  let newAddedUser = storage[storage.length - 1]
  let userRow = createUserRow(newAddedUser)
  insertElement(document.querySelector('#dashboard'), userRow)
})

main()