"use stric"

let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elList = document.querySelector(".movie__list");


const filmsRendom = function (filmsArr, element) {
     filmsArr.forEach(film => {
          //MOVIE CARD
          let elItem = document.createElement("li");
          let elMovieCrard = document.createElement("div");
          // Movie-Card-Header
          let movieCardHeader = document.createElement("div");
          let movieCardImg = document.createElement("img");
          // Movie-Overlay
          let movieOverlay = document.createElement("div");
          let movieOverlayBookmark = document.createElement("div");
          let movieOverlayReting = document.createElement("div");
          let movieRetingInfo = document.createElement("span");
          let movieOverlayPlayIcon = document.createElement("div");
          // Movie-Card-Body
          let movieCardBody = document.createElement("div");
          let movieCardBodyTitle = document.createElement("h3");
          let movieCardBodyGenres = document.createElement("ul");


          //SETATTRIBUTE
          elItem.setAttribute("class", "movie__item");
          elMovieCrard.setAttribute("class", "movie__card");
          // Movie-Card-Header
          movieCardHeader.setAttribute("class", "movie__card-header");
          movieCardImg.setAttribute("class", "movie__card-img");
          movieCardImg.setAttribute("src", film.poster);
          // Movie-Overlay
          movieOverlay.setAttribute("class", "movie__card-overlay");
          movieOverlayBookmark.setAttribute("class", "bookmark");
          movieOverlayReting.setAttribute("class", "rating");
          movieRetingInfo.setAttribute("class", "movie__rating");
          movieOverlayPlayIcon.setAttribute("class", "play");
          // Movie-Card-Body
          movieCardBody.setAttribute("class", "movie__card-body");
          movieCardBodyTitle.setAttribute("class", "movie__card-title");
          movieCardBodyGenres.setAttribute("class", "movie__card-info");


          // TEXTCONTENT
          movieRetingInfo.textContent = film.reting;
          movieCardBodyTitle.textContent = film.title.slice(0, 20);

          //APPENDCHILD
          element.appendChild(elItem);
          elItem.appendChild(elMovieCrard);
          elMovieCrard.appendChild(movieCardHeader);
          // Movie-Card-Header
          movieCardHeader.appendChild(movieCardImg);
          movieCardHeader.appendChild(movieOverlay);
          // Movie-Overlay
          movieOverlay.appendChild(movieOverlayBookmark);
          movieOverlay.appendChild(movieOverlayReting);
          movieOverlayReting.appendChild(movieRetingInfo);
          movieOverlay.appendChild(movieOverlayPlayIcon);
          // Movie-Card-Body
          elMovieCrard.appendChild(movieCardBody);
          movieCardBody.appendChild(movieCardBodyTitle);
          movieCardBody.appendChild(movieCardBodyGenres);

          // film.genres.forEach(genre => {
          //      let elGenresItem = document.createElement("li");
          //      elGenresItem.textContent = genre
          //      movieCardBodyGenres.appendChild(elGenresItem);
          // })
     });
};

filmsRendom(films, elList);