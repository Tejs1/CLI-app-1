const chalk = require("chalk");
let score = 0;
let winner = { name: "Omkar", score: "2" };
let questions = [
  {
    q: "1. Where Do I live?",
    a: " a: Nashik",
    b: " b: Mumbai",
    c: " c: Banglore",
    d: " d: Mars",
    ans: "a",
    anw: "d",
  },
  {
    q: "2. Which is my fav Color?",
    a: " a: Blue",
    b: " b: Black",
    c: " c: Yello",
    d: " d: Green",
    ans: "b",
    anw: "c",
  },
  {
    q: "3. Which series I liked most?",
    a: " a: Alter Carbon",
    b: " b: The Expanse",
    c: " c: Breaking Bad",
    d: " d: Dark Mirror",
    ans: "b",
    anw: "d",
  },
  {
    q: "4. Tech Person I admire most is ..",
    a: " a: Bill Gates",
    b: " b: Jeff Bezos",
    c: " c: Sundar Pichai",
    d: " d: Elon Musk",
    ans: "a",
    anw: "d",
  },
  {
    q: "5. Game I play Most is..",
    a: " a: CS go",
    b: " b: Chess",
    c: " c: Valorant",
    d: " d: Cyberpunk 2077",
    ans: "b",
    anw: "c",
  },
  {
    q: "6. which is my fav Anime Series?",
    a: " a: Naruto",
    b: " b: Sword Art Online",
    c: " c: Boruto",
    d: " d: The Promised Neverland",
    ans: "a",
    anw: "b",
  },
  {
    q: "7. which is my fav Anime Movie?",
    a: " a: 5 cm per Second",
    b: " b: Your Name",
    c: " c: A Silent Voice",
    d: " d: Flavours Of Youth",
    ans: "b",
    anw: "c",
  },
];

takeName();

function takeName() {
  let userName = prompt("HI whats your name?");
  while (userName == "") {
    console.log(chalk.cyan.bold(`Please, Enter your Name To Play`));
    takeName();
  }
  console.log(chalk.yellow.bold(`Welcome to my quiz ${userName}\n`));
  console.log(chalk.blue.bold("RULES FOR THE GAME\n"));
  console.log(
    "# Each qustion has 2 right answers , you need to guess only 1 correctly"
  );
  console.log(
    "To get add 1 point and wrong answer wil take 1 point from score.\n"
  );
  console.log(chalk.cyan.bold("Good Luck!!\n"));
  for (i = 0; i < questions.length; i++) {
    console.log(chalk.red(`Q${questions[i].q}`));
    console.log(questions[i].a);
    console.log(questions[i].b);
    console.log(questions[i].c);
    console.log(questions[i].d);
    `\n`;

    let answer = prompt(`enter options`);

    if (
      questions[i].ans == answer.toLowerCase() ||
      questions[i].anw == answer.toLowerCase()
    ) {
      score++;
      console.log(` \nCorrect answer`);
    } else {
      score--;
      console.log(` \nWrong answer `);
    }

    console.log(
      chalk.blue.bold(
        `Right Answers Were ${questions[i].ans} or ${questions[i].anw} \n`
      )
    );
    console.log(chalk.cyan.bold(`your score is ${score}\n`));
  }

  scoreTable();
  function scoreTable() {
    if (score > winner.score) {
      console.log(`\nCongratulations! ${userName}. your score is ${score}\nNow! you are the top player of the My QUIZ\n
     Send me screenshot and ill update your name`);
    } else {
      console.log(
        `\nBetter Luck Next Time ${userName} !\nyour Score is ${score} \nHighest score in Quiz is ${winner.score} by ${winner.name} \nHave a great day!`
      );
    }
  }
}
