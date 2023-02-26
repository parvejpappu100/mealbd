const loadMeals = () =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals =>{
    const mealsContainer = document.getElementById("meals-container");
    meals.forEach(meal =>{
        const mealDiv = document.createElement("div");
        mealDiv.innerHTML = `
            <div class="col">
                <div class="card mb-3" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${meal.strMeal}</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <button class="mealdb-btn">View Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);
        console.log(meal)
    })
}

loadMeals();