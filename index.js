const filterAll = document.querySelector("#all");
const filterCakes = document.querySelector("#cakes");
const filterCupcakes = document.querySelector("#cupcakes");
const filterSweets = document.querySelector("#sweets");
const filterDoughnuts = document.querySelector("#doughnuts");
const filterInput = document.querySelector("#filterInput");
const card = document.getElementById("sth");
// document.getElementsByClassName("sweet").classList.replace("show", "hide");

function hideAll(className) {
  for (let i = 0; i < 12; i++) {
    document
      .getElementsByClassName(`${className}`)
      [i].classList.replace("show", "hide");
  }
}

function show(className) {
  for (let i = 0; i < 3; i++) {
    document
      .getElementsByClassName(`${className}`)
      [i].classList.replace("hide", "show");
  }
}

function filter(className) {
  hideAll("col");
  show(className);
}
function showAll(className) {
  for (let i = 0; i < 12; i++) {
    document
      .getElementsByClassName(`${className}`)
      [i].classList.replace("hide", "show");
  }
}

/* <li>
                                    <a class="dropdown-item" href="#">
                                        <div><img style="width:4rem;height:4rem" src="./Pics/cake-1.jpeg" alt="">Cake 1
                                        </div>
                                        <div class="price">$5</div>
                                    </a>
                                </li>  */

const cartList = document.getElementById("cartContent");
const input = document.querySelector("#filterInput");

card.addEventListener("click", addToCart);

function addToCart(e) {
  if (e.target.className == "fa-solid fa-cart-plus") {
    elem = e.target.parentElement;
    console.log(elem);
    cartContent.innerHTML += `<li>
                          <a class='dropdown-item' href='#'>
                            <div><img style='width:4rem;height:4rem' src=${elem.firstElementChild.src} >${elem.children[2].firstElementChild.firstElementChild.textContent}
                                        </div>
                                        <div class='price'>${elem.children[2].firstElementChild.children[1].textContent}</div>
                                    </a>
                                </li> `;
  }
}
input.addEventListener("keypress", filterByInput);
function filterByInput(e) {
  if (e.keyCode == 13) {
    hideAll("col");
    for (let i = 0; i < card.children.length; i++) {
      if (
        card.children[
          i
        ].firstElementChild.children[2].firstElementChild.firstElementChild.textContent
          .toLowerCase()
          .indexOf(input.value.toLowerCase().trim()) > 0
      ) {
        card.children[i].classList.replace("hide", "show");
      }
    }
  }
}
