clickevent();
function getInput() {
  var searchValue = document.querySelector("#giphy-search").value;
  return searchValue;
}

function clickevent() {
  var event = document.querySelector("#button-submit");
  event.addEventListener("click", () => {
    searchGiphy(getInput());
  });
}

function searchGiphy(searchRequest) {
  var url =
    "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" +
    searchRequest;

  var request = new XMLHttpRequest(); //create request or instance of XMLHttpRequest
  request.open("Get", url);
  request.send();
  request.addEventListener("load", (response) => {
    var data = JSON.parse(response.currentTarget.response);
    var tohtml = document.getElementById("giphy-images");
    tohtml.innerHTML ='';
    data.data.forEach((v) => {
      console.log(v.images.fixed_height_small.url);
      tohtml.innerHTML += "<img src='" + v.images.fixed_height_small.url + "'/>";
    });
  });
}
