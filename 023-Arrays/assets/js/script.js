const CART = []

function _el(id) {
  return document.getElementById(id)
}

function addToCart() {
  const title = _el('prod_title').value;
  const qty = _el('prod_qty').valueAsNumber;
  const price = _el('prod_price').valueAsNumber;

  if(title === '') {
    toast.error('Enter title');
    return
  }
  if(isNaN(qty)) {
    toast.error('Enter quantity');
    return
  }
  if(qty <= 0) {
    toast.error('Incorect quantity');
    return
  }
  if(isNaN(price)) {
    toast.error('Enter price');
    return
  }

  const prodIndex = CART.findIndex(prod => {
    return prod.title === title;
  })

  if(prodIndex === -1) {
    CART.push({
      title,
      qty,
      price,
    });
  } else {
    CART[prodIndex].qty += qty;
  }


    _el('prod_title').value = '';
    _el('prod_qty').valueAsNumber = 1;
    _el('prod_price').value = '';

    toast.success('Product added');
    productList();
}

function productList() {
  let tbody = '';
  CART.forEach((prod, index) => {
    tbody += `<tr>
      <td>${index + 1}</td>
      <td>${prod.title}</td>
      <td>${prod.qty}</td>
      <td>${prod.price.toFixed(2)}</td>
      <td>${(prod.qty * prod.price).toFixed(2)}</td>
      <td>
        <button type="button" class="btn btn-danger btn-sm" onclick="deleteProd(${index}, '${prod.title}')">Remove</button>
      </td>
    </tr>`
  });

  _el('cart_body').innerHTML = tbody;
  _el('cart_total').innerHTML = sumProduct();


};

function deletProd(index, title) {
  if(confirm(`Do you want to delete ${title}?`)){
    CART.splice(index, 1);
    productList()
    toast.success('Prod deleted')
  }
}

function sumProduct() {
  return CART.reduce((accum, prod) => accum + prod.qty * prod.price, 0).toFixed(2);
}

function changeQty(index, action) {
  let qtyFirst = CART[index].qty;
  if(action === 'inc') {
    CART[index].qty++;
  }
  if(action === 'dec') {
    if(qtyFirst === 1) {
      deletProd(index, CART[index].title)
    } else {
      CART[index].qty--;
    }
  }
  productList();
}


