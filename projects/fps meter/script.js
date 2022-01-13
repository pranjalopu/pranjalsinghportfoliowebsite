let fpsBox = document.getElementById('fpsBox');

let fpsMeasure = document.getElementById('fpsMeasure');
let i = true;

fpsMeasure.addEventListener('click', () => {
    if (i) {
        i = false;
        // fpsMeasure.innerText = "Stop";
        let lastPaintTime = 0;
        let fps;
        function showFps(currentTime) {
            window.requestAnimationFrame(showFps);
            fps = Math.floor(1000 / (currentTime - lastPaintTime));
            lastPaintTime = currentTime;
            // console.log(fps);
        }

        setInterval(() => {
            fpsBox.innerText = fps;
        }, 500);

        window.requestAnimationFrame(showFps);
    }
})
