//RenderPhone
export let renderPhone = (listPhone) => {
  let contentHTML = "";
  listPhone.forEach((item) => {
    let contentPhone = `
    <div class="col-3 card" style="width: 18rem">
          <img class="card-img-top" src=${item.img} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">
            Giá: $${item.price.toLocaleString()}<br>
            Camera sau: ${item.backCamera}<br>
            Camera trước: ${item.frontCamera}<br>
            Mô tả: ${item.desc}
            </p>
            <button onclick="addToCart(${
              item.id
            })" class="btn btn-primary">Add to card <i class="fa fa-shopping-cart fa-sm"></i></button>
          </div>
        </div>
    `;
    contentHTML += contentPhone;
    document.querySelector("#listProduct").innerHTML = contentHTML;
  });
};

//=========
window.renderPhone = renderPhone;
//Build PhoneArray
export let listItem = [];
window.listItem = listItem;
export let createPhoneArr = (resData) => {
  resData.forEach((item) => {
    listItem.push(item);
  });
};
//==========

//On/Off Loading
export let batLoading = () => {
  document.getElementById("loading").style.display = "flex";
};
export let tatLoading = () => {
  document.getElementById("loading").style.display = "none";
};
//==========

//Filter system
export let iphoneFiltered = [];
export let samsungFiltered = [];

export let filterIphone = (listItem) => {
  let cloneIphone = [];
  for (var index = 0; index < listItem.length; index++) {
    if (listItem[index].type == "Iphone") {
      cloneIphone.push(listItem[index]);
    }
  }
  iphoneFiltered = cloneIphone;
  renderPhone(iphoneFiltered);
};
window.filterIphone = filterIphone;

export let filterSamsung = (listItem) => {
  let cloneSamsung = [];
  for (var index = 0; index < listItem.length; index++) {
    if (listItem[index].type == "Samsung") {
      cloneSamsung.push(listItem[index]);
    }
  }
  samsungFiltered = cloneSamsung;
  renderPhone(samsungFiltered);
};
window.filterSamsung = filterSamsung;
//=========

//render Cart
export let renderCart = (cartArr) => {
  let totalPrice = 0;
  let cartItem = "";
  cartArr.forEach((item) => {
    totalPrice += item.price * item.amount;
    cartItem += `<tr>
  <td><img style="width:50px" src="${item.img}" alt="" /></td>
  <td>${item.name}</td>
  <td>
  <button onclick="decreaseCartItem(${item.id})" class="btn btn-sm"><</button>
  <span>${item.amount}</span>
  <button onclick="increaseCartItem(${item.id})" class="btn btn-sm">></button>
  </td>
  <td>$${(item.price * item.amount).toLocaleString()}</td>
  <td>
  <button onclick="deleteCartItem(${
    item.id
  })" class="btn btn-sm btn-danger"><i class="fa fa-trash-alt"></i>
  </button>
  </td>
  </tr>`;
  });
  document.querySelector("#cartBody").innerHTML = cartItem;
  if (totalPrice > 0) {
    document.querySelector(
      "#totalPrice"
    ).innerHTML = `Total: $${totalPrice.toLocaleString()}
    <br>
    <br>
    <button onclick="clearCart()" class="btn btn btn-danger mr-3">Clear Cart</button>
    <button onclick="buyCart()" class="btn btn btn-secondary">Thanh toán</button>
    `;
  } else {
    document.querySelector("#totalPrice").innerHTML = "";
  }
};
window.renderCart = renderCart;
//===========
