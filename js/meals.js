const loadMeals = (search) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML = ``;

    meals.forEach(meal => {
        // console.log(meal);

        const mealDiv = document.createElement('div')

        mealDiv.classList.add('col')

        mealDiv.innerHTML = `
        <div onclick=loadMealDetails(${meal.idMeal}) class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <h6>Category: ${meal.strCategory}</h6>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                <button class="btn btn-outline-warning">Order Now</button>
            </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv)

    });
}


const searchFood = () => {
    // console.log('search click');

    const searchInputField = document.getElementById('search-input-field');

    const searchInputFieldText = searchInputField.value;

    
    (searchInputFieldText);

    searchInputField.value = ''
}



const loadMealDetails = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}



const displayMealDetails = (meal) => {
    const mealsDetailsContainer = document.getElementById('meals-Details-container');
    mealsDetailsContainer.innerHTML = ``; //innerHTML, textContent*. innerText

    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card')

    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
            the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    
    `
    mealsDetailsContainer.appendChild(mealDiv);

}
loadMeals('');













