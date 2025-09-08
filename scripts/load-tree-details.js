//loadTreeDetails(${plant.id})
/*
{
"status": true,
"message": "successfully fetched plant data",
"plants": {
"id": 4,
"image": "https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg",
"name": "Gulmohar",
"description": "Known as the ‘Flame of the Forest’, this tree bursts into a vibrant display of red flowers every summer. Perfect for beautifying avenues and gardens.",
"category": "Flowering Tree",
"price": 400
}
}

*/
const loadTreeDetails = async (id) => {
  try {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Await the parsing of the response body
    console.log(data.plants);
    displayDetails(data.plants);
  } catch (error) {
    console.error("Could not fetch data:", error);
  }
};

const displayDetails = (plant) => {
  const detailsContainer = document.getElementById("modal_container");
  detailsContainer.innerHTML = ``;
  const imgElem = document.createElement("img");
  imgElem.src = plant.image;
  imgElem.classList.add("rounded-xl", "pt-2");
  detailsContainer.appendChild(imgElem);

  const description = document.createElement("div");
  description.innerHTML = `<h3 id="" class="text-lg font-bold">${plant.name}</h3>
          <p class="py-4">${plant.description}</p>
          <p class="text-lg p-1 ">Category: ${plant.category}</p>
          <p class="">Price: <i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plant.price}</p>`;

  detailsContainer.appendChild(description);

  document.getElementById("tree_modal").showModal();
};
