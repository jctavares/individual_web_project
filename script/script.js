
function loadUserAnswers() {
  const lsNameOutput = document.getElementById("lsNameOutput");
  const userName = localStorage.getItem("nome");
  if (userName) {
    lsNameOutput.innerHTML = userName;
  } else {
    lsNameOutput.innerHTML = "Não informado";
  }
}
