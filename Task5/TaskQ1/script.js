var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
    try {
        var countrydata = JSON.parse(this.response);
        for (i = 0; i < countrydata.length; i++) {
            if (countrydata[i].latlng[0] && countrydata[i].latlng[1]) {
                var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + countrydata[i].latlng[0] + '&lon=' + countrydata[i].latlng[1] + '&appid=893803fc55b1a23758f581541ce28fbf';

                new Promise(() => {
                    fetch(url).then((resp) => resp.json())
                        .then((data) => {
                            console.log(data.main.temp);
                        })
                })
            }
            else {
                console.log('Invalid latlng');
            }
            //   console.log(countrydata[i].latlng);


        }
    } catch (error) {

        console.log(error);
    }
}