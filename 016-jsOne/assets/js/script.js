
//  let userName = 'Artur';
//  let userLastName = 'Radchenko';

 /*
  let 1name;
  let my-name;
  let myname#
  let class;
  let function
 */

  /*
  1. Camel case
  2. Kebab case
  3. Snake case
  4. Pascal case
  */

let numberInput = document.querySelectorAll(".input");
numberInput.forEach(item => {
  item.addEventListener("input", function() {
    item.value = item.value.replace(/[^0-9]/g, "");
  });
});


function getAge() {
  let month = document.getElementById('b-month').value;
  let day   = document.getElementById('b-day').value;
  let year  = document.getElementById('b-year').value;
  let info = document.querySelector('.answer');
  let b_date = new Date(year, month, day);
  let today = new Date();

  if (year == 0 || month == 0 || day == 0) {
    info.innerHTML = 'Please put your birth date correct...'
    return false
  }

  if (b_date > today) {
    info.innerHTML = 'Are you from the future or not yet born...'
    return false;
  };

  info.innerHTML = `You are ${Math.floor((today - b_date) / (1000*60*60*24*365))} years old`;
}

function getName() {
  let name = document.getElementById('name').value;
  let nameAnswer = document.querySelector('.name-answer');
  nameAnswer.innerHTML = `Hello, ${name}`;
}

function getPer() {
  let side = +document.getElementById('side').value;
  let square = document.querySelector('.square-answer');
  let res =  side * 4
  square.innerHTML = `The perimeter of this square is ${res}`;
}

function getArea() {
  let radius = +document.getElementById('radius').value;
  let square = document.querySelector('.area-answer');
  let res =  (Math.PI * radius ** 2).toFixed(2);
  square.innerHTML = `The perimeter of this square is ${res}`;
}

function getSpeed() {
  let distance = +document.getElementById('distance').value;
  let time = +document.getElementById('time').value;
  let res = document.querySelector('.speed-answer');

  if(distance == 0 || time == 0) {
    res.innerHTML = 'Please, enter correct value';
    return false
  }

  let speed = (distance / time).toFixed(2);
  res.innerHTML = `Your speed will be ${speed} km/hour`;
}



function getAmount() {
  let dollars = +document.getElementById('dollars').value;
  let res = document.querySelector('.amount-answer');

  if(dollars == 0) {
    res.innerHTML = 'Please, enter correct value';
    return false
  }

  const convert = (dollars * 0.9).toFixed(2);
  res.innerHTML = `You will get ${convert} euros`;

}

function getRes() {
  let resets = document.querySelectorAll('.res');
  resets.forEach(reset => {
    reset.innerHTML = '';
  })
}



