let myList = document.getElementsByTagName("li");
let i;
//create "close" button

for (i=0; i<myList.length; i++) {
    let span= document.createElement("span");
    let txt= document.createTextNode("\uD83D\uDDD1");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

//create "edit" button
for(i=0; i<myList.length; i++) {
    let span_edit= document.createElement("span");
    let edit_icon= document.createTextNode("\u270E");
    span_edit.className= "edit";
    span_edit.appendChild(edit_icon);
    myList[i].appendChild(span_edit);

    span_edit.addEventListener("click", function(){
        let li=document.getElementById(li)
        let editText= prompt() ;
        let a=document.createTextNode(editText);
        li.appendChild(a);
        if(editText==="") {
            alert("you must write something");
        }
        else{
            
            document.getElementById("myUl").appendChild(li).appendChild(a);
        }
    })
}



// click on a close button
let close= document.getElementsByClassName('close');
let k;
for(k=0; k< close.length; k++) {
    close[k].onclick= function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


// click on the "add" button 
function newTasks() {
    let li= document.createElement('li');

    //checkbox
    let checkbox= document.createElement('input');
    checkbox.type= "checkbox";
    checkbox.id="check";
    li.appendChild(checkbox);

    //input value
    let inputValue= document.getElementById('input').value;
    let t= document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue==="") {
        alert('You must write your tasks');
    }
    else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("input").value="";

    //close button
    let span= document.createElement("span");
    let txt= document.createTextNode("\uD83D\uDDD1");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    

    //edit button
    let span_edit= document.createElement("span");
    let edit_icon= document.createTextNode("\u270E");
    span_edit.className= "edit";
    span_edit.appendChild(edit_icon);
    myList[i].appendChild(span_edit);

    span_edit.addEventListener("click", function(){
        let editText= prompt() ;
        let a=document.createTextNode(editText);
        li.appendChild(a);
        if(editText==="") {
            alert("you must write something");
        }
        else{
            
            document.getElementById("myUl").appendChild(li).appendChild(a);
        }
    })

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }

   
}
