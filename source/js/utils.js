function getDataURL(fileObject) {
  return new Promise(function(resolve, reject) {
    let reader = new FileReader()
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function(error) {
      reject(error)
    }
    reader.readAsDataURL(fileObject)
  })
}

function showWarning(text, onScreenTime = 2000) {
  
  let warningEl = document.createElement('p')
  warningEl.textContent = text
  warningEl.style.position = 'fixed'
  warningEl.style.zIndex = '10'
  warningEl.style.top = '0'
  warningEl.style.left = '0'
  warningEl.style.right = '0'
  warningEl.style.padding = '20px'
  warningEl.style.width = '90%'
  warningEl.style.maxWidth = '400px'
  warningEl.style.background = '#ff4c4c'
  warningEl.style.color = '#fff'
  warningEl.style.margin = '30px auto 0px'
  document.body.appendChild(warningEl)

  setTimeout(function() {
    document.body.removeChild(warningEl)
  }, onScreenTime)
}

function createDashboardRow() {
  let row = document.createElement('div')
  row.classList.add('dashboardRow')
  return row
}

function createDashboardColumn() {
  let column = document.createElement('div')
  column.classList.add('dashboardColumn')
  return column
}

function createDashboardHeading() {
  let heading = document.createElement('h3')
  heading.classList.add('dashboardHeading')
  return heading
}

function insertElement(parent, child) {
  parent.appendChild(child)
}

function createDashboardImage(src) {
  let img = document.createElement('img')
  img.classList.add('dashboardImage')
  img.src = src
  return img
}

function createDashboardText(text) {
  let textContainer = document.createElement('p')
  textContainer.classList.add('dashboardText')
  textContainer.textContent = text
  return textContainer
}

function insertDataToDashboard(headings, users, dashboard) {
  // this is kinda bad, I mean... the number of heading must corespond to the number of fields of the users
  // just like a table... 
  // creation of headings for the table
  let headingsRow = createDashboardRow()
  headingsRow.classList.add('dashboardRow--headings')
  headings.forEach(headingText => {
    let headingColumn = createDashboardColumn()
    let headingEl = createDashboardHeading()
    headingEl.textContent = headingText
    insertElement(headingColumn, headingEl)
    insertElement(headingsRow, headingColumn)
  });
  
  // insert heading to dashboard
  insertElement(dashboard, headingsRow)

  // inserting users
  users.forEach(function(user) {
    let userRow = createUserRow(user)
    insertElement(dashboard, userRow)
  })
}

function createUserRow(user) {createUserRow
  let row = createDashboardRow()
  let name = user.name,
  age = user.age,
  country = user.country,
  picture = user.picture,
  textInformation = [name, age, country]
  textInformation.forEach(text => {
    let textColumn = createDashboardColumn()
    let textEl = createDashboardText(text)
    insertElement(textColumn, textEl)
    insertElement(row, textColumn)
  })
  let image = createDashboardImage(picture)
  image.alt = name + ' profile image'
  image.title = name + ' profile image'
  let imageColumn = createDashboardColumn()
  insertElement(imageColumn, image)
  insertElement(row, imageColumn)
  return row
}