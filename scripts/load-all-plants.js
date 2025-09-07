const loadAllPlants = async () => {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/plants"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Await the parsing of the response body
    console.log(data);
    const plants = data.plants;
    //console.log(plants); // The actual data

    const parentUL = document.getElementById("display-trees");
    console.log(parentUL);
    for (plant of plants) {
      //       console.log(catId.id);
      const item = document.createElement("div");
      item.classList.add(
        "card",
        "bg-amber-100",
        "max-w-[360px]",
        "max-h-[396px]",
        "shadow-lg",
        "rounded-xl",
        "flex",
        "flex-1",
        "flex-col"
      );

      const imgElem = document.createElement("img");
      imgElem.src = plant.image;
      imgElem.classList.add("rounded-xl", "max-h-[80px]", "scale-75");
      item.appendChild(imgElem);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      cardBody.innerHTML = `<h2 class="card-title text-xl">${plant.name}</h2>
                <p class="card-description text-sm">
                  ${plant.description}
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
                    class="btn w-9/10 bg-green-700 text-white rounded-xl hover:bg-yellow-700 hover:text-yellow"
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
loadAllPlants();

/*
<div class="card bg-base-100 w-76 shadow-lg">
            <figure>
              <img
                src="https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
                alt="mango trees"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-xl">Mango Tree</h2>
              <p class="card-description text-sm">
                A fast-growing tropical tree that produces delicious, juicy
                mangoes during summer. Its dense green.
              </p>
              <div class="cat-price flex flex-1 justify-around items-center">
                <p
                  class="cat w-1/2 text-lg p-1 bg-green-100 rounded-xl text-center"
                >
                  Fruit Tree
                </p>
                <p class="price w-1/2 text-lg bg-white text-right">
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>500
                </p>
              </div>
              <div class="card-actions justify-end">
                <button
                  class="btn btn-primary bg-green-700 hover:bg-yellow-700"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
*/
/*
{
    "id": 1,
    "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
    "name": "Mango Tree",
    "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
    "category": "Fruit Tree",
    "price": 500
}
*/
