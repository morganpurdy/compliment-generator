// array of quotes
//sources: good housekeeping, forbes, huffington post
var quotes = ["\"You poetic and noble land mermaid.\"", "\"You are the greatest human being ever invented.\"", "\"Your brain is almost as perfect as your face!\"", "\"Oh you perfect sunflower.\"", "\"You beautiful rule-breaking moth.\"", "\"You are a beautiful, talented, brilliant, powerful musk ox.\"", "\"You are a beautiful tropical fish. You’re smart as a whip and you’re cool under pressure.\"", "\"You cunning, pliable, chestnut-haired sunfish.\"", "\"Oh you beautiful, naïve, sophisticated newborn baby.\"", "\"You are an opalescent tree shark.\"", "\"You are a rainbow infused space unicorn.\"", "\"Shut your mouth. You have all the strengths.\"", "\"You are a beautiful, sassy mannequin come to life.\"" ];

// button click to generate quote
document.querySelector('.generate').addEventListener('click', function() {
// randomization of quotes from array
var quote = quotes[Math.floor(Math.random() * quotes.length)];

  // make p class visible
 document.querySelector(".quoteDisplay").style.visibility = "visible";

// display quote
  document.querySelector(".quoteDisplay").textContent = quote;
});
