//api: https://openapi.programming-hero.com/api/category/${id}
const loadDetailsByCategory = async (id) => {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/category/${id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const catData = await response.json(); // Await the parsing of the response body
    let plants = catData.plants;
    console.log(plants);
    /*
    {
    "status": true,
    "message": "successfully fetched plants data filtered by category",
    "plants": [
        {
            "id": 4,
            "image": "https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg",
            "name": "Gulmohar",
            "description": "Known as the ‘Flame of the Forest’, this tree bursts into a vibrant display of red flowers every summer. Perfect for beautifying avenues and gardens.",
            "category": "Flowering Tree",
            "price": 400
        },
        {
            "id": 5,
            "image": "https://i.ibb.co.com/qY8qS7YN/champa-min.jpg",
            "name": "Champa",
            "description": "A fragrant flowering tree that adorns gardens with its delicate white blossoms. Widely cherished in traditional rituals and perfumery.",
            "category": "Flowering Tree",
            "price": 300
        },
        {
            "id": 6,
            "image": "https://i.ibb.co.com/MxPrt83c/Krishnachura-min.jpg",
            "name": "Krishnachura",
            "description": "A striking ornamental tree famous for its brilliant orange-red blossoms. Its wide canopy adds a festive charm to parks and roadsides.",
            "category": "Flowering Tree",
            "price": 450
        }
    ]
}
     */
    const allCatBtns = document.querySelectorAll(`.category-btn`);
    allCatBtns.forEach((btn) => {
      btn.classList.remove(`active`);
    });

    const actBtn = document.getElementById(`cat-btn-${id}`);
    actBtn.classList.add("active");
    const parentUL = document.getElementById("display-trees");
    parentUL.innerHTML = "";
    console.log(parentUL);
    for (plant of plants) {
      const item = document.createElement("div");
      item.classList.add(
        "card",
        "bg-base-100",
        "w-60",
        "shadow-lg",
        "rounded-xl",
        "flex",
        "flex-1",
        "flex-col",
        "justify-center",
        "items-center"
      );

      const imgElem = document.createElement("img");
      imgElem.src = plant.image;
      imgElem.classList.add("rounded-xl", "pt-2");
      item.appendChild(imgElem);

      /*
      Slicing the description
      */
      let shortDescription = plant.description.substring(0, 50);
      shortDescription += "...";

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      cardBody.innerHTML = `
               <h2 class="card-title text-xl"><button onclick="loadTreeDetails(${plant.id})">${plant.name}</button></h2>  
        
                <p class="card-description text-sm">
                  ${shortDescription}
                </p>
                <div class="cat-price flex flex-1 justify-around items-center">
                  <p
                    class="cat w-1/2 text-lg p-1 bg-green-100 rounded-xl text-center"
                  >
                    ${plant.category}
                  </p>
                  <p class="price w-1/2 text-lg bg-transparent text-right">
                    <i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}
                  </p>
                </div>
                <div class="card-actions justify-end">
                   <button
                    id="add-btn-${plant.id}"
                    onclick="addToCart(${plant.id})"
                    class="btn add-btn w-9/10 bg-green-700 text-white rounded-xl hover:bg-yellow-700 hover:text-yellow"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>`;
      item.appendChild(cardBody);
      parentUL.appendChild(item);
    }
  } catch (error) {
    console.error("Could not fetch data:", error);
  }
};
// loadDetailsByCategory(1);
// loadDetailsByCategory(2);
