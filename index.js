const tipPercentInput = document.getElementById('sliderInput');
const billTotalInputvar = document.getElementById('billTotalInput');
const billInputError = document.getElementById('billInputError'); 

function calculateFields() {
    const tipPercentVal = parseFloat(tipPercentInput.value);
    const billTotalInputVal = parseFloat(billTotalInputvar.value);

    
    if (isNaN(billTotalInputVal)) {
        billInputError.style.display = "inline"; 
        return; 
    } else {
        billInputError.style.display = "none"; 
    }

    tipPercentOutput.innerText = tipPercentVal + ' %';
    tipAmountBox.innerText = '$'+(billTotalInputVal*tipPercentVal/100).toFixed(2);
    const finalVal = billTotalInputVal + billTotalInputVal * tipPercentVal / 100;
    totalWithTipBox.innerText = '$'+finalVal.toFixed(2);
}

function triggerError() {
    
    const checkInp = isNaN(billTotalInputvar.value);
    if (checkInp) {
        billInputError.style.display = "inline"; 
    } else {
        billInputError.style.display = "none"; 
    }
}

function updateTipPercentage() {
    calculateFields();
}

billTotalInputvar.addEventListener("input", calculateFields);
tipPercentInput.addEventListener("change", updateTipPercentage);
