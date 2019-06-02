//JavaScript to get username and comment
function newElement() {
    var li = document.createElement("li");
    var inputValue1 = document.getElementById("username").value;
    var inputValue2 = document.getElementById("comment").value;
    var t = document.createTextNode(inputValue1 + ": ");
    li.appendChild(t);
    //pop up alert if nothing is entered
    if (inputValue1 === '') {
        alert("You must enter a username");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("username").value = "";

    //adds username and comment to Text Node
    var t2 = document.createTextNode(inputValue2);
    li.appendChild(t2);
    //pop up alert if nothing is entered
    if (inputValue2 === '') {
        alert("You must enter a comment");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("comment").value = "";

    //store input in local cache
    localStorage.setItem("text", inputValue1 + ": " + inputValue2);
}

//shows most recent comment from local cache
function comment() { 
    document.getElementById("result").innerHTML = localStorage.getItem("text");
}