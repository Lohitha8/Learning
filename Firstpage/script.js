
function add() {
    var firstNum = document.getElementById("num1").value;
    var secondNum = document.getElementById("num2").value;
    var result = parseFloat(firstNum) + parseFloat(secondNum);
    document.getElementById("result").innerText=result;

}
function sub() {
    var firstNum = document.getElementById("num1").value;
    var secondNum = document.getElementById("num2").value;
    var result = parseFloat(firstNum) - parseFloat(secondNum);
    document.getElementById("result").innerText=result;
}
function mul() {
    var firstNum = document.getElementById("num1").value;
    var secondNum = document.getElementById("num2").value;
    var result = parseFloat(firstNum) * parseFloat(secondNum);
    document.getElementById("result").innerText=result;
}
function div() {
    var firstNum = document.getElementById("num1").value;
    var secondNum = document.getElementById("num2").value;
    var result = parseFloat(firstNum) / parseFloat(secondNum);
    document.getElementById("result").innerText=result;
}
