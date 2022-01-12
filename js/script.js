let hamburger = document.getElementById('hamburger');
let cross = document.getElementById('cross');
let linksSmall = document.getElementById('linksSmall');

hamburger.addEventListener('click', ()=>{
    hamburger.style.display= 'none';
    cross.style.display = 'block';
    linksSmall.style.display = 'block';
    setTimeout(() => {
        linksSmall.style.right = '10px';
    }, 10);
})

cross.addEventListener('click', ()=>{
    hamburger.style.display= 'block';
    cross.style.display = 'none';
    linksSmall.style.right = '-100px';
    setTimeout(() => {
        linksSmall.style.display = 'none';
    }, 500);
})

let yearSpan = document.getElementById('yearSpan');
let date = new Date();
yearSpan.innerText = date.getFullYear();