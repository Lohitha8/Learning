var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
  var countrydata = JSON.parse(this.response);

  //  ***countries from Asia***
  console.log('***countries from Asia***');
  let countriesFromAsia = countrydata.filter((x) => x.region == 'Asia');
  console.log(countriesFromAsia);

  //   ***countries with population lessthan 2 lakh***
  console.log('***countries with population lessthan 2 lakh***')

  let countriespopulation = countrydata.filter((x) => x.population < 2000000);
  console.log(countriespopulation);

  // ***print name capital and flag by foreach***
  console.log( '***print name capital and flag by foreach***');

  countrydata.forEach(country => {
    console.log("Name:", country.name, "Capital:", country.capital, "Flag:", country.flag);
  });

  // ***Total population***
  console.log('***Total population***');

 let totalpopulation = countrydata.reduce((total, country) => total + country.population, 0);
  console.log(totalpopulation);

  //***country which uses US Dollars as currency***
  console.log('***country which uses US Dollars as currency***');

 
 let sol= countrydata.filter(x=>x.currencies.find(y=>y.code =="USD"));
  console.log(sol);


}