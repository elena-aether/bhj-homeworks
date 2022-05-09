const products = document.querySelectorAll('.product')
const cart = document.querySelector('.cart__products')


function addItem (id, img, q) {
    const cartItem = document.createElement('div')
    cartItem.classList.add("cart__product")
    cartItem.dataset.id = id
    cartItem.innerHTML = `<img class="cart__product-image" src="${img}"> <div class="cart__product-count">${q}</div>`
    cart.insertAdjacentElement('beforeend', cartItem)
}

for (const product of products) {
    const btAdd = product.querySelector('.product__add')
    const btUp = product.querySelector('.product__quantity-control_inc')
    const btDn = product.querySelector('.product__quantity-control_dec')
    const qty = product.querySelector('.product__quantity-value')
    const id = product.dataset.id
    const img = product.querySelector('.product__image').src

    btUp.addEventListener ('click', (e) => {
        e.preventDefault()
        let q = qty.textContent
        q++
        qty.textContent = q
    })

    btDn.addEventListener('click', (e) => {
        e.preventDefault()
        let q = Number(qty.textContent)
        if (q > 0) {
            q--
        } else {
            q=0
        }     
        qty.textContent = q
    })

    btAdd.addEventListener('click', e => {
        e.preventDefault()
        let q = Number(qty.textContent)
        if (q != 0) {

    const cartItems = Array.from(cart.querySelectorAll(".cart__product"))

            if(cartItems.length != 0) {
                const match = cartItems.find(i => i.dataset.id === id)
                if (!match) {
                    addItem (id, img, q)
                } else {
                    let count = Number(match.querySelector('.cart__product-count').textContent)
                    match.querySelector('.cart__product-count').textContent = count + q
                }

            } else {
                addItem (id, img, q)
            }
        }
    })
}
