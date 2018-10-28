<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css">
  <title>Number Guesser</title>
  <style>
    .playagain{
      display:none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Number Guesser by Nishant</h1>
    <div id="game">
      <p>Guess a Number between <span class="min-num">1</span> and <span class="max-num">10</span></p>
      <input type="number" placeholder="Enter your guess" id="guess-input">
      <input type="submit" value="Submit" id="guess-btn">
      <p class="message"></p>
    </div>
    <button class="playagain">Play Again</button>
  </div>
  <script src="app.js" ></script>
</body>
</html>
