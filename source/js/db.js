// init function for creating localStorage space
let key = '__users'
function initLocalStorage() {
  let store = JSON.stringify([])

  // checking if not __users object is already created
  let isCreated = localStorage.getItem(key) ? true : false

  if (isCreated) return false
  localStorage.setItem(key, store)
  return true
}


function insertUser(user) {
  let storage = getStorage()
  if(!storage) initLocalStorage()
  let isAlreadyInserted = isUserAlreadyInserted(user.name)
  if (isAlreadyInserted) return 'ALREADY INSERTED'
  storage.push(user)
  updateStorage(storage)
  return 'USER CREATED'
}

function isUserAlreadyInserted(name) {
  let storage = getStorage()
  if(!storage) return 'NOT STORAGE' 
  let index = 0
  for (index; index < storage.length; index++) {
    let user = storage[index]
    if (user.name === name) return true
  }
  return false

}

function getStorage() {
  let storage = JSON.parse(localStorage.getItem(key))
  return storage
}

function updateStorage(newStorage) {
  localStorage.setItem(key, JSON.stringify(newStorage))
}

function doesStorageExists(storageKey) {
  return localStorage.getItem(storageKey) ? true : false
}