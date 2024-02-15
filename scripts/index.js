console.log('connected');

const cards = document.querySelectorAll('.card');
// console.log(cards);

let selectedProductNumber = 1;
let totalPrice = 0;

for (const card of cards) {

    card.addEventListener('click', function () {
        // get the title for each card

        const title = card.querySelector('h2').innerText;

        // get the price for each card

        const price = parseFloat(card.querySelector('p').innerText.split(' ')[1]);

        // added as selected product when a product is clicked.

        const selectedProductsContainer = document.getElementById('selected-products-container');

        const p = document.createElement('p');

        p.innerText = selectedProductNumber + ' ) ' + title;

        selectedProductsContainer.appendChild(p);

        selectedProductNumber++;


        // added price in total price element

        const totalPriceElement = document.getElementById('total-price');

        totalPrice = totalPrice + price;
        totalPriceElement.innerText = totalPrice;



    })


}


// coupon apply button

const discountApplyButton = document.getElementById('discount-apply-button');

discountApplyButton.addEventListener('click', function () {

    const discountInputElement = document.getElementById('discount-input');
    console.log(discountInputElement)
    const discountInputValue = discountInputElement.value.split(' ').join('').toUpperCase();


    console.log(discountInputValue)

    if (discountInputValue === 'SELL200') {

     
        if (totalPrice >= 200) {
            const discountElement = document.getElementById('discount');
            const discountAmount = totalPrice * 20 / 100;
            discountElement.innerText = discountAmount.toFixed(2);

            const restPrice = totalPrice - discountAmount;

            const total = document.getElementById('total');
            total.innerText = restPrice;
        }
        else{
            alert('please buy the products more than 200 dollars')
        }


    } else {
        alert('please provide the right coupon named as SELL200 ')
    }


})
