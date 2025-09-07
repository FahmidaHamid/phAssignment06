//api: https://openapi.programming-hero.com/api/category/${id}
const loadDetailsByCategory = async (id) => {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/categories/${id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const catData = await response.json(); // Await the parsing of the response body
    console.log(catData); // The actual data
    //let catIds = data.categories;
    //console.log(catIds);
    /*
     {id: 1, 
     category_name: 'Fruit Tree', 
     small_description: 'Trees that bear edible fruits like mango, guava, and jackfruit.'}
    */
    // const parentUL = document.getElementById("tree-cat-ul");
    // for (catId of catIds) {
    //   console.log(catId.id);
    //   const item = document.createElement("a");
    //   item.href = "./index.html";
    //   item.textContent = catId.category_name;
    //   const liItem = document.createElement("li");
    //   liItem.id = `${catId.id}`;
    //   liItem.classList.add(`w-[250px]`, `h-[35px]`);
    //   liItem.appendChild(item);
    //   parentUL.appendChild(liItem);
    // }
  } catch (error) {
    console.error("Could not fetch data:", error);
  }
};
// loadDetailsByCategory(1);
// loadDetailsByCategory(2);
