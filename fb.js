var user = {
  username: "Zaheen",
  password: "zaheenPassword",
};

var database = [user];

var newsfeed = [
  {
    username: "Zaheen",
    timeline: "JS JS JS",
  },
  {
    username: "Ashmit",
    timeline: "Node Node Node",
  },
  {
    username: "Kumu",
    timeline: "CPP CPP CPP",
  },
];

var usernamePrompt = prompt("Please enter your username: ");
var passwordPrompt = prompt("Please enter your password: ");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("Sorry wrong username or password!");
  }
}

signIn(usernamePrompt, passwordPrompt);
