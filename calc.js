"use strict";

var appendDisplay = false;
var prevResult = 0;
var op = "=";
var decimalPressed = false;

function clearDisplay(){
  clearEntry();
  prevResult = 0;
  op = "=";
};
function clearEntry(){
  $('#display').html('0');
  appendDisplay = false;
  decimalPressed = false;
};

function oper(newOp){
  var newArg = Number($('#display').html());
  
  switch(op){
    case '+': prevResult += newArg; break;
    case '-': prevResult -= newArg; break;
    case '*': prevResult *= newArg; break;
    case '/': prevResult /= newArg; break;
    case '=': prevResult = newArg;  break;
    default: prevResult = newArg;   break;
  }
  if(prevResult.toString().length > 12){
    $('#display').html('OVERFLOW');
    //window.setTimeout(clearDisplay(),1000); //TODO: Fix this. It's not waiting 1 sec before clearing.
  }
  else{
    $('#display').html(prevResult.toString());
  }
  appendDisplay = false;
  decimalPressed = false;
  op = newOp;
}

function addDigit(dig){
  if(dig === '.' && decimalPressed) return;
  if(dig === '.' && !decimalPressed) decimalPressed = true;
  
  if (appendDisplay){
    var str = $('#display').html();
    $('#display').html(str + dig);
  }
  else if(dig === '.' ){
    $('#display').html('0' + dig);
    appendDisplay = true;
  }
  else if(dig !== '0'){
    $('#display').html(dig.toString());
    appendDisplay = true;
  }
}

/***********************BTN CLICKS*******************************************/
$('#clr-all').click(function(){ clearDisplay(); });
$('#clr-ent').click(function(){ clearEntry(); });
$('#op-perc').click(function(){ oper('%'); });//TODO: Figure out what you want this button to do. Then implement it.
$('#op-div').click(function(){ oper('/'); });
$('#op-mult').click(function(){ oper('*'); });
$('#op-sub').click(function(){ oper('-'); });
$('#op-add').click(function(){ oper('+'); });
$('#op-eq').click(function(){ oper('='); });
$('#op-dec').click(function(){ addDigit('.'); });
$('#num-9').click(function(){ addDigit('9'); });
$('#num-8').click(function(){ addDigit('8'); });
$('#num-7').click(function(){ addDigit('7'); });
$('#num-6').click(function(){ addDigit('6'); });
$('#num-5').click(function(){ addDigit('5'); });
$('#num-4').click(function(){ addDigit('4'); });
$('#num-3').click(function(){ addDigit('3'); });
$('#num-2').click(function(){ addDigit('2'); });
$('#num-1').click(function(){ addDigit('1'); });
$('#num-0').click(function(){ addDigit('0'); });
