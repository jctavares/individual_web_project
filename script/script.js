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

function preLoadName() {
  var userName = document.getElementById("inputValue");
  var userLiking = document.getElementById("inputAnswer");
  const name = localStorage.getItem("nome");
  const answer = localStorage.getItem("quanto_gosta");
  if ("nome" in localStorage) {
    inputValue.value = name;
  }
  if ("quanto_gosta" in localStorage) {
    inputAnswer.value = answer;
  }

}

function movieRec() {
  inputAnswer = document.getElementById("inputValue");
  const value = localStorage.getItem("filme_favorito");
  if ("filme_favorito" in localStorage) {
    inputAnswer.value = value;
  }
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
    lsFavMovieOutput.innerHTML = "Sem recomendação";
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
  var lsMediaOutput = document.getElementById("lsMediaOutput");
  var plataform = localStorage.getItem("midia");
  if (plataform) {
    lsMediaOutput.innerHTML = plataform;
  } else {
    lsMediaOutput.innerHTML = "Não indicada";
  }
}

function storeUserChoice() {
  const userChoice = document.querySelector('input[name = "radios"]:checked').value;
  localStorage.setItem("genero", userChoice);
}

function autoCompleteText() {
  const autoComplete = document.getElementById("autoComplete");
  const movieGenre = localStorage.getItem("genero");
  var completeText = "Tem algum filme pra me recomendar ";
  var text = "";

  switch (movieGenre) {
    case "Outro":
    text = "<br>desse gênero misterioso?"
    break;
    case "Ação":
    text = "que<br>não seja Duro de Matar?";
    break;
    case "Aventura":
    text = "<br> fora Indiana Jones?";
    break;
    case "Comédia":
    text = "<br> além de Click? Já deu desse."
    break;
    case "Terror":
    text = "?<br>Não que eu vá ver..."
    break;
    case "Suspense":
    text = "além<br>de Paranoia? Muito bom por sinal :)"
    break;
    case "Drama":
    text = "pra<br>que eu passe longe? Não curto drama..."
    break;
    case "Ficção":
    text = "fora<br>Star Wars? Star Trek não conta."
    break;
    case "Animação":
    text = "?<br>Mas que não seja Toy Story."
    break;
    default:
    break;
  }
  autoComplete.innerHTML = completeText + text;
}

function storeUserFav() {
  const inputValue = document.getElementById("inputValue");
  const value = inputValue.value;
  localStorage.setItem("filme_favorito", value);
}

function loadCboxPreferences() {
  var checkbox = document.getElementById("checkbox");
  var choice = localStorage.getItem("midia");
  if (choice) {
    // muitíssimo obrigado ao stackoverflow, isso também
    // não queria ir de jeito nenhummmmsadpfasijfiop
    $("select[name=checkbox]").val(choice);
  }
}

function loadRadio() {
  // professor me perdoe mas eu não consegui
  // fazer isso funcionar de nenhum outro
  // jeito não kkkkkkkk
  var radios = document.getElementsByName("radios");
  var genero = localStorage.getItem("genero");
  var type1 = document.getElementById("type1");
  const inpKey = document.getElementById("inputAnswer");
  switch (genero) {
    case "Ação":
    type1.checked = true;
    toggleVisible();
    movieRec();
    break;
    case "Aventura":
    type2.checked = true;
    toggleVisible();
    movieRec();
    break;
    case "Comédia":
    type3.checked = true;
    toggleVisible();
    movieRec();
    break;
    case "Terror":
    type4.checked = true;
    toggleVisible();
    movieRec();
    break;
    case "Suspense":
    type5.checked = true;
    toggleVisible();
    movieRec();
    break;
    case "Drama":
    type6.checked = true;
    toggleVisible();
    movieRec();
    break;
    case "Ficção":
    type7.checked = true;
    toggleVisible();
    movieRec();
    break;
    case "Animação":
    type8.checked = true;
    toggleVisible();
    movieRec();
    break;
    case "Outro":
    type9.checked = true;
    toggleVisible();
    movieRec();
    break;
    defautl:
    break;
  }
}

function storeCheckbox (selection) {
  var choice = selection.options[selection.selectedIndex];
  localStorage.setItem(choice.id, choice.value);
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
