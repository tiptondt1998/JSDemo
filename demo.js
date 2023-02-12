/*
The 'document' keyword refers to the html page. The 'getElementById method finds an html element by the name parameter passed.
In this case, "demo_button". The 'addEventListener' method then tells the script what to do based on the interaction. In this
case, when clicked, it executes a function that just triggers a window alert with the word "response" in it.
*/

document.getElementById("demo_button").addEventListener("click", function(){
    window.alert("response");
});


/*
You can have js call a function when the button is clicked with the onClick keyword. As you can see in the html file, the
id is changeColor and then it says onClick="changeColor()". This will tell the script that when this button is clicked,
execute this function.
*/
function changeColor(){
    let c = document.getElementById("changeColor");
    if(c.style.backgroundColor=="red"){
        c.style.backgroundColor = "white";
    }
    else{
    document.getElementById("changeColor").style.backgroundColor = "red";
    }
}

/*
You can also assign a function to a variable.
*/

var demo = function(){
    window.alert("a reponse");
}

var d = document.getElementById("demoFunction");
d.addEventListener("click", demo);


/*
This is to show how the window prompt function works.
*/

var nVal = document.getElementById("nFunction");

nVal.addEventListener("click", function(){
    var l = window.prompt("enter a value");
    window.alert(l);
});