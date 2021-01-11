var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload = function (){
    var countrydata = JSON.parse(this.response);
    for(i=0;i<countrydata.length;i++)
    {
      console.log(countrydata[i].name)
    }
}