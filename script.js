const about = document.querySelector('.about');
const desc = document.querySelector('.desc');
const parent = document.querySelector('.wrapper');
const children = parent.children
let showDesc = false
let showAbout = false
const logo = document.querySelector("#logo");
const fire = document.querySelector(".free");
let a_count=0;
const arnav_cart=document.querySelector(".arnav_count");
const arnav_text=document.querySelector(".arnav_text");
const arnav_img=document.querySelector(".arnav_img");
const arnav_loading=document.querySelector(".arnav_loading");

// NOT WORKING PLEASE CHECK

// logo.addEventListener("mouseover", ()=>{
//     fire.classList.remove("hidden");
// })

// logo.addEventListener('mouseout',()=>{
//     fire.classList.add("hidden");
// })


// for(let i=0;i<children.length-4;i++){
//     children[i].children[0].innerHTML = `# ${i+1}`;
// }

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
function arnav_show(){
    if(a_count==0){
        console.log("Arnav_Button clicked!");
        arnav_cart.classList.remove("arnav_visible");
    }
    a_count+=1;
    arnav_text.textContent=`Added to Cart : ${a_count}`;
    
}
arnav_img.addEventListener("mouseover",()=>{
    arnav_loading.classList.remove("arnav_visible");
    
})
arnav_img.addEventListener("mouseout",()=>{
    arnav_loading.classList.add("arnav_visible");
})
