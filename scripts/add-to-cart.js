let addedNode = 0;
let total = 0;
const addToCart = (id) => {
  const grandNode = document.getElementById(`add-btn-${id}`).parentNode
    .parentNode;
  const cardTitle = grandNode.querySelector(".card-title").textContent;
  const cardPrice = grandNode.querySelector(".price").textContent;
  const parentUL = document.getElementById("cart-history");
  const liItem = document.createElement("li");
  liItem.id = `cart-${addedNode}`;
  const tempId = liItem.id;
  console.log(tempId);
  liItem.classList.add(
    "rounded-xl",
    "bg-green-100",
    "max-w-sm",
    "flex",
    "flex-1",
    "flex-col"
  );
  liItem.innerHTML =
    `<div class="flex flex-1 flex-row justify-around p-2">
               <h2 class="cart-item-title w-8/10">` +
    cardTitle +
    `</h2>
               <button
                 class="remove-btn btn btn-error bg-green-100 hover:bg-red-100 btn-close"
               >
                 <i class="fa-solid fa-x"></i>
               </button>
             </div>
             <h2
               class="cart-item-price-tag text-normal text-right font-semibold"
             > ${cardPrice} * 1
            </h2>
           </div>`;
  addedNode++;
  parentUL.appendChild(liItem);
};
