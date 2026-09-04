const ChangeColorButton =
    document.getElementById('changeColorButton');

const container =
    document.getElementsByTagName("header")[0];
    
const color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'black'];

let clickCount = 0
ChangeColorButton.addEventListener('click', () => {

    container.style.backgroundColor = color[clickCount];
    clickCount++;
    if (clickCount >= color.length) {
        clickCount = 0;
    }

});