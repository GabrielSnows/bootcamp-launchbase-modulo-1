// Operações bancárias

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

function createTransaction(transaction) {
    user.transactions.push(transaction)
    if (transaction.type == 'credit') {
        user.balance = user.balance + transaction.value
    } else if (transaction.type == 'debit') {
        user.balance = user.balance - transaction.value
    }
}


function getHigherTransactionByType(type) {
    let typeTransaction;
    let highCredit = 0;
    for (transaction of user.transactions) {
        if (type == transaction.type && transaction.value > highCredit) {
            highCredit = transaction.value;
            typeTransaction = transaction.type;
        }
    }
    const creditResult = {
        type: typeTransaction,
        value: highCredit
    }
    console.log(creditResult)

}


function getAverageTransactionValue() {
    let sum = 0
    for (let i = 0; i < user.transactions.length; i++) {
        sum += user.transactions[i].value
    }
    const average = sum / user.transactions.length
    
    return average   
}


function getTransactionsCount() {
    let count = {
        Credit: 0,
        Debit: 0
    }

    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            count.Credit++
        } else {
            count.Debit++
        }
    }

    return count
}


console.log("Your balance is", user.balance)
getHigherTransactionByType('credit');
getHigherTransactionByType('debit');
console.log(getAverageTransactionValue());
console.log(getTransactionsCount());