// Display product from Local Storage
const displayCartFromLocalStorage = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name, cart[name]);
    }
}

// Add Product
const addCart = () => {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  // Handle empty input
  if (!name || !price || isNaN(price)) {
    alert('Please Enter Valid namd and price')
    return;
  }
  // Display Products
  displayProduct(name, price);

  // Add Local Storage
  addProdcutToCart(name, price);

  // clear value
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
};

// Display Product
const displayProduct = (name, price) => {
  const productField = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = `${name} = ${price}`;
  productField.appendChild(li);
};

// Get Cart from Local Storage
const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProdcutToCart = (name, price) => {
  let productObj = getCart();
  if (productObj[name]) {
    productObj[name] = parseInt(productObj[name]) + parseInt(price);
  } else {
    productObj[name] = price;
  }

  const productObjStringified = JSON.stringify(productObj);
  localStorage.setItem("cart", productObjStringified);
};

displayCartFromLocalStorage();


const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

// Extra Feature
const refresh = () => location.reload();

const back = () => history.back();

const forward = () => history.forward();