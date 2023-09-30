var AboutDrop=document.getElementById('drop-about');
var PaperDrop=document.getElementById('drop-paper');
var SessionsDrop=document.getElementById('drop-sessions');
AboutDrop.addEventListener('mouseenter',()=>{
    AboutDrop.classList.add('menu-width')
})
AboutDrop.addEventListener("mouseleave",()=>{
    AboutDrop.classList.remove('menu-width')
})
PaperDrop.addEventListener('mouseenter',()=>{
    PaperDrop.classList.add('menu-width')
})
PaperDrop.addEventListener("mouseleave",()=>{
    PaperDrop.classList.remove('menu-width')
})
SessionsDrop.addEventListener('mouseenter',()=>{
    SessionsDrop.classList.add('menu-width')
})
SessionsDrop.addEventListener("mouseleave",()=>{
    SessionsDrop.classList.remove('menu-width')
})


