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

/*
 IMORTANT: Put the script call at the bottom of the html file. They way that the program will load into memory is that the html document will go line by line, see the script file, then
 load the script into memory before continuing with the html document. If the script trys to load an html element that hasn't finished loading, then the associated functionality will have
 a null pointer error, meaning that the function returns no value due to the input being null.
 */


/*

This is a loop. These will, as their name suggests, loop through an element in order to modify data. You can use it to iterate over things like arrays or lists, or to modify a value until
it is usable.

*/

loop_arr = { 'string1', 'string2', 'string3' };

//arrays begin at 0, so string1 is loop_arr at 0, or loop_arr[0]



for (i = 0; i < loop_arr.length; i++) { //initializes the loop to the first element of the array, tells the loop to run as long as i is less than the length of the array, 
                                        //increments i after evaluation

    if (loop_arr[i] == 'string2') {// if the array at the value of i is equal to string2, do what's inside of the if statement
       console.log('string2');
        break; //keyword that tells the loop to stop. There is also the keyword continue, which tells the loop to go to the next iteration
    }

}