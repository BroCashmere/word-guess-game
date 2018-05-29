let winCount = 0;
let lossCount = 0;
let lettersGuessed = [];
let lives = 6;
let remainingLetters = [];

let retrieversImage = 'https://gbgrr.org/wp-content/uploads/Home-page-donate.jpg';
let bulldogsImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Axel%2C_the_English_Bulldog.jpg/220px-Axel%2C_the_English_Bulldog.jpg';
let beaglesImage = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01.jpg';
let poodlesImage = 'https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/152/69/490612157.jpg';
let terriersImage = 'https://bowwowinsurance.com.au/wp-content/uploads/2014/12/jack-russell-terrier-smooth-700x700.jpg';
let boxersImage = 'http://cdn3-www.dogtime.com/assets/uploads/gallery/boxer-dogs-and-puppies/thumbs/thumbs_boxer-dogs-puppies-3.jpg';
let huskiesImage = 'https://www.dogbreedinfo.com/images27/SiberianHuskyPurebredDogAce2YearsOld.jpg';
let pomeranians = 'http://cdn1-www.dogtime.com/assets/uploads/gallery/pomeranian-dog-breed-pictures/thumbs/thumbs_10-onback.jpg';
let pugsImage = 'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23124_pug.jpg';
let chihuahuasImage = 'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/139/209/476463479.jpg';

let dogImages = [
  'https://gbgrr.org/wp-content/uploads/Home-page-donate.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Axel%2C_the_English_Bulldog.jpg/220px-Axel%2C_the_English_Bulldog.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01.jpg',
  'https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/152/69/490612157.jpg',
  'https://bowwowinsurance.com.au/wp-content/uploads/2014/12/jack-russell-terrier-smooth-700x700.jpg',
  'http://cdn3-www.dogtime.com/assets/uploads/gallery/boxer-dogs-and-puppies/thumbs/thumbs_boxer-dogs-puppies-3.jpg',
  'https://www.dogbreedinfo.com/images27/SiberianHuskyPurebredDogAce2YearsOld.jpg',
  'http://cdn1-www.dogtime.com/assets/uploads/gallery/pomeranian-dog-breed-pictures/thumbs/thumbs_10-onback.jpg',
  'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23124_pug.jpg',
  'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/139/209/476463479.jpg',
]

//Possible Answer Words

let possibleWords = [
    "Retrievers", 
    "Bulldogs", 
    "Beagles", 
    "Poodles",
    "Terriers",
    "Boxers",
    "Huskies", 
    "Pomeranians",
    "Pugs",
    "Chihuahuas"
];

//Choose Random Word on startup and create Game Interface

console.log(possibleWords);

window.onload = function() {
  createWord();
  createBlanks();
  displayGame();
}

//Randomize Word Function

function createWord() {
  word = possibleWords[Math.floor(Math.random() * possibleWords.length)];
  //word = word.toUpperCase();
  console.log("Word: " + word);
  remainingLetters = word.length;
  console.log("Remaining Letters: " + remainingLetters);
}

//Create answer blanks

function createBlanks() {
  answerArray = [];
  for (let i = 0; i<word.length; i++) {
  answerArray[i] = "_";
  }
  answerArrayDisplay = answerArray.join(" ");
  console.log(answerArray);
}

//Replacing Blank with Correct Letter

function replaceArray() {
  for (let i = 0; i < word.length; i++) {
    if (userGuess === word[i]) {
    answerArray[i] = userGuess;
    console.log("New Array: " + answerArray);
    console.log(answerArray[i]);
    remainingLetters--;
    console.log("Remaining Letters " + remainingLetters);
    }
}
}

//Display Array and Game Stats

function displayGame() {
  let game = document.getElementById('game');
      game.innerHTML = `
        <div style="font-weight: bold;">Current Word: ${answerArray}</div><br>
        <div>Letters Guessed: ${lettersGuessed}</div><br>
        <div>Remaining Letters: ${remainingLetters}</div><br>
        <div>Lives: ${lives}</div>
        <div>Wins: ${winCount}</div>
        <div>Losses: ${lossCount}</div>
        `
}

function displayImage() {
    let picture = document.getElementById('picture');
      picture.innerHTML = '
 
      '
}

//Reset Stats Function

function resetStats() {
  lives = 5;
  lettersGuessed = [];
  remainingLetters = [];
  createWord();
  createBlanks();
}

//Game and Input While the word has not been guessed

  document.onkeyup = function(event) {
    userGuess = event.key;
    //userGuess = userGuess.toUpperCase();
    console.log("User Guesses: " + userGuess);
  
    if (userGuess.length !==1 || !isNaN(userGuess) || lettersGuessed.includes(userGuess)) {
      return;
    }

    if (word.includes(userGuess) === false && lives > 0) {
      lives--
      lettersGuessed.push(userGuess);
      displayGame();
    }

    if (lives === 0) {
      alert("You have died, the word was: " + word);
      cI = possibleWords.indexOf(word);
      console.log("Image Index: " + currentImage);
      lossCount++;
      resetStats();
      displayGame();
    }

    if (word.includes(userGuess)) {
      lettersGuessed.push(userGuess);
      replaceArray();
      displayGame();
    }

    if (remainingLetters === 0) {
      alert("Congratulations!  You win, the word was: " + word);
      winCount++;
      resetStats();
      displayGame();

    }

  
}
