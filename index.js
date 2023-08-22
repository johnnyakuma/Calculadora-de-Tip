function formatMoney(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value
}
function formatSplit(value) {
    if (value == 1) return value +' Person'
    return value + ' People'
}

function update(){
    //console.log('ok') //teste se esta funcionando
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value // ja esta como num,ero no html
    let split = document.getElementById('splitInput').value

    //console.log({bill, tipPercent, split} )//teste

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    //console.log(billEach)

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML =formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
}