let runnintTotal = 0;
let buffer = "0";
let previosusOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'c':
            buffer = '0';
            runnintTotal = 0;
            break;
        case '=':
            if (previosusOperator === null){
                return
            }    
            flushOperation(parseInt(buffer));
            previosusOperator = null;
            buffer = runnintTotal;
            runnintTotal = 0;
            break;
        case '←':   
            if(buffer.length === 1){
                buffer = '0';
            } else{
                buffer = buffer.toString(0,buffer.length - 1);
            }
            break;
        case '+': 
        case '-':  
        case 'x': 
        case '÷':
            handleMath(symbol);
            break;

    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return
    }
    const intBuffer = parseInt(buffer);

    if(runnintTotal === 0){
        runnintTotal = intBuffer;

    }else{
        flushOperation(intBuffer);
    }
    previosusOperator = symbol;
    buffer = '0';

}

function flushOperation(intBuffer){
    if (previosusOperator === '+') {
        runnintTotal += intBuffer;
    }else if(previosusOperator === '-'){
        runnintTotal -= intBuffer;
    }else if(previosusOperator === 'x'){
        runnintTotal *= intBuffer;
    }else if(previosusOperator === '÷'){
        runnintTotal /= intBuffer;
    }
}

function handleNumber(numerString){
    if(buffer === ' 0'){
        buffer + numerString;
    }else{
        buffer += numerString;
    }   
}

function init(){
    document.querySelector('.calc-buttons').
    addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init();