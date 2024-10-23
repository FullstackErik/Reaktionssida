document.addEventListener("DOMContentLoaded", function () {
  //var för spelruta
  const gameWindow = document.querySelector(".gameWindow");

  const gameWindowActive = document.querySelector(".gameStarted");

  //var för timer
  let timer = Date.now();

  //click för att starta spelet
  const gameStart = gameWindow.addEventListener("click", function() {
    console.log("Spelet startas!");

    gameWindow.style.display = "none";

    //visar nya diven när spelet startas
    gameWindowActive.style.display = "block";


    timer;
    setInterval(function() {
        if (timer) {
            const currentTime = Date.now();
            const elapsedTime = ((currentTime - startTime) / 1000).toFixed(3);
            headerText.innerHTML = `Reaktionstid: ${elapsedTime}.`
        }
    });
  });

  const gameEnd = gameWindowActive.addEventListener("click", function() {
    console.log("Spelet är klart!");
  });
});
