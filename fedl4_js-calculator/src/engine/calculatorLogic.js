const keys = document.querySelector('.keyboard').children;
const display = document.querySelector('.screen');
const operatorTest = /[+/*-]$/gm;

const handleClick = (btn) => {
    const decimalTest = () => {
        if(/\./g.test(display.innerText)) {
         return;
        } else {
         display.innerText += btn.innerText;
        }
     }
    switch(btn.dataset.action){
        case "operand":
        display.innerText += btn.innerText;
        break;
        case "operator":
        operatorTest.test(display.innerText) ? display.innerText = display.innerText.replace(operatorTest, btn.firstChild.textContent) : display.innerText += btn.innerText;
        break;
        case "decimal":
        decimalTest(); 
        break;
        case "equation":
        display.innerText = Function("return " + display.innerText)();
        break;
        case "delete":
        display.innerText = display.innerText.slice(0, -1);
        break;
        case "clear":
        display.innerText = "";
        break;
        default:
        console.log("Don't change 'data-action'!")
    }
}
for(let i = 0; i<keys.length; i++) {
    keys[i].addEventListener('click', () => handleClick(keys[i]));
}