
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999; path=/";
}
const jokes = [
  "A child asked his father, 'How were people born?' So his father said, 'Adam and Eve made babies, then their babies became adults and made babies, and so on.' " +
  "The child then went to his mother, asked her the same question and she told him, 'We were monkeys then we evolved to become like we are now.' " +
  "The child ran back to his father and said, 'You lied to me!' His father replied, 'No, your mom was talking about her side of the family.'",

  "Teacher: 'Kids, what does the chicken give you?' Student: 'Meat!' Teacher: 'Very good! Now what does the pig give you?' Student: 'Bacon!' " +
  "Teacher: 'Great! And what does the fat cow give you?' Student: 'Homework!'",

  "The teacher asked Jimmy, 'Why is your cat at school today Jimmy?' Jimmy replied crying, 'Because I heard my daddy tell my mommy, " +
  "'I am going to eat that pussy once Jimmy leaves for school today!''",

  "A housewife, an accountant and a lawyer were asked 'How much is 2+2?' The housewife replies: 'Four!'. " +
  "The accountant says: 'I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time.' " +
  "The lawyer pulls the drapes, dims the lights and asks in a hushed voice, 'How much do you want it to be?'",
];
let votedJokes = getCookie("votedJokes") ? JSON.parse(getCookie("votedJokes")) : [];
let remainingJokes = jokes.filter(j => !votedJokes.includes(j));
const jokeText = document.getElementById("joke-text");
const btnFunny = document.querySelector(".blue");
const btnNotFunny = document.querySelector(".green");
function showJoke() {
  if (remainingJokes.length > 0) {
    jokeText.textContent = remainingJokes[0];
  } else {
    jokeText.innerHTML = `<div class="end-message">That's all the jokes for today! Come back another day! 😁</div>`;
    document.querySelector(".buttons").style.display = "none";
  }
}
function voteJoke() {
  const currentJoke = remainingJokes.shift();
  votedJokes.push(currentJoke);
  setCookie("votedJokes", JSON.stringify(votedJokes), 1); 
  showJoke();
}
btnFunny.addEventListener("click", voteJoke);
btnNotFunny.addEventListener("click", voteJoke);
showJoke();
