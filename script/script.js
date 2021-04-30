function storeUsername() {
  const inpKey = document.getElementById("inputValue");
  const value = inputValue.value;
  localStorage.setItem("nome", value);
}

function storeUserAnswer() {
  const inpKey = document.getElementById("inputAnswer");
  const value = inpKey.value;
  localStorage.setItem("quanto_gosta", value);
}

function answers() {
  loadUserName();
  loadFavMovie();
  loadFavGenre();
  loadMediaPlataforms();
  loadLiking();
}

function loadUserName() {
  const lsNameOutput = document.getElementById("lsNameOutput");
  const userName = localStorage.getItem("nome");
  if (userName) {
    lsNameOutput.innerHTML = userName;
  } else {
    lsNameOutput.innerHTML = "Sem nome";
  }
}

function loadLiking() {
  const lsLikingOutput = document.getElementById("lsLikingOutput");
  const liking = localStorage.getItem("quanto_gosta");
  if (liking) {
    lsLikingOutput.innerHTML = liking;
  } else {
    lsLikingOutput.innerHTML = "Sem resposta";
  }
}

function loadFavMovie() {
  const lsFavMovieOutput = document.getElementById("lsFavMovieOutput");
  const favMovie = localStorage.getItem("filme_favorito");
  if (favMovie) {
    lsFavMovieOutput.innerHTML = favMovie;
  } else {
    lsFavMovieOutput.innerHTML = "Sem filme favorito";
  }
}

function loadFavGenre() {
  const lsGenreOutput = document.getElementById("lsGenreOutput");
  const movieGenre = localStorage.getItem("genero");
  if (movieGenre) {
    lsGenreOutput.innerHTML = movieGenre;
  } else {
    lsGenreOutput.innerHTML = "Nenhum gênero de filme de preferência";
  }
}

function loadMediaPlataforms() {
  const lsMediaOutput = document.getElementById("lsMediaOutput");
  const physical = localStorage.getItem("midia-fisica");
  const digital = localStorage.getItem("midia-digital");
  const ilegal = localStorage.getItem("metodos-ilegais");
  const misterio = localStorage.getItem("maneiras-misteriosas");
  var cboxOptions = [];
  var frist = "";
  var second = "";
  var third = "";
  var fourth = "";
  if (physical) {
     first = "| Mídia Física "
  } else {
     first = "";
  }

  if (digital) {
     second = "| Mídia Digital "
  } else {
     second = "";
  }

  if (ilegal) {
     third = "| Torrent ";
  } else {
     third = "";
  }

  if (misterio) {
     fourth = "| Outras ";
  } else {
     fourth = "";
  }
  var teste = first + second + third + fourth
  if (!(physical) && !(digital) && !(ilegal) && !(misterio)) {
    lsMediaOutput.innerHTML = "Nenhum especificado";
  } else {
    lsMediaOutput.innerHTML = teste + "|";
  }
}

function storeUserChoice() {
  const userChoice = document.querySelector('input[name = "radios"]:checked').value;
  localStorage.setItem("genero", userChoice);
}

function autoCompleteText() {
  const autoComplete = document.getElementById("autoComplete");
  const movieGenre = localStorage.getItem("genero");
  if (movieGenre == "Outro") {
    autoComplete.innerHTML = "Desse gênero misterioso, <br>qual filme você me recomenda?";
  } else {
    autoComplete.innerHTML = "Qual a sua recomendação de <br>um filme de " + movieGenre + "?";
  }
}

function storeUserFav() {
  const inputValue = document.getElementById("inputValue");
  const value = inputValue.value;
  localStorage.setItem("filme_favorito", value);
}


function storeCheckbox() {
  // Antes de mais nada, eu sinto muito de verdade pelo brute-force
  // mas eu não consegui fazer funcionar de nenhum outro jeito
  // se não foi por bem, foi por mal mesmo
  var physical = document.getElementById("midia-fisica");
  var digital = document.getElementById("midia-digital");
  var ilegal = document.getElementById("metodos-ilegais");
  var misterio = document.getElementById("maneiras-misteriosas");

  if (physical.checked) {
    localStorage.setItem(physical.id,physical.value);
  }
  if (digital.checked) {
    localStorage.setItem(digital.id,digital.value);
  }
  if (ilegal.checked) {
    localStorage.setItem(ilegal.id,ilegal.value);
  }
  if (misterio.checked) {
    localStorage.setItem(misterio.id,misterio.value);
  }
}

function clearCheckbox() {
  localStorage.removeItem("midia-fisica");
  localStorage.removeItem("midia-digital");
  localStorage.removeItem("metodos-ilegais");
  localStorage.removeItem("maneiras-misteriosas");
}

function clearFields() {
  localStorage.clear();
}

function toggleVisible() {
  autoCompleteText();
  hiddenQuestion = document.getElementById("hiddenQuestion");
  hiddenQuestion.classList.add("visible");
  hiddenQuestion.classList.remove("invisible");
}
