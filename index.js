let API_key = "AIzaSyA6ivIJBusOJRCkLCSPEnG_VSMgjRji0kE";

let search_results = document.getElementById("search_results");

async function searchVideos() {
  try {
    let query = document.getElementById("search").value;
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_key}`
    );
    let data = await response.json();
    // console.log(data.items);
    appendVideos(data.items);
  } catch (error) {
    console.log(error);
  }
}
const appendVideos = (array) => {
  search_results.innerHTML = "";
  array.forEach(function (element) {
    let { snippet, id } = element;
    let url = snippet.thumbnails.medium.url;
    let title = snippet.title;
    let channel_title = snippet.channelTitle;

    let div = document.createElement("div");
    let img= document.createElement("img");
    
    img.src=url;

    let name = document.createElement("h4");
    name.innerText= title;

    let cName = document.createElement("h5");
    cName.innerText= channel_title;


    div.append(img,name,cName);
    let data = {
        snippet,id
    }
    div.onclick = ()=>{
        showVideo(data);
    }

    search_results.append(div)

  });
};

function showVideo(x){
    window.location.href="./video.html"

    let localData= JSON.stringify(x);
    localStorage.setItem("clickedVideo",localData);

}
