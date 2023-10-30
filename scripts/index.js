/**
 * author: Caterina Ilario Paz
 * GitHub: 
 */

// Creamos variables globales
let attempts = 3;
let balance = 1100.50;
let valid_pin = "1234"

// Enlazamos HTML y JavaScript
const amount = document.getElementById("amount")
const depositBtn = document.getElementById("deposit")
const withdrawBtn = document.getElementById("withdraw")
const transferBtn = document.getElementById("transfer")
const changePINBtn = document.getElementById("changePIN")
const exitBtn = document.getElementById("exit")
const currentBalance = document.getElementById("balance")

// Función para iniciar sesión
const logIn = () => {
    let pin = prompt(`Introduzca su PIN`)

    while (pin !== valid_pin && attempts > 1){
        attempts--;
        alert(`PIN incorrecto. Intentos restantes: ${attempts}`)
        prompt (`Introduzca PIN válido:`)
        return
    } 
    location.replace("/templates/blockedATM.html")

    if(pin === valid_pin){
        alert(`Inicio de sesión exitoso. Bienvenido.`)
    } else{
        location.replace("/templates/blockedATM.html")
    }
}

//window.addEventListener("load", logIn)

// Función para actualizar saldo
const updateBalance = () => {
    currentBalance.innerText = `${balance.toFixed(2)}€`
    amount.value = ""
}

// Función para resetear input
const clearInput = () =>{
    amount.value = "";
}

// Función para ingresar saldo
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

// Función para retirar saldo
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

// Función para validar cuenta bancaria
const validateIBAN = iban =>{
    let regExp = "/^(ES)\d{22}$/"
}

// Función para realizar transferencia
const transferBalance = () => {
    const transfer = parseFloat(amount.value)

    if(isNaN(transfer) || transfer <= 0){
        alert(`Importe no válido`)
        clearInput()
    } else if (transfer > balance){
        alert(`No tiene suficiente saldo para la transacción`)
        clearInput()
    }else{
        targetIBAN = prompt(`Ingrese número de cuenta bancaria:`)

        if(validateIBAN(targetIBAN))
        balance -= transfer
        alert(`Se han tranferido ${transfer}€ a la cuenta ${targetIBAN}.`)
        updateBalance()
    }
}

transferBtn.addEventListener("click", transferBalance)

// Función para cambiar contraseña
const changePIN = () => {
    let pin = prompt(`Confirme su PIN actual:`)

    if(pin !== valid_pin){
        alert(`PIN incorrecto`)
    } else{
        let new_pin = prompt(`Introduzca su nuevo PIN`)
        valid_pin = new_pin
        alert("Cambio de PIN exitoso")
    }
}

changePINBtn.addEventListener("click", changePIN)


