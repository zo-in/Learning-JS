var user = {
    username: "Zaheen",
    password: "zaheenPassword"
};

user
{username: 'Zaheen', password: 'zaheenPassword'}password: "zaheenPassword"username: "Zaheen"[[Prototype]]: Object
var database = {user}

data
VM331:1 Uncaught ReferenceError: data is not defined
    at <anonymous>:1:1
(anonymous) @ VM331:1
database
{user: {…}}user: password: "zaheenPassword"username: "Zaheen"[[Prototype]]: Object[[Prototype]]: Object
var database = [user]

data
VM503:1 Uncaught ReferenceError: data is not defined
    at <anonymous>:1:1
(anonymous) @ VM503:1
database
[{…}]0: {username: 'Zaheen', password: 'zaheenPassword'}length: 1[[Prototype]]: Array(0)
database[0];
{username: 'Zaheen', password: 'zaheenPassword'}
var newsfeed = [
    {
        username: "Zaheen",
        timeline: "JS JS JS"
    },
    {
        username: "Ashmit",
        timeline: "Node Node Node"
    },
    {
        username: "Kumu",
        timeline: "CPP CPP CPP"
    }
    ];
    
undefined
newsfeed
(3) [{…}, {…}, {…}]0: {username: 'Zaheen', timeline: 'JS JS JS'}1: {username: 'Ashmit', timeline: 'Node Node Node'}2: {username: 'Kumu', timeline: 'CPP CPP CPP'}length: 3[[Prototype]]: Array(0)