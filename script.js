let votes = JSON.parse(localStorage.getItem("votes")) || {
Anurag:0,
Saina:0,
Pritmanyu:0
};

function login(){

let name=document.getElementById("name").value

if(name===""){
document.getElementById("msg").innerHTML="Enter name"
}
else{
window.location="vote.html"
}

}

function adminLogin(){

let password = prompt("Enter Admin Password")

if(password === "madhu02"){
window.location="admin.html"
}
else{
alert("Wrong Password")
}

}

function vote(candidate){

votes[candidate]++

localStorage.setItem("votes",JSON.stringify(votes))

document.getElementById("voteMsg").innerHTML=
"You voted for "+candidate

}

function showResults(){

let data = JSON.parse(localStorage.getItem("votes"))

document.getElementById("result").innerHTML =

"Anurag : "+data.Anurag+" votes <br>"+
"Saina : "+data.Saina+" votes <br>"+
"Pritmanyu : "+data.Pritmanyu+" votes"

}