

var currentUser = 'Lohitha8';

document.getElementById("searchbtn").addEventListener("click", () => {
    var input = document.getElementById("DataList").value;
    searchRepos(input);
})

function searchRepos(input) {
    let url = "https://api.github.com/search/repositories?q=" + input;
    fetch(url)
        .then(response => response.json()).then(res => {
            var html = "";
            html += '<div class="left-menu">';
            res.items.forEach(element => {
                html += `<p class=' border-bottom' onClick="fetchData('` + element.owner.login + `')">` + element.owner.login + `/ ` + element.name + `</p>`;

            });
            html += '</div>';
            document.getElementById("datalistOptions").innerHTML = html;
            
        })
}

function getReposOfUser() {
    let url = "https://api.github.com/users/" + currentUser + "/repos";
    fetch(url)
        .then(response => response.json()).then(res => {
            // console.log(res);
            document.getElementById("profile-img").src = res[0].owner.avatar_url;
            var userhtml = "";
            userhtml += '<p class="username-style">' + res[0].owner.login + '</p>'
            document.getElementById("displayname").innerHTML = userhtml;

            var html = "";
            res.forEach(repo => {
                new Promise((resolve, reject) => {
                    let contentUrl = 'https://api.github.com/repos/' + currentUser + '/' + repo.name + '/contents';
                    fetch(contentUrl).then(result => result.json()).then(rest => {
                        // console.log(rest);

                        html += `<div id="accordion">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link font-black" data-toggle="collapse" data-target="#`+ repo.id + `"
                                        aria-expanded="true" aria-controls="`+ repo.id + `">` + repo.name +
                            ` </button>
                                        </h5>
                                    </div>
        
                                    <div id="`+ repo.id + `" class="collapse hide" aria-labelledby="headingOne"
                                        data-parent="#accordion">
                                        <div class="card-body">`;
                        if (rest instanceof Array) {
                            (rest || []).forEach(cont => {
                                html += `<div class='content-style'><a  href='https://github.com/` + currentUser + `/` + repo.name + `/tree/main/` + cont.name + `' target="_blank">` + cont.name + `</a></div>`
                            });
                        }


                        html += ` </div>
                                    </div>
                                </div>
                            </div>`



                        document.getElementById("repos").innerHTML = html;
                    })

                })
            })
        })
}

function fetchData(event) {
    // console.log(event);
    currentUser = event;
    getReposOfUser();
}

getReposOfUser();

document.getElementById("home").addEventListener("click", (e) => {
    currentUser = 'Lohitha8';
    getReposOfUser();

});
