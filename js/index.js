/**
 * Created by Владислав on 11.11.2016.
 */
var btnThrow = document.getElementsByClassName("throw");
var btnDel = document.getElementsByClassName("del");
var listText = document.getElementsByTagName("span");
var listItems = document.getElementsByTagName("li");
var listParent = document.getElementById("parent");
var textAdd = document.getElementById("add-content");
var btnAdd = document.getElementById("add");
for(var i = 0; i < listItems.length; i++){
    btnThrow[i].onclick = (function () {
        var j = i;
        return function () {
            listText[j].classList.toggle("cross")
        }
    })();
    btnDel[i].onclick = (function () {
        var j = i;
        return function () {
            listItems[j].classList.add("not-display");
            // listParent.removeChild(listItems[j]);
        }
    })();
}
btnAdd.onclick = function () {
    if(!textAdd.value){
        alert('Owww... This empty line!!!');
    } else{
        var newEll = document.createElement('li');
        newEll.innerText = textAdd.value;
        var btnArea = newEll.appendChild(document.createElement('div'));
        var btnCross = btnArea.appendChild(document.createElement('button'));
        btnCross.innerText = 'Cross';
        var btnRem = btnArea.appendChild(document.createElement('button'));
        btnRem.innerText = 'Delete';
        btnRem.style.marginLeft = 5 + 'px';
        btnCross.onclick = function () {
            newEll.classList.toggle('cross');
        }
        btnRem.onclick = function () {
            newEll.classList.add("not-display");
        }
        listParent.appendChild(newEll);
        textAdd.value = "";
    }
}


