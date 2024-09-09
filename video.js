

let showClickedVideo = () => {
    let video_data = JSON.parse(localStorage.getItem("clickedVideo"));
  
    let video_div = document.getElementById("video_details");
  
  let iframe= document.createElement("iframe");
  
  iframe.src= `https://www.youtube.com/embed/${video_data.id.videoId}`
  iframe.width="100%";
  iframe.height="315";
  
  iframe.setAttribute("allowfullscreen", true);
  
  video_div.append(iframe);
  
  };
  