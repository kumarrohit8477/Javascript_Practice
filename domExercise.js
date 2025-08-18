function createCard(title, cname, views, monthsOld, imgSrc, duration) {
   let viewStr
   if (views < 1000) {
      viewStr = views;
   }
   else if (views > 1000000) {
      viewStr = views / 1000000 + "M";
   }
   else {
      viewStr = views / 1000 + "K";
   }

   let html = `<div class="container">
      <div class="box1">
         <img src="${imgSrc}" alt="video thumbnail" class="thumbnail">
         <p">${duration}</p>
      </div>
      <div class="box2">
         <div class="title"> ${title} </div>
         <div class="cname"> ${cname}</div>
         <div class="views"> ${views}</div>
         <div class="monthsOld"> ${monthsOld}</div>
      </div>
   </div>`

   document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}
createCard("Introduction to Backend | Sigma Web Dev video #2","CodeWithHarry",560000,7,"https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:22"
);
