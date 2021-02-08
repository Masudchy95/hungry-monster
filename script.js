const mealSearchDisplay = () => {
  const inputSearch = document.getElementById("input-search").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`;
  // Load Data
  fetch(url)
    .then((res) => res.json())
    .then((data) => mealNameDisplay(data.meals))
    .catch((error) => displayError('Nothing found!! Please try another search.'))
}

const mealNameDisplay = (meals) => {
  const mealContainer = document.getElementById("meal-container");

  mealContainer.innerHTML = "";
  meals.forEach((meal) => {
    
    const mealDiv = document.createElement("div");
    mealDiv.className = "meal-details";
    mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="" width= "250px">
        <h5 class="meal-name">${meal.strMeal}</h5>
        <p>${meal.strCategory}</p>
   `;
    mealContainer.appendChild(mealDiv);
  });
};


const displayError = error => {
  const errorTag = document.getElementById("error-message");
  errorTag.innerText = error;
}
// const mealContainerDetails = document.getElementsByClassName("meal-details").addEventListener("click", function(){
//   console.log("Clicked me");
// });