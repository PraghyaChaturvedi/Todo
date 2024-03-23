btn=document.querySelector('.btn');
inp=document.querySelector('.input');
ul=document.querySelector('ul');

btn.addEventListener("click", function(){
    let item=document.createElement('li');
    item.innerText=inp.value;
    ul.appendChild(item);

    let head=document.querySelector(".IntroHead");
    head.innerText=`You added ${inp.value}`;
    inp.value='';
    item.classList.add('textdec');

    
    let del=document.createElement('button');
    del.classList.add('delet'); //design button
    item.appendChild(del);
    del.innerText='DELETE';
    del.style.backgroundColor='inherit';
    del.style.border='none';
    del.style.color='red';


    
});

ul.addEventListener('click', function(event){
    if(event.target.nodeName=='BUTTON'){
        let listitem=event.target.parentElement;
        listitem.remove();
    }

});

