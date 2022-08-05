function findAccountById(accounts, id) {
  let findAccount = accounts.find((account) => account.id === id)
  return findAccount
}

function sortAccountsByLastName(accounts) {
  let sortAccount = accounts.sort((accountA, accountB) =>
accountA.name.last > accountB.name.last ? 1 : -1)
  return sortAccount
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  let ids = account.id
  let getTotal = books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if(borrow.id === ids){
        total ++
      }
    })
  })
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  
 let result = books.filter(book => book.borrows.find(thisBook => (thisBook.id === account.id && !thisBook.returned)))
 
 result.forEach(book => {
    let thisAuthor = authors.find(author => book.authorId === author.id)
    book["author"] = thisAuthor
 })
  return result
  }
  
  


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
