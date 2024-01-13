let numberInput = document.querySelectorAll(".input");
numberInput.forEach(item => {
  item.addEventListener("input", function() {
    item.value = item.value.replace(/[^. -\d]/g, "");
  });
});

// Minimun

// 1.

let func = function () {};
function createFunc () {};
(function(){})();

// 2.

// function getfArg() {
//   return arguments.length
// }
// getfArg(1, 2, 4)

// 2.2 

let argumentsArr = [];

function addArgument(argum) {
  argumentsArr.push(argum);
  return argumentsArr.length
}

function getQuantityArguments() {
  let newArgument = document.getElementById('argument').value;
  let answ = document.querySelector('.arguments-answer');

  answ.innerHTML = `Quantity of Arguments: ${addArgument(newArgument)}`

}

// 3.

function compareNums(num1, num2) {
  if(num1 < num2) {
    return -1;
  } else if(num1 > num2) {
    return 1;
  } else if(num1 === num2) {
    return 0;
  }
}

function getAnswer() {
  let num1 = +document.getElementById('num1').value;
  let num2 = +document.getElementById('num2').value;
  let numberAnsw = document.querySelector('.answer-number');

  numberAnsw.innerHTML = `Answer: ${compareNums(num1, num2)}`

}

// 4. через рекурсію
// function calcFactorial(n) {
//   if(n === 1) {
//     return 1
//   }
//   return n * calcFactorial(n - 1)
// }
//  4.2
function calcFactorial(n) {
  let result = 1
  if(n === 1) {
    return 1
  }
  
  for(let i = 1; i <= n; i++) {
    result *= i
  }

  return result

}

function getAnswerFactorial() {
  let number = +document.getElementById('number').value;
  let factorialAnswer = document.querySelector('.factirial-answer');

  factorialAnswer.innerHTML = `Answer: ${calcFactorial(number)}`

}

// 5.
function getConcat(num1, num2, num3) {
  let str= ''
  if(num2 < 0 || num3 < 0) {
    num2 = Math.abs(num2)
    num3= Math.abs(num3)
  }
  for(let i = 0; i < arguments.length; i++) {
    str += arguments[i]
  }
  return +(str)
}

function getConcatAnswer() {
  let num1 = +document.getElementById('numb1').value;
  let num2 = +document.getElementById('numb2').value;
  let num3 = +document.getElementById('numb3').value;
  let concatAnswer = document.querySelector('.concat-answer');

  concatAnswer.innerHTML = `Answer: ${getConcat(num1, num2, num3)}`
}

// 6.

function getArea(length, width) {
  if(arguments.length == 1) {
    return arguments[0] * arguments[0]
  }
  if(length < 0 || width < 0) {
    return 'Enter only positive numbers'
  }
  return length * width
}

function getAreaAnswer() {
  let length = +document.getElementById('length').value;
  let width = +document.getElementById('width').value;

  let areaAnswer = document.querySelector('.area-answer');

  areaAnswer.innerHTML = `Answer: ${getArea(length, width)}`
}

// Norm

// 1.

function isPerfect(num) {
  let resPerfect = 0;

  for(let i = 1; i < num; i++) {    
    if(num % i === 0) {
      resPerfect += i
    }
  }

  if(resPerfect === num) {
    return true

  } else {

    return false
  }

}

function getPerfectAnswer() {
  let number = +document.getElementById('perfect').value;
  let perfectAnswer = document.querySelector('.perfect-answer');

  perfectAnswer.innerHTML = `Is perfect: ${isPerfect(number)}`
}

function check(min, max) {
  let checkRes = []
  for(let i = min; i <= max; i++) {
    if(isPerfect(i)) {
      checkRes.push(i);
    }
  }
  return checkRes.join(' ');
}


function getDiAnswer() {
  let min = +document.getElementById('min').value;
  let max = +document.getElementById('max').value;

  let diAnswer = document.querySelector('.di-answer');

  diAnswer.innerHTML = `Perfect numbers from the range: ${check(min, max)}`
}




