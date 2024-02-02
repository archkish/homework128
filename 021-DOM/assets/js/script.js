

function getSongsList() {
  let playList = [
    {
      author: "LED ZEPPELIN",
      song:"STAIRWAY TO HEAVEN"
    },
    {
      author: "QUEEN",
      song:"BOHEMIAN RHAPSODY"
    },
    {
      author: "LYNYRD SKYNYRD",
      song:"FREE BIRD"
    },
    {
      author: "DEEP PURPLE",
      song:"SMOKE ON THE WATER"
    },
    {
      author: "JIMI HENDRIX",
      song:"ALL ALONG THE WATCHTOWER"
    },
    {
      author: "AC/DC",
      song:"BACK IN BLACK"
    },
    {
      author: "QUEEN",
      song:"WE WILL ROCK YOU"
    },
    {
      author: "METALLICA",
      song:"ENTER SANDMAN"
    }
    ];
  
  
    const root = document.querySelector('.form');
    const ul = document.createElement('ul');
    const btn = root.firstElementChild;
  
    for(let i = 0; i < playList.length; i++ ) {
  
      const li = document.createElement('li');
      li.classList = 'mb-2'
  
      li.innerText =  `${i + 1}. ${playList[i].author}: ${playList[i].song}`
      ul.append(li);
  
    }
    
    root.append(ul);

    btn.remove();

    setTimeout(() => {
      ul.remove();
      root.append(btn);
    }, 4000);

}

function showModal() {

  const overlay = document.createElement('div');
  overlay.classList = 'overlay';
  document.body.prepend(overlay);
  
  const block = document.createElement('div');
  block.classList = 'block';
  overlay.append(block);

  const text = document.createElement('p');
  text.className = 'text';
  text.innerText = 'Press button to close overlay'
  block.append(text);

  const btn = document.createElement('button');
  btn.classList = 'close-btn';
  btn.innerText = 'Close'
  block.append(btn);

  overlay.onclick = (e) => {
    if(e.target === btn || e.target === overlay) {
      overlay.remove()
    }
  }

    // btn.onclick = () => {
    //   overlay.remove()
    // };
}




// рішення в лоб))

//  const circles = document.querySelectorAll('.circle');
//  let nextCircle = 0;

//  function changeColor() {

//   switch(nextCircle % circles.length) {
//     case 0:
//       circles[0].classList.add(getColor(nextCircle));
//       circles[1].classList.remove(getColor(1));
//       circles[2].classList.remove(getColor(2));
//       break
//     case 1:
//       circles[1].classList.add(getColor(nextCircle));
//       circles[0].classList.remove(getColor(0));
//       circles[2].classList.remove(getColor(2));
//       break
//     case 2:
//       circles[2].classList.add(getColor(nextCircle));
//       circles[0].classList.remove(getColor(0));
//       circles[1].classList.remove(getColor(1));
//       break
//   }
//   nextCircle + 1
//   nextCircle = nextCircle % circles.length;

//  }
// function getColor(index) {
//   const colors = ['red', 'yellow', 'green'];
//   return colors[index]
//  }

// трохи краще рішення

let currentCircle = null;
let nextCircle = 0;

function changeColor() {

  const circles = document.querySelectorAll('.circle');

  if (currentCircle) {
    currentCircle.classList.remove('red', 'yellow', 'green');
  }

  currentCircle = circles[nextCircle];
  currentCircle.classList.add(getLightClass(nextCircle));

  nextCircle = (nextCircle + 1) % circles.length;
}

function getLightClass(lightIndex) {
  const colors = ['red', 'yellow', 'green'];
  return colors[lightIndex  % colors.length];
}

