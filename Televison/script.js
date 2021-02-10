var btn = document.getElementById("btn");
btn.addEventListener("click", (x) => {
  getTvshows();
});
function getTvshows() {
  var input = document.getElementById("tnt").value;
  var url = "http://api.tvmaze.com/search/shows?q=" + input;
  getData(url);
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
  var html = "";
  html += '<div class="row text-center">';
  data.forEach((resp) => {
    html +=
      "<div class='card m-auto' style='width: 18rem;'><img src='" +
      (resp.show.image ? resp.show.image.medium : "") +
      "'/>";
    html +=
      "<div class='card-body'><p class='card-title'><b>" +
      resp.show.name +
      "</b></p>";
    resp.show.genres.forEach((gen, i) => {
      if (i == 0) {
        html += "<p>Genres: <span>" + gen + "</span>";
      } else {
        html += "<span> & " + gen + "</span>";
      }
    });
    html += "</p>";
    html += "<p> premiered : " + resp.show.premiered + "</p>";
    html +=
      "<p> Time : " +
      (resp.show.schedule ? resp.show.schedule.time : "") +
      "</p>";
    html +=
      "<p> Network : " +
      (resp.show.network ? resp.show.network.name : "") +
      "</p>";
    html += "</div></div>";
  });
  html += "</div>";
  document.getElementById("display").innerHTML = html;
}

// function renderHtml(data) {
//   var html = "";
//   html += '<div class="">';
//   data.forEach((resp) => {
//     html += '<div class="row  border border-dark m-1">';
//     html +=
//       "<div class='col'><img src='" +
//       (resp.show.image ? resp.show.image.medium : "") +
//       "'/></div>";
//     html += "<div class='col p-5'><p class='text-uppercase'><b>" + resp.show.name + "</b></p>";
//     resp.show.genres.forEach((gen, i) => {
//       if (i == 0) {
//         html += "<p>Genres: <span>" + gen + "</span>";
//       } else {
//         html += "<span> & " + gen + "</span>";
//       }
//     });
//     html += "</p>";
//     html += "<p> premiered : " + resp.show.premiered + "</p>";
//     html +=
//       "<p> Time : " +
//       (resp.show.schedule ? resp.show.schedule.time : "") +
//       "</p>";
//     html +=
//       "<p> Network : " +
//       (resp.show.network ? resp.show.network.name : "") +
//       "</p>";
//     html += "</div></div>";
//   });
//   html += "</div>";
//   document.getElementById("display").innerHTML = html;
// }
