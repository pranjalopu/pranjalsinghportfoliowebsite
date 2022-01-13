let front = document.getElementById('front');

rotateDice.addEventListener('click', () => {
    setTimeout(() => {
        let num;
        min = Math.ceil(1);
        max = Math.floor(6);
        num = Math.floor(Math.random() * (max - min + 1) + min);
        front.innerText = num;
        // console.log(num)
    }, 900);
    let cube = document.getElementById('cube');
    cube.classList.add('animation');
    // console.log('done');
    setTimeout(() => {
        cube.classList.remove('animation');
        // console.log('removed');
    }, 1000);

})



