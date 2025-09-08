const loadCategory = async () => {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/categories"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Await the parsing of the response body
    //console.log(data); // The actual data
    let catIds = data.categories;
    //console.log(catIds);
    /*
     {id: 1, 
     category_name: 'Fruit Tree', 
     small_description: 'Trees that bear edible fruits like mango, guava, and jackfruit.'}
    */
    const parentUL = document.getElementById("tree-cat-ul");
    for (catId of catIds) {
      const btnDiv = document.createElement("div");
      btnDiv.innerHTML = `<button id="cat-btn-${catId.id}" onclick="loadDetailsByCategory(${catId.id})" class="btn category-btn btn-soft text-gray-700 w-[250px] h-[35px] rounded-xl btn-accent">${catId.category_name}</button>`;
      parentUL.appendChild(btnDiv);
    }
  } catch (error) {
    console.error("Could not fetch data:", error);
  }
};

loadCategory();
