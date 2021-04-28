
function myFunction() {
  const lsNameOutput = document.getElementById("lsNameOutput");
  const userName = localStorage.getItem("nome");
  if (userName) {
    lsNameOutput.innerHTML = userName;
  }
}
