/**
 * author: Caterina Ilario Paz
 * GitHub: 
 */

// Creamos variables globales
let attempts = 3;
let balance = 1100.50;
let VALID_PIN = "1234"

// Enlazamos HTML y JavaScript
const amount = document.getElementById("amount")
const depositBtn = document.getElementById("deposit")
const withdrawBtn = document.getElementById("withdraw")
const transferBtn = document.getElementById("transfer")
const changePIN = document.getElementById("changePIN")
const exitBtn = document.getElementById("exit")
const currentBalance = document.getElementById("balance")

const logIn = () => {
    let pin = prompt(`Introduzca su PIN`)

    while (pin !== VALID_PIN && attempts > 1){
        attempts--;
        alert(`PIN incorrecto. Intentos restantes: ${attemps}`)
        prompt (`Introduzca PIN válido:`)
        return
    } 

    if(pin === VALID_PIN){
        alert(`Inicio de sesión exitoso. Bienvenido.`)
    } else{
        location.replace("/templates/blockedATM.html")
    }
}

//window.addEventListener("load", logIn)

const updateBalance = () => {
    currentBalance.innerText = `${balance.toFixed(2)}€`
    amount.value = ""
}

const clearInput = () =>{
    amount.value = "";
}

const depositBalance = () => {
    const deposit = parseFloat(amount.value)

    if(isNaN(deposit) || deposit <= 0){
        alert(`Importe no válido`)
        clearInput()
    } else {
        balance += deposit;
        alert(`Se han ingresado ${deposit}€ a su cuenta.`)
        updateBalance()
    }
}

depositBtn.addEventListener("click", depositBalance)

const withdrawBalance = () => {
    const withdrawal = parseFloat(amount.value)

    if(isNaN(withdrawal) || withdrawal <= 0){
        alert(`Importe no válido`)
        clearInput()
    } else if (withdrawal > balance){
        alert(`No tiene suficiente saldo en su cuenta para la transacción`)
        clearInput()
    }else{
        balance -= withdrawal
        alert(`Se han retirado ${withdrawal}€ a su cuenta.`)
        updateBalance()
    }
}

withdrawBtn.addEventListener("click", withdrawBalance)



const transferBalance = () => {
    const transfer = parseFloat(amount.value)
    const targetIBAN = prompt(`Ingrese número de cuenta bancaria:`)

    if(isNaN(transfer) || transfer <= 0){
        alert(`Importe no válido`)
        clearInput()
    } else if (transfer > balance){
        alert(`No tiene suficiente saldo para la transacción`)
        clearInput()
    }else{
        if(validateIBAN(targetIBAN))
        balance -= transfer
        alert(`Se han tranferido ${transfer}€ a la cuenta ${targetIBAN}.`)
        updateBalance()
    }
}

transferBtn.addEventListener("click", transferBalance)
