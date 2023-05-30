let xhr = new XMLHttpRequest();
let article = document.querySelector("article");
xhr.open("GET", "https://api.github.com/users", true);
xhr.responseType = "json";
xhr.addEventListener("load", () => {
  console.log(xhr.response);
  xhr.response.map(value => {
    let { login, avatar_url, html_url, type } = value;

    article.innerHTML += `
            <div class="card">
                <img src=${avatar_url} >
                <h2>
            ${login}
                </h2>
                <h3>  ${type} </h3>
                <a href=${html_url} target="_blank" > Github Profile </a>
            </div>
      `;
  });
});

xhr.send();
