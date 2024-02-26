let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener("click",function(){
    let item = document.createElement('li');
    item.innerText = inp.value ;
    ul.appendChild(item);

    let delbtn = document.createElement('button');
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    inp.value = "";
})
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement ;
        par.remove();
    }
})
