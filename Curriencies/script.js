document.getElementById("btndata").addEventListener("click", () => {
  getCurrencies();
});
var apiUrl = "https://api.exchangeratesapi.io/latest?base=INR";

function getCurrencies() {
  let urlRequests = [];
  // ["USD", "GBP", "JPY", "AUD", "KRW"].forEach((url) => {
  //   urlRequests.push(getData(apiUrl.replace("{0}", url)));
  // });

  getData(apiUrl);
}
function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        renderHtml(data);
      });
  });
}

function renderHtml(data) {
  console.log(data);
  var input = document.getElementById("txt").value;
  var html = "<div>";
  ["USD", "GBP", "JPY", "AUD", "KRW"].forEach((value) => {
    var key = value;
    html += "<p>" + key + "  -  " + data.rates[key] * input + "</p>";
  });
  html += "</div>";
  document.getElementById("currencies").innerHTML = html;
  // var html =
}
