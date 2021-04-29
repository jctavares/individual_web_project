function storeUsername() {
  const inpKey = document.getElementById("inputValue");
  const value = inputValue.value;
  if (value) {
    localStorage.setItem("nome", value);
  }
}

function answers() {
  loadUserName();
  loadFavMovie();
  loadFavGenre();
  loadMediaPlataforms();
}

function loadUserName() {
  const lsNameOutput = document.getElementById("lsNameOutput");
  const userName = localStorage.getItem("nome");
  if (userName) {
    lsNameOutput.innerHTML = userName;
  } else {
    lsNameOutput.innerHTML = "Não informado";
  }
}

function loadFavMovie() {
  const lsFavMovieOutput = document.getElementById("lsFavMovieOutput");
  const favMovie = localStorage.getItem("filme_favorito");
  if (favMovie) {
    lsFavMovieOutput.innerHTML = favMovie;
  } else {
    lsFavMovieOutput.innerHTML = "Não informado";
  }
}

function loadFavGenre() {
  const lsGenreOutput = document.getElementById("lsGenreOutput");
  lsFavMovieOutput.innnerHTML = "Não informado";

}

funciton loadMediaPlataforms() {
  const lsMediaOutput = document.getElementById("lsMediaOutput");
  lsMediaOutput.innnerHTML = "Não informado";
}

function storeUserChoice() {
  var radios = document.getElementsByName("radios");
  const value = radios.value;
  if (radios.checked) {
    localStorage("genero",value);
  }
}

function autoCompleteText() {
  const movieId = document.getElementById("movieType");
  const autoComplete = document.getElementById("autoComplete");

}

function storeUserFav() {
    const inpKey = document.getElementById("inputValue");
    const value = inputValue.value;
    if (value) {
      localStorage.setItem("filme_favorito", value);
    }
}

function clearFields() {
    localStorage.clear()
}
