const about = document.querySelector('.about');
const desc = document.querySelector('.desc');
const parent = document.querySelector('.wrapper');
const children = parent.children
let showDesc = false
let showAbout = false
const logo = document.querySelector("#logo");
const fire = document.querySelector(".free");

logo.addEventListener('mouseenter', ()=>{
    fire.classList.remove("hidden");
})

logo.addEventListener('mouseleave',()=>{
    fire.classList.add("hidden");
})


for(let i=0;i<children.length-4;i++){
    children[i].children[0].innerHTML = `# ${i+1}`;
}

function aboutClick(){
    showAbout = !showAbout;
    console.log("about is touched");
    if(showAbout){
        about.classList.remove('hidden');
    }
    else{
        about.classList.add("hidden");
    }
}

function descClick(){
    console.log("Description is touched");
    showDesc = !showDesc;
    if(showDesc){
        desc.classList.remove('hidden');
    }
    else{
        desc.classList.add('hidden');
    }
}