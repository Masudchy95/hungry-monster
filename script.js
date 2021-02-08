const mealSearchDisplay = () => {
  const inputSearch = document.getElementById("input-search").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputSearch}`
  fetch(url)
  .then(res => res.json())
  .then(data => mealNameDisplay(data.meals))
}

const mealNameDisplay = meals => {
  const mealContainer = document.getElementById("meal-container");
  mealContainer.innerHTML = '';
 meals.forEach (meal => {
   const mealDiv = document.createElement("div");
   mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="" width= "250px">
        <p class="meal-name">${meal.strMeal}</p>
   `;
   mealContainer.appendChild(mealDiv);
 })
}
