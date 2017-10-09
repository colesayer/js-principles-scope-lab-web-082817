// Write your solution in this file!
var customerName = 'bob'
const leastFavoriteCustomer = 'ok'


function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
}

function setBestCustomer(){
  bestCustomer = 'not bob'
  return bestCustomer
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
  return bestCustomer
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'not ok'
  return leastFavoriteCustomer
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'daniel'
  let favoriteCustomer = 'betty'
  return favoriteCustomer
}
