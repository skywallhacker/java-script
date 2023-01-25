let userName = prompt('what is ur name?').toLowerCase().trim()
let money = 10000
let account = 7777

if(userName === 'alex') {
    let account = +prompt('номер счета')
    if(account === 7777) {
       let money = +prompt('сколько обналичить')
       if(money >= 10001 <= 0 ) {
        let userBalace = 10000
        let totalBalace = userBalace - money
        alert('все отлично')
        alert('вы сняли со счета ' + money)
        alert('на счету осталось ' + totalBalace)
       } else {
        alert('не достаточна средств')
       }
    } else {
        alert('пользователь не найден досвидули!')
    }
} else {
    alert('пользователь не найден досвидули!')
}