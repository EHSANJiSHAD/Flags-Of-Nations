const loadCountries = () => {
    
    document.getElementById('loader').style.display = 'block';


    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();


const searchedCountry = () => {
    document.getElementById('loader').style.display = 'block';

    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;

    fetch(`https://restcountries.com/v3.1/name/${searchText}`)
        .then(res => res.json())
        .then(data => displayCountries(data))

        inputField.value = '';
        
}

// displayCountries(data)


const displaySearchedCountry = country => {
    const countryDiv = document.getElementById('single-country');
    console.log(country);
    countryDiv.innerHTML = '';
    country.forEach(country => {
        const h3 = document.createElement('h3');
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        
            <div >
               
              <h3>${country.name.common}</h3>
              <button  onclick="loadCountryName('${country.name.official}')" class="m-2" id="detail-btn"><a id="link" href="#top">DETAILS</a></button>
            
            </div>
            
            
            
        `
        // h3.innerText = country.name.official;
        // div.appendChild(h3);
        // const p =document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countryDiv.appendChild(div);
    });
    // countryDiv.innerHTML = '';
    document.getElementById('loader').style.display = 'none';
}

const displayCountries = countries => {
    const countryDiv = document.getElementById('countries');

    // for(const country of countries){

    // }
    countryDiv.innerHTML = '';
    countries.forEach(country => {
        const h3 = document.createElement('h3');
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        
            <div >
               
              <h3>${country.name.common}</h3>
              <button  onclick="loadCountryName('${country.name.official}')" class="m-2" id="detail-btn"><a id="link" href="#top">DETAILS</a></button>
            
            </div>
            
            
            
        `
        // h3.innerText = country.name.official;
        // div.appendChild(h3);
        // const p =document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countryDiv.appendChild(div);
    });
    // countryDiv.innerHTML = '';
    document.getElementById('loader').style.display = 'none';
}

const loadCountryName = name => {
    document.getElementById('loader').style.display = 'block';

    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => displayCountryDetail(data))

}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.classList.add('country');
    const countryName = country[0].name.official.toUpperCase()
    const capital = country[0].capital;
    console.log(country);
    countryDiv.innerHTML = `
        <img width="200px" src="${country[0].flags.svg}">
        <h3>COUNTRY DETAILS</h3>
        <h4>${countryName}</h4>
        <p>CAPITAL: ${capital}</p>
        <p>POPULATION: ${country[0].population}</p>
        
    `

    document.getElementById('loader').style.display = 'none';

}


