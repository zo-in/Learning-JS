var database = [
  {
    username: "Zaheen",
    password: "zaheenPassword",
  },
  {
    username: "Ashmit",
    password: "ashmitPassword",
  },
  {
    username: "Satej",
    password: "satejPassword",
  },
];

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

// var ashmitNewsfeed = [
//   {
//     username: "Ashmit",
//     timeline: "JS JS JS",
//   },
//   {
//     username: "Satej",
//     timeline: "Node Node Node",
//   },
//   {
//     username: "Kumu",
//     timeline: "CPP CPP CPP",
//   },
// ];

// var satejNewsfeed = [
//   {
//     username: "Satej",
//     timeline: "JS JS JS",function isUserValid(username, password)
{
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}
//   },
//   {
//     username: "Ashmit",
//     timeline: "Node Node Node",
//   },
//   {
//     username: "Kumu",
//     timeline: "CPP CPP CPP",
//   },
// ];
var usernamePrompt = prompt("Please enter your username: ");
var passwordPrompt = prompt("Please enter your password: ");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry wrong username or password!");
  }
}

signIn(usernamePrompt, passwordPrompt);
