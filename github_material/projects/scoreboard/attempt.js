const adds=document.querySelectorAll(".add");
const minuss=document.querySelectorAll(".minus");
const win=10;
for(let i=0;i<adds.length;i++)
{
    const sc=adds[i].parentElement.parentElement;
    adds[i].addEventListener("click",()=>{let k=sc.children[2].innerText;sc.children[2].innerText=`${parseInt(++k)}`;if(parseInt(k)===win){alert(`${sc.children[0].innerText} has won!`);return;}});
    minuss[i].addEventListener("click",()=>{let k=sc.children[2].innerText;if(k==="0"){return;}sc.children[2].innerText=`${parseInt(--k)}`;});
}
// const addteam=document.querySelector(".iconify");
// addteam.addEventListener("click",t);
const is=document.querySelectorAll("i");
for(let i=0;i<is.length;i++)
{
    is[i].addEventListener("click",fun);
}
// const settings=document.querySelector(".setting");
// settings.addEventListener("click",set);
document.querySelector(".setting").addEventListener("click",set);


// functions 
function fun(){
    let tm=prompt("give new team name");
    while(tm==="")
        tm=prompt("team name cant be left blank");
    this.parentElement.children[0].innerText=tm;
}
const res=document.querySelector(".rese");
function set(e){
   const item =e.target;
    // console.log(e);
    if(item===(document.querySelector("#people")))
    {   
        
        const va=document.querySelector(".shadow .inner");
        const pa=va.parentElement;
        const sc=pa.children[0].cloneNode(true);
        va.parentElement.appendChild(sc);
        sc.children[1].addEventListener("click",fun);
        sc.children[3].children[0].addEventListener("click",()=>{let k=sc.children[2].innerText;sc.children[2].innerText=`${parseInt(++k)}`;if(parseInt(k)===win){alert(`${sc.children[0].innerText} has won!`);return;}});
        sc.children[3].children[1].addEventListener("click",()=>{let k=sc.children[2].innerText;if(k==="0"){return;}sc.children[2].innerText=`${parseInt(--k)}`;});        
        
    }        
    
}

//--------button loading------
let btn = document.querySelector('#load'); 
btn.addEventListener('click', () => {
    btn.classList.toggle('button-loading');
})

