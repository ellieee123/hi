const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
  "hi!",
    "i miss you everyday:(",
    "youre always my best core :D",
    "after all those yrs i still like you haha",
    "you bring out the best ver of me",
    "you and wonwoo are the only chinitong naka glasses i want in my life",
    "i believe in you, future pilot!",
    "sorry papansin",
    "your 8ball invites are the only invite i would accept, kahit 50m pa bet",
    "
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})
