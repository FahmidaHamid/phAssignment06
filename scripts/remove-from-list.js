// const parent = document.getElementById("cart-history");
// console.log(parent);

const liChildren = document.querySelectorAll(".remove-btn");
console.log(liChildren);
liChildren.forEach((child) => {
  child.addEventListener("click", (event) => {
    event.preventDefault();
    const parentElement = event.target.parentNode;
    console.log(parentElement);
    //const childToRemove = parentElement.querySelector('.child-to-remove');
  });
});
