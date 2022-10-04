// video 33_3xtContex

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(country => displayCountries(country))


}
loadCountries()

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');

    /* for(const country of countries){
        const div = document.createElement('div')
        div.classList.add('contry-div')
        div.innerHTML = `
            <h2>${country.name}</h2>
            <p>${country.capital}</p>
        `
        countriesContainer.appendChild(div)
    } */

    // video 33_3

    countries.forEach(country => {  // forEach diya korlam
        // console.log(country);
        const div = document.createElement('div')

        div.classList.add('contry-div')

        div.innerHTML = `
            <h2>${country.name.common}</h2>
            <p>${country.capital ? country.capital[0] : 'No Capital'}<br><br>           
            <button onclick="loadCountryDetails(${country.cca2})">Display Details</button> 
          
        `
        countriesContainer.appendChild(div)


    });

}


const loadCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleCountryDetails(data[0]))


}


const displaySingleCountryDetails = (country)=>{
    console.log(country);

    const countryDetails= document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h1>Name: ${country.name.common}</h1>
        <img src="${country.flags.png}"  style="border:5px solid black; width: 200px">
    `

}



























/*
<p>${country.capital}</p>
<img src="${country.flag}"  alt="" style="width: 100px;">
<h4>${country.region}</h4>
<h3>${country.population}</h3>
<h3>${country.independent? 'Independent': 'unfree'}</h3> 
*/