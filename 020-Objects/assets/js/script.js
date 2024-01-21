let numberInput = document.querySelectorAll(".input");
numberInput.forEach(item => {
  item.addEventListener("input", function() {
    item.value = item.value.replace(/[^. -\d]/g, "");
  });
});



// Minimun

// 1.

const car = {
  Producer: 'Toyota',
  Model: 'Supra',
  Year: '2019',
  Speed: 250,
  'Fuel Tank': 70,
  'Fuel Using': 7.7,
  Drivers: ['Antonio', 'Johny', 'Hulio'],

  // 1. Виводить на екран інформацію про автомобіль
  showInfo: function() {
    let res = '<ul>'
    for(let key in car) {
      if(typeof this[key] !== 'function' ) {
        res += `<li>${key}: ${this[key]};</li>`
      }
    }
    res += '</ul>'
    return res
  },

  // 2. Додавання ім’я водія у список
  addDriver: function (driver) {
    this.Drivers.push(driver)
    return `This car can drive: ${this.Drivers.join(',')}`
  },

  // 3. Перевірка водія на наявність його ім’я у списку
  checkName: function(name) {
    if(this.Drivers.includes(name)){
      return `This driver is in a list`
    } else {
      return `This driver is NOT in a list`
    }
    
  },

  // 4. Підрахунок необхідного часу та палива
  calculateTime: function(distance) {
    let time = distance / this.Speed;
    let minutes = 0;
    let hours = 0;
    let answer = '';

    if(time < 1) {
      answer += `You will spend: ${time * 60} minutes`;
      return answer;

    } else if (time >= 1) {
      hours = Math.floor(time);
      minutes = (time - hours) * 60;
      let res = 0;

      if(hours >= 4) {
        for(let i = 1; i <= hours; i++) {
          if(i % 4 === 0) {
            res += 1;
          };
        };
      };

      hours +=res;
      answer += `You will spend: ${hours} h. and ${minutes.toFixed()} min.`;
    }
    answer += ` And You need: ${Math.ceil(distance / this["Fuel Using"])} lit.`;
    return answer;
  }

};

const carAnsw = document.getElementById('card_text');

function showCarInfo() {
  let carInfo = car.showInfo()
  carAnsw.innerHTML = carInfo
}

function addDriverName() {
  let name = document.getElementById('name').value;
  carAnsw.innerHTML = car.addDriver(name);
}

function checkDriverName() {
  let name = document.getElementById('name').value;
  carAnsw.innerHTML = car.checkName(name);
}

function showTime() {
  let distance = +document.getElementById('distance').value;
  carAnsw.innerHTML = car.calculateTime(distance);
}

// Norm

// 1.
const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  // 1. Для виведення часу на екран.
  getTime: function() {
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.seconds = new Date().getSeconds();
    
    return `${this.hours}:${this.minutes}:${this.seconds}`
  },


  // 2. Змінa часу на передану кількість секунд, хвилин або годин.
  getTimeFromUser: function(hours, minutes, seconds) {
    let miliSec = (seconds + (minutes * 60) + (hours * 60 * 60)) * 1000;
    let timeNow = new Date().getTime();
    timeNow += miliSec;
    let h = new Date(timeNow).getHours();
    let m = new Date(timeNow).getMinutes();
    let s = new Date(timeNow).getSeconds();
    
    return `${h}:${m}:${s}`
  }
}

let timeAnsw = document.getElementById('time_answer');

function showTime() {
  timeAnsw.innerHTML = time.getTime();
}

function calcTime() {
  let hours = +document.getElementById('hours').value;
  let minutes = +document.getElementById('minutes').value;
  let seconds = +document.getElementById('seconds').value;
  
  timeAnsw.innerHTML = time.getTimeFromUser(hours, minutes, seconds)
}


// Max

function startAll() {

  // записуємо значення для чисельників та знаменників дробів

  let numer1 = +document.getElementById('numer1').value;
  let denom1 = +document.getElementById('denom1').value;

  let numer2 = +document.getElementById('numer2').value;
  let denom2 = +document.getElementById('denom2').value;

//ф-ія для знаходження цілих дільників знаменниках

  function findDivisions(number, divisor = 2) {
  
    if (number <= 1) {
        return [];
    }
  
    if (number % divisor === 0) {
        return [divisor, ...findDivisions(number / divisor, divisor)];
    } else {
        return findDivisions(number, divisor + 1);
    }
  }
  
  // перший дріб

  const ordinaryFraction1 = {
    numerator: 0,
    denominator: 0,
  
    getFraction1 : function(){
      return `${this.numerator} / ${this.denominator}`
    },
  
    getDivisitor: function() {
      return findDivisions(this.denominator);
    }

  }
  
  // другий дріб

  const ordinaryFraction2 = {
    numerator: 0,
    denominator: 0,
  
    getFraction1 : function(){
      return `${this.numerator} ${this.denominator}`
    },
  
    getDivisitor: function() {
      return findDivisions(this.denominator);
    }
  
    
  }

  //  записуємо в об'єкт дробів значення чисельників та знаменників

  ordinaryFraction1.numerator = numer1;
  ordinaryFraction1.denominator = denom1;
  
  ordinaryFraction2.numerator = numer2;
  ordinaryFraction2.denominator = denom2;

  //для кожного знаменника дробу знаходимо дільники і записуємо у масиви

  let arr1 = ordinaryFraction1.getDivisitor() 
  let arr2 = ordinaryFraction2.getDivisitor() 
  
  // якщо одинакова довжина масивів, то вказуємо менший знаменник, щоб правильно вираховувати наймений спільний дільник
  
  let LCD = denom1 < denom2 ? denom1 : denom2;
  
  // знаходження множників та найменшого спільного дільника(НДС)
  
  function getMulti(arr1, arr2) {
    let arr3 = []
    if(denom1 < denom2 ) {
      for (let i = 0; i < arr2.length; i++) {
        const indexInArr2 = arr1.indexOf(arr2[i]);
      
        if (indexInArr2 !== -1) {
          arr1.splice(indexInArr2, 1);
        } else {
          arr3.push(arr2[i]);
        }
      }
    } else {
      for (let i = 0; i < arr1.length; i++) {
        const indexInArr2 = arr2.indexOf(arr1[i]);
      
        if (indexInArr2 !== -1) {
          arr2.splice(indexInArr2, 1);
        } else {
          arr3.push(arr1[i]);
        }
      }
    }
  
    // знаходження НСД
  
    for(let i = 0; i < arr3.length; i++) {
      
      LCD *= arr3[i]
    }
  }
  
  getMulti(arr1, arr2)
  
  
  // знаходження допоміжного множника та перемноження його на  чисельник та знаменник
  
  
    let first = LCD/ denom1
    let second = LCD / denom2
  
    let num1 = numer1 * first;
    let num2 = numer2 * second;
  
  // отримуємо елементи для відповіді

  let numAnsw = document.getElementById('top');
  let denomAnsw = document.getElementById('bottom');
  
  // вказуємо дію

  function getDigit() {
    let select = document.getElementById("sel").value;
    return select
  }
  
  let ress = getDigit()

// виконуємо розрахунки та отримуємо відповідь

  if(ress === '+') {
    let result2 = num1 + num2;
    numAnsw.innerHTML = result2;
    denomAnsw.innerHTML = LCD;
  } else if (ress === '-') {
    let result1 = num1 - num2;
    numAnsw.innerHTML = result1;
    denomAnsw.innerHTML = LCD;
  } else if (ress === '/') {
    let resultND = numer1 * denom2;
    let resultDD = denom1 * numer2;
    numAnsw.innerHTML = resultND;
    denomAnsw.innerHTML = resultDD;
  } else if (ress === '*') {
    let resultN = numer1 * numer2;
    let resultD = denom1 * denom2;
    numAnsw.innerHTML = resultN;
    denomAnsw.innerHTML = resultD;
  }
}

// очистка полів

function getRes() {
  let resets = document.querySelectorAll('.res');
  resets.forEach(reset => {
    carAnsw.innerHTML = '';
    document.getElementById('name').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('time_answer').innerHTML = '';
    document.getElementById('top').innerHTML = '';
    document.getElementById('bottom').innerHTML = '';
    document.getElementById('numer1').value = '';
    document.getElementById('denom1').value = '';
    document.getElementById('numer2').value = '';
    document.getElementById('denom2').value = '';
  })
}