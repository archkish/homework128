let numberInput = document.querySelectorAll(".input");
numberInput.forEach(item => {
  item.addEventListener("input", function() {
    item.value = item.value.replace(/[^.\d]/g, "");
  });
});


//Minimum
  // 1. 

    function getSum () {
      let a = document.getElementById('number-one').value;
      let b = document.getElementById('number-two').value;
      let numberAnswer = document.querySelector('.number-answer');
      let max;
      let res;
      
      if(a.length >= b.length) {
        max = parseInt(a.length) - 2;
      } else {
        max = parseInt(b.length) - 2;
      }

      if ( a === '' || b === '') {
        numberAnswer.innerHTML = `Enter numbers`
      }

      res = +(((+a) + (+b)).toFixed(max));

      numberAnswer.innerHTML = `Your sum is ${res}`
    }

  // 2. 

    function calc(a, b) {
      return parseInt(a) + parseInt(b)
    }

    calc('1', 2)

  // 3.

  function getCount() {
    let flash = +document.getElementById('flash').value * 1024;
    let volume = +document.getElementById('file').value;
    let countAnswer = document.querySelector('.count-answer');

    let res = Math.floor(flash / volume)
    
    countAnswer.innerHTML = `Number of files: ${res}`;
  }


// Norm

// 1.

function getChoco() {
  let money = +document.getElementById('money').value;
  let price = +document.getElementById('price').value;
  let chocoAnswer = document.querySelector('.choco-answer');

  let res = Math.floor(money / price)
  
  chocoAnswer.innerHTML = res == 1 ? `You can buy: ${res} chocolate` : `You can buy: ${res} chocolates`;
}

// 2.

function getReverse() {
  let num = +document.getElementById('number').value;
  let numReverse = document.querySelector('.reverse-answer');

  let hundreds = parseInt(num / 100);
  let ten = (parseInt(num / 10) % 10) * 10;
  let units = (num % 10) * 100;

  let resalt = units + ten + hundreds 
  
  numReverse.innerHTML = `Reverse number is: ${resalt}`;
}

//  2.2 Ще один варіант))

// function getReverse() {
//   let num = +document.getElementById('number').value;
//   let numReverse = document.querySelector('.reverse-answer');

//   let str = num.toString();

//   let answer = parseInt(str[2] + str[1] + str[0]); 

//   numReverse.innerHTML = `Reverse number is: ${answer}`;
// }

// Max

  // 1.

  function getInterest() {
    let cash = +document.getElementById('cash').value;
    let months = +document.getElementById('months').value;
    let rate = +document.getElementById('rate').value;
    let rateAnswer = document.querySelector('.rate-answer');
  
    let monthRate = +((rate / 12).toFixed(2));
    
    let sum = cash * (months * monthRate) / 100;
    
    rateAnswer.innerHTML = `Amount of accrued interest: ${sum}`;
  }

  // 2.

    /*  1.
          2 && 0 && 3 - поверне 0, перше false значення
        2.
          2 || 0 || 3 - поверне 2, перше true значення
        3.
          2 && 0 || 3 - поверне 3, спершу порівнюємо 2 && 0 (оператор && має більший пріоритет чим ||) і отримуєм false, потім між false і 3 (true)...і || повертає true значення
    */

  




