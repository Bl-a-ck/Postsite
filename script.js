let qR = new XMLHttpRequest();

let main = document.querySelector(".mPosts");

qR.onload = function () {
  if (qR.readyState == 4 && qR.status == 200) {
    console.log("data ready");
    let data = JSON.parse(qR.responseText);
    let posts = data.posts;

  console.log(posts)

    posts.map((ele) => {


      main.innerHTML += `
        <div class="contDiv">
          <li>
          <h2 class="tposts">${ele.title}</h2>
            <p class="pposts">${ele.body}</p>
          </li>
      
          <div class="divSpans">
            ${ele.tags.map(tag => `<span class="tagspan">${tag}</span>`).join('')}
          </div>
        </div>
      `;

    });
  } else {
    console.log("Error");
  }
};






let number = Math.ceil(Math.random() * 50);

qR.open("GET",`https://dummyjson.com/posts?limit=${number}`, true);
qR.send();





function showGets(slug){

  main.innerHTML = ` `
  
  qR.open("GET",`https://dummyjson.com/posts/tag/${slug}`, true);
  qR.send();
}

function gets() {
  let qrGets = new XMLHttpRequest();
  qrGets.onload = function () {
    if (qrGets.readyState == 4) {
      if (qrGets.status == 200) {
        let get = JSON.parse(qrGets.responseText);

        let divGets = document.querySelector(".aTags");

        get.map(function (ele) {
          divGets.innerHTML += `
                    <a class="tags"><span  onclick="showGets('${ele.slug}')"> ${ele.name} </span></a>
                  `;
        });

      }
    }
  };

  qrGets.open("GET",'https://dummyjson.com/posts/tags?limit=10', true);
  qrGets.send();
}

gets();




function search(word){
  main.innerHTML = ` `    
  qR.open("GET",`https://dummyjson.com/posts/search?q=${word}`, true);
  qR.send();

}

let searchI= document.querySelector(".searchInput")

searchI.addEventListener("keyup",()=>{
  search(searchI.value)
})


