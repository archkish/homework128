
let numberInput = document.querySelectorAll(".input");
numberInput.forEach(item => {
  item.addEventListener("input", function() {
    item.value = item.value.replace(/[^. -\d]/g, "");
  });
});

// Min
// 1.

function getAge() {
  let age = +document.getElementById('age').value;
  let ageAnswer = document.querySelector('.age-answer')
  let text;

  if (age <= 0) {
    return ageAnswer.innerHTML = `Enter correct data`;
  } else if (age > 0 && age <= 11) {
    text = 'child'
  } else if(age >= 12 && age <= 17) {
    text = 'teenager'
  } else if(age >= 18 && age <= 59) {
    text = 'adult'
  } else if(age >= 60 && age <= 100) {
    text = 'pensioner'
  } else if (age > 100) {
    text = 'a long-lived Shaolin monk'
  }

  ageAnswer.innerHTML = `You are ${text}`;
}

// 2.1 use swich
function getSymbol() {
  let num = +document.getElementById('number').value;
  let symbAnswer = document.querySelector('.symbol-answer')
  let char;

  switch(num) {
    case 0:
      char = ')';
      break;
    case 1:
      char = '!';
      break;
    case 2:
      char = '@';
      break;
    case 3:
      char = '#';
      break; 
    case 4:
      char = '$';
      break;
    case 5:
      char = '%';
      break;
    case 6:
      char = '^';
      break;
    case 7:
      char = '&';
      break;
    case 8:
      char = '*';
      break;
    case 9:
      char = '(';
      break;
  }

  symbAnswer.innerHTML = `Your char is ' ${char} '`;
}
// 2.2 use object
  // function getSymbol() {
  //     let num = +document.getElementById('number').value;
  //     let symbAnswer = document.querySelector('.symbol-answer')
  //     let char;
  //     let charArr = {1: '!', 2: '@', 3: '#', 4: '$', 5: '%', 6: '^', 7: '&', 8: '*', 9:'(', 0: ')'};

  //     symbAnswer.innerHTML = `Your char is ' ${charArr[num]} '`;
  //   }

// 3.

  function getSum() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let sumAnswer = document.querySelector('.sum-answer');
    let sum = 0;
    let from = num1;
    let to = num2;

    if (num1 > num2) {
      from = num2;
      to = num1
    }

    for(let i = from; i<= to; i++) {
      sum += i;
    }

    sumAnswer.innerHTML = `Sum of numbers in a given range: ${sum}`;
  }

  // 4.

  function getMaxNod() {
    let num1 = +document.getElementById('number1').value;
    let num2 = +document.getElementById('number2').value;
    let sumAnswer = document.querySelector('.nod-answer');
    let nod = 0;

    let min = num1 < num2 ? num1 : num2;

    for(let i = 0; i <= min; i++) {
      if(num1%i == 0 && num2%i == 0 ) {
        nod = i;
      }
    }

    sumAnswer.innerHTML = `Greatest common denominator is ${nod}`
  }

  // 5.

  function getNod() {
    let num1 = +document.getElementById('number_one').value;
    let nodOneAnswer = document.querySelector('.nod-one-answer');
    let maxnod = '';

    for(let i = 0; i <= num1; i++) {
      if(num1%i == 0) {
        maxnod += `${i} `;
      }
    }

    nodOneAnswer.innerHTML = `All denominator are: ${maxnod}`
  }

  // Norm
  // 1.
  function getPal() {
    let num = document.getElementById('fdNumber').value;
    let palAnswer = document.querySelector('.palindrome-answer');
    let str = '';

    for(let i = num.length - 1; i >= 0 ; i--) {
      str += num[i];
    }
    
    let answer = (str == num) ?  true :  false;
    
    palAnswer.innerHTML = `Is palindrome: ${answer}`
  }

  // 2.
  function getAmount() {
    let sum = +document.getElementById('amount').value;
    let amountAnswer = document.querySelector('.amount-answer');
    let amount;
    
    if(sum >=200 && sum <300) {
      amount = sum - sum * 0.03
    } else if(sum >=300 && sum <500) {
      amount = sum - sum * 0.05
    } else if(sum >=500) {
      amount = sum - sum * 0.07
    } else {
      amount = sum
    }
    
    amountAnswer.innerHTML = `Еhe amount to be paid with a discount is: ${amount.toFixed(2)}`
  }

  // 3. пробував без prompt

  function getNumbers() {
    let str = document.getElementById('numbers').value;
    let statAnswer = document.querySelector('.stat-answer');
    let zero = 0;
    let plus = 0;
    let minus = 0;
    let even = 0;
    let odd = 0;

    let arr = str.split(' ');

    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == 0) {
        zero += 1;
      } else if(arr[i] > 0) {
        plus += 1;
      } else if(arr[i] < 0) {
        minus += 1;
      }
    }

    for(let i = 0; i < arr.length; i++) {
      if(arr[i]%2 === 0) {
        even++;
      } else if(arr[i]%2 !== 0) {
        odd++;
      }
    }

    statAnswer.innerHTML = `You number has ${zero} - zero, ${plus} - positive numbers, ${minus} - negative numbers, ${even} - even numbers and ${odd} - odd numbers`
  }

  // 3.2 а тут уже через промпт, щоб запустити, просто натискнути кнопку Calculate
  // function getNumbers() {
  //   let statAnswer = document.querySelector('.stat-answer');
  //   let result;
  //   let count = 10
  //   let zero = 0;
  //   let minus = 0;
  //   let plus = 0;
  //   let even = 0;
  //   let odd = 0;

  //   for(let i = 0; i < count ; i++) {
  //     result = +prompt('enter');

  //     if(!result) {
  //       statAnswer.innerHTML = 'Enter numbers'
  //       return
  //     }

  //     if(result == 0) {
  //       zero += 1
  //     } else if (result < 0) {
  //       minus += 1;
  //     } else if (result > 0) {
  //       plus += 1;
  //     } 

  //     if (result %2 === 0) {
  //       even +=1
  //     } else if (result %2 !== 0) {
  //       odd += 1;
  //     }


  //   }
    
  //   console.log(zero, minus, plus, even, odd)
  //   statAnswer.innerHTML = `You number has ${zero} - zero, ${plus} - positive numbers, ${minus} - negative numbers, ${even} - even numbers and ${odd} - odd numbers`
  // }

// 4.

  function showDay() {
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Suturday']
    let day = new Date().getDay();
    let answer = true;

    while(answer) {
      alert(`The day is: ${weekdays[day]}`);
      answer = confirm("Do you want to see the next day?");
      if (answer) {
        day++;
        day = day % weekdays.length;  
      } else {
        alert("Bye");
      } 
    }     
  }

  // Max
  //  1.

  function showNumber () {
    let min = 0;
    let max = 100;

      while(min <= max) {
        let res = Math.floor((min + max) / 2);
        let answer = prompt(`Enter '>' if your number > ${res};
        enter '<' if your number < ${res};
        enter '==' if your number or = ${res}?`);

        if (answer === ">") {
          min = res + 1;     
        } else if (answer === "<") {
          max = res - 1;   
        } else if (answer === "=") {
          document.querySelector('.your-number-answer').innerHTML = `Your number ${res}`;
          return
        } else if (!answer) {
          return
        } else {
          alert(`Enter correct symbol: '>', '<' or '='`);
        }
      
      }

  }





function getRes() {
  let resets = document.querySelectorAll('.res');
  resets.forEach(reset => {
    reset.innerHTML = '';
  })
}






