/*
===========================================================================================================================

==================================
Vanilla JS \ CLONES
==================================

1
Create a function that stacks n clones behind the a target element.
This function should create and append each clone behind the target, while assigning a background color following
the order of a static array of colors.

2
Clones will be displayed when the user clicks the main container.
Once the click is fired, clones should move down stacking one below the other on a single column.
A video reference is provided with the desired behaviour.


RULES:
- HTML should NOT be edited.
- LIBRARIES ARE NOT ALLOWED. Only good old js.
- Clones amount is an integer value.
- Color array can have any number of colors declared.
- Color order must be followed.


Tips:
- Use the video as reference, it's just more simple to understand.
- JS and CSS are both aviliable to edit, use it!
- If you have questions related to the challenge, just ask.

===========================================================================================================================
 */



// Deleting this line = cheating.
"use strict";

const palette = ["F38785", "C9CBA6", "EA4A66"];
const margin = 10;

var container;
var elems;
var box;

var isOpen = false;

/**
 * Create n clones and append the behind the target element.
 * @param {HTML Element} target 
 * @param {int} numberOfClones 
 */
function createOffsetClones(target, numberOfClones){
    let createdElements = [];
    let j = 0;

    createdElements.push(target);
    
    for (let i = 1; i < numberOfClones; i++) {
        
        createdElements.push(target.cloneNode(true));
        createdElements[i].classList.add("childBox");
        container.append(createdElements[i]);

        createdElements[i].style.backgroundColor = palette[j];
        j++;
        if (j > 2) {
            j = 0;
        }
    }
    return createdElements;
}

/**
 * The function to execute when the container is clicked. This should trigger the transition of the clones!
 * @param {MouseEvent} event 
 */



function click(event){

    for (let i = 1; i < elems.length; i++) {
               
       var position = 160 * i;

        if (isOpen === false){
            elems[i].style.transform = "translateY(" + position + "px)";
            elems[i].style.maxHeight= "150px";
            elems[i].style.visibility = "visible";
        } else {
            elems[i].style.maxHeight = "0px";
            elems[i].style.visibility = "hidden";
            elems[i].style.transform = "translateY(0px)";
        }

    }
    if (isOpen === false){
        isOpen = true;
    } else {
        isOpen = false;
    }    
}


// container element reference. This should be clicked.
container = document.querySelector(".container");
// box element reference. This should be cloned.
box = document.querySelector(".box");
// get the elemens
elems = createOffsetClones(box, 12);



container.addEventListener("click", click);