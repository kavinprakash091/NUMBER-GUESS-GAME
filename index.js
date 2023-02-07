const answer = Math.floor(Math.random() * 100) + 1;
var chances = 10;

document.getElementById("guess").addEventListener("click", () => {
  var number = document.getElementById("numberVal").value;
  document.getElementById("numberVal").value = "";
  if (number == answer) {
    document.getElementsByClassName("message-box")[0].innerHTML =
      "Super Guess! Correct answer.";
    document.getElementsByClassName("message-box")[0].style.display = "block";
    document.getElementsByClassName("message-box")[0].style.backgroundColor =
      "#76fc76";
  } else if (number < answer) {
    document.getElementsByClassName("message-box")[0].innerHTML =
      "Wrong Guess! Your guess is low";
    document.getElementsByClassName("message-box")[0].style.display = "block";
    document.getElementsByClassName("previous-guess")[0].innerHTML +=
      "  " + number;
  } else if (number > answer) {
    document.getElementsByClassName("message-box")[0].innerHTML =
      "Wrong Guess! Your guess is high";
    document.getElementsByClassName("message-box")[0].style.display = "block";
    document.getElementsByClassName("previous-guess")[0].innerHTML +=
      "  " + number;
  }
  chances -= 1;
  if (chances == 0) {
    document.getElementsByClassName("message-box")[0].innerHTML =
      "Oops! You Lost the Game.";
    document.getElementById("guess").disabled = true;
  }
});
