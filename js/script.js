"use stric"
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elList = document.querySelector(".movie__list");
let elSelect = document.querySelector(".form__select");
let elFilmInfo = document.querySelector(".film-info");
let elBookmarkList = document.querySelector(".bookmark__list");
let elBookmarklength = document.querySelector(".bookmark__length");
let elBookmarkBtn = document.querySelector(".header__bookmark");
let elBookmarkModal = document.querySelector(".bookmar__modal");
let elBookmarkModalOverlay = document.querySelector(".bookmark__overlay");
let elBookmarkModalPanel = document.querySelector(".bookmark__panel");

const bookmark = [];

const bookmarkRender = function (arr, element) {

     arr.forEach((filmBook) => {
          let elBookmarkItem = document.createElement("li");
          let elBookmarkImg = document.createElement("img");
          let elBookmarkBox = document.createElement("div");
          let elBookmarkHeader = document.createElement("h3");
          let elBookmarkRemovBtn = document.createElement("button");


          elBookmarkList.setAttribute("class", "bookmark__list");
          elBookmarkItem.setAttribute("class", "bookmark__item");
          elBookmarkImg.setAttribute("class", "bookmark__img");
          elBookmarkImg.setAttribute("src", filmBook.poster);
          elBookmarkBox.setAttribute("class", "bookmark__box");
          elBookmarkHeader.setAttribute("class", "bookmark__header");
          elBookmarkRemovBtn.setAttribute("class", "bookmark__delit-btn");


          elBookmarklength.textContent = bookmark.length;
          elBookmarkHeader.textContent = filmBook.title.slice(0, 15);

          elBookmarkRemovBtn.dataset.elBookmarkDeletBtnId = filmBook.id;


          element.appendChild(elBookmarkItem);
          elBookmarkItem.appendChild(elBookmarkImg);
          elBookmarkItem.appendChild(elBookmarkBox);
          elBookmarkBox.appendChild(elBookmarkHeader);
          elBookmarkBox.appendChild(elBookmarkRemovBtn);
     });
}

elList.addEventListener("click", function (e) {
     const isBookmarkDataBtn = e.target.matches(".bookmark");

     if (isBookmarkDataBtn) {
          let bookmarkBtnId = e.target.dataset.bookmarkBtnData;

          const filmFilterId = films.find(film => film.id === bookmarkBtnId)

          if (!bookmark.includes(filmFilterId)) {
               bookmark.push(filmFilterId);

               elBookmarkList.innerHTML = null
               bookmarkRender(bookmark, elBookmarkList);
          }
     }
});

elBookmarkList.addEventListener("click", function (ev) {

     if (ev.target.matches(".bookmark__delit-btn")) {

          const bookmarkDelitBtn = ev.target.dataset.elBookmarkDeletBtnId;

          const bookmarkFilterId = bookmark.findIndex(bookmarks => bookmarks.id === bookmarkDelitBtn)


          bookmark.splice(bookmarkFilterId, 1);
          elBookmarkList.innerHTML = null

          bookmarkRender(bookmark, elBookmarkList);
     }

});


elBookmarkModal.classList.add("hidden");
elBookmarkModalOverlay.classList.add("hidden");

elBookmarkBtn.addEventListener("click", function () {
     elBookmarkModal.classList.remove("hidden");
     elBookmarkModalOverlay.classList.remove("hidden");
});

elBookmarkModalOverlay.addEventListener("click", function () {
     elBookmarkModal.classList.add("hidden");
     elBookmarkModalOverlay.classList.add("hidden");
});

// movieModalOverlay.addEventListener("click", function () {
//      movieModal.classList.add("hidden");
//      movieModalOverlay.classList.add("hidden");
// });

const generateGenres = function (films) {
     const filteredGenres = [];

     films.forEach(film => {
          film.genres.forEach(genre => {
               if (!filteredGenres.includes(genre)) {
                    filteredGenres.push(genre)
               }
          });
     });

     filteredGenres.forEach(genre => {
          let newOption = document.createElement("option");

          newOption.value = genre;
          newOption.textContent = genre;

          elSelect.appendChild(newOption);
     });
};

generateGenres(films);

const filmsRendom = function (filmsArr, element) {

     filmsArr.forEach(film => {
          //MOVIE CARD

          let elBody = document.body;
          let elItem = document.createElement("li");
          let elMovieCrard = document.createElement("div");
          // Movie-Card-Header
          let movieCardHeader = document.createElement("div");
          let movieCardImg = document.createElement("img");
          // Movie-Overlay
          let movieOverlay = document.createElement("div");
          let movieOverlayBookmark = document.createElement("button");
          let movieOverlayReting = document.createElement("div");
          let movieRetingInfo = document.createElement("span");
          let movieOverlayPlayIcon = document.createElement("div");
          let movieOverlayInfo = document.createElement("div");
          // Movie-Card-Body
          let movieCardBody = document.createElement("div");
          let movieCardBodyTitle = document.createElement("h3");
          let movieCardBodyGenres = document.createElement("ul");
          // Movie-Modal
          let movieModal = document.createElement("div");
          let movieModalOverlay = document.createElement("div");
          let movieModalPanel = document.createElement("div");
          let movieModalPanelBtn = document.createElement("button");
          let movieModalImg = document.createElement("img");
          let movieModalTitle = document.createElement("h2");
          let movieModalPanleText = document.createElement("p");


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
          movieOverlayInfo.setAttribute("class", "film-info")
          // Movie-Card-Body
          movieCardBody.setAttribute("class", "movie__card-body");
          movieCardBodyTitle.setAttribute("class", "movie__card-title");
          movieCardBodyGenres.setAttribute("class", "movie__card-info");
          // Movie-Modal
          movieModal.setAttribute("class", "movie__over");
          movieModalOverlay.setAttribute("class", "overlay");
          movieModalPanel.setAttribute("class", "movie__panel");
          movieModalPanelBtn.setAttribute("class", "movie__panel-btn");
          movieModalImg.setAttribute("class", "movie__panel-img");
          movieModalImg.setAttribute("src", film.poster);
          movieModalTitle.setAttribute("class", "movie-header");
          movieModalPanleText.setAttribute("class", "movie-info");

          // TEXTCONTENT
          movieRetingInfo.textContent = film.reting;
          movieCardBodyTitle.textContent = film.title.slice(0, 20);
          movieModalTitle.textContent = film.title;
          movieModalPanleText.textContent = film.overview.slice(0, 500);

          // DATASET
          movieOverlayBookmark.dataset.bookmarkBtnData = film.id;

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
          movieOverlay.appendChild(movieOverlayInfo);
          // Movie-Card-Body
          elMovieCrard.appendChild(movieCardBody);
          movieCardBody.appendChild(movieCardBodyTitle);
          movieCardBody.appendChild(movieCardBodyGenres);
          // Movie-Modal
          elBody.appendChild(movieModal);
          movieModal.appendChild(movieModalPanel);
          movieModalPanel.appendChild(movieModalPanelBtn);
          movieModalPanel.appendChild(movieModalImg);
          movieModalPanel.appendChild(movieModalTitle);
          movieModal.appendChild(movieModalOverlay);
          movieModalPanel.appendChild(movieModalPanleText);

          movieModal.classList.add("hidden");
          movieModalOverlay.classList.add("hidden");

          movieOverlayInfo.addEventListener("click", function () {
               movieModal.classList.remove("hidden");
               movieModalOverlay.classList.remove("hidden");
          });

          movieModalPanelBtn.addEventListener("click", function () {
               movieModal.classList.add("hidden");
               movieModalOverlay.classList.add("hidden");
          });

          movieModalOverlay.addEventListener("click", function () {
               movieModal.classList.add("hidden");
               movieModalOverlay.classList.add("hidden");
          });

          // document.addEventListener('keydown', function (evt) {
          //      evt.preventDefault()
          //      if (evt.key == "Escape") {
          //           movieModal.classList.add("hidden");
          //           movieModalOverlay.classList.add("hidden");
          //      }
          // });
     });
};

filmsRendom(films, elList);

elForm.addEventListener("submit", function (evt) {
     evt.preventDefault();

     elList.innerHTML = null;

     let selectValue = elSelect.value;

     let filteredFilms = [];

     films.forEach(film => {
          if (selectValue === "all" || film.genres.includes(selectValue)) {
               filteredFilms.push(film);
          }
     });

     filmsRendom(filteredFilms, elList);
});

elInput.addEventListener('input', (e) => {
     const inputSearch = e.target.value;

     let filterFilms = films.filter(film =>
          inputSearch.toLowerCase() === film.title.slice(0, inputSearch.length).toLowerCase(),
          elList.innerHTML = null
     );
     filmsRendom(filterFilms, elList, films);
     generateGenres(filterFilms);
});
