const loadMeals = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals =>{
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerHTML = "";
    meals.forEach(meal =>{
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
            <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <button onclick="loadMealDetails(${meal.idMeal})" class="mealdb-btn" data-bs-toggle="modal" data-bs-target="#modalDetails">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () =>{
    const searchText = document.getElementById("search-field").value;
    loadMeals(searchText);
}

const loadMealDetails = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = details =>{
    const mealTitle = document.getElementById("modalDetailsTitle");
    mealTitle.innerHTML = details.strMeal;

    const modalBody = document.getElementById("modal-details-body");
    modalBody.innerHTML =`
        <img class="img-fluid" src="${details.strMealThumb}">
        <h6>Category : ${details.strIngredient1}</h6>
        <h6>Area : ${details.strArea}</h6>
        <p>Introduction: ${details.strInstructions}</p>
        <a  href="${details.strYoutube}" target="_blank">See how to make - Youtube</a>
    `;
    console.log(details)
}

loadMeals("chicken");