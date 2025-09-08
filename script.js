
var totale = document.querySelectorAll('.totale')
var btnPlus = document.querySelectorAll('.plus')
var price = document.querySelectorAll('.price')


for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener('click', function () {
        btnPlus[i].nextElementSibling.innerText++
        const priceValue = Number(price[i].innerText);
        const totaleValue = Number(totale[0].innerText);
        totale[0].innerText = totaleValue + priceValue


    })
}

var btnMin = document.querySelectorAll('.min')

for (let i = 0; i < btnPlus.length; i++) {
    btnMin[i].addEventListener('click', function () {
        if (btnMin[i].previousElementSibling.innerText > 0) {
            btnMin[i].previousElementSibling.innerText--
            const priceValue = Number(price[i].innerText);
            const totaleValue = Number(totale[0].innerText);
            totale[0].innerText = totaleValue - priceValue
        }

    })
}



var heart = document.querySelectorAll('.heart')

// console.log(btnPlus)


for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', function () {
        if (heart[i].style.color != 'red') {
            heart[i].style.color = 'red'
        } else {
            heart[i].style.color = 'black'
        }

    })
}



var trash = document.querySelectorAll('.trash')
var card = document.querySelectorAll('.card')
// console.log(btnPlus)


for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener('click', function () {
        card[i].style.display = 'none'
    })
}

