
// Select the Elements
var dateElement = document.getElementById("date");
var list = document.getElementById("list");
var input = document.getElementById("input");

// Classes names
var CHECKED = "dotted-circle";
var UNCHECKED = "dotted-circle-checked";
var LINE_THROUGH = "lineThrough";

// Variable
var LIST=[], id=0;
//date
var options = {weekday : "long", month:"short", day:"numeric"};
var today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add new function

function addNew(work, id, done, del){
    
    if(del){ return; }
    
    var DONE = done ? CHECKED : UNCHECKED;
    var LINE = done ? LINE_THROUGH : "";
    
    var item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${work}</p>
                    <i class="fa clear de" job="delete" id="${id}"></i>
                  </li>
                `;
    
    var place = "beforeend";
    
    list.insertAdjacentHTML(place, item);
}

// add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        var work = input.value;
        
        // if the input isn't empty
        if(addNew){
            addNew(work, id, false, false);
            
            LIST.push({
                name : work,
                id : id,
                done : false,
                del : false
            });
            
            id++;
        }
        input.value = "";
    }
});


// complete list
function complete_list(element){
    element.classList.toggle(CHECKED);
    element.classList.toggle(UNCHECKED);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove old
function remove_old(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].del = true;
}

// target the items created dynamically

list.addEventListener("click", function(event){
    const element = event.target; 
    const elementJob = element.attributes.job.value; 
    if(elementJob == "complete"){
        complete_list(element);
    }else if(elementJob == "delete"){
        remove_old(element);
    }
    
   
});


















