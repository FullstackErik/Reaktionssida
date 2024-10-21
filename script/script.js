document.addEventListener("DOMContentLoaded", function () {
  //var för spelruta
  const gameWindow = document.querySelector(".gameWindow");

  const gameWindowEnd = document.querySelector(".gameStarted");

  //var för h1
  const headerText = document.querySelector("h1");

  //var för timer
  let timer = Date.now();

  //click för att starta spelet
  const gameStart = gameWindow.addEventListener("click", function () {
    console.log("Spelet startas!");

    gameWindow.style.backgroundColor = "green";
    gameWindow.className = "gameStarted";

    //gömmer texten under spelet
    headerText.style.display = "none";

    timer;
    // setInterval(function() {
    //     if (timer) {
    //         const currentTime = Date.now();
    //         const elapsedTime = ((currentTime - startTime) / 1000).toFixed(3);
    //         headerText.innerHTML = `Reaktionstid: ${elapsedTime}.`
    //     }
    // });
  });
  //gameWindowEnd finns inte när DOMen laddas och ger därför error
  const gameEnd = gameWindowEnd.addEventListener("click", function () {
    console.log("Spelet är klart!");
  });
});
