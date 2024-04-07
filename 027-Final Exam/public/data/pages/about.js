
getReviews()

function journeyTile(card) {
  return `
    <div class="journey-tile">
      <div class="left-bottom"></div>
      <div class="right-top"></div>
      <div class="tile-name">year - ${card.data}</div>
      <div class="tile-descr">${card.descr}</div>
    </div>
  `
}

function getJourney() {
  const tiles = [
    {
      data: '2005',
      descr: 'In 2005, Damien acquired her first camera, igniting her passion for photography. She started experimenting with landscapes and candid shots, marking the beginning of her visual storytelling journey.'
    },
    {
      data: '2010',
      descr: 'Damien pursued a degree in Fine Arts with a focus on photography, refining her technical skills and artistic sensibilities.'
    },
    {
      data: '2012',
      descr: 'In 2012, Damien held her first solo exhibition, showcasing her unique perspective on nature and people through her lens.'
    },
    {
      data: '2015',
      descr: 'Damien officially launched her photography business in 2015, offering portrait, event, and commercial photography services.'
    },
    {
      data: '2017',
      descr: "Damien's work took her beyond the USA, capturing breathtaking scenes and cultures from around the world."
    },
    {
      data: '2020',
      descr: "In 2020, Damien's dedication and creativity earned her several prestigious photography awards, solidifying her position as a visionary photographer."
    }
  ]
  let tile = '';
  tiles.forEach(card => {
      tile = journeyTile(card);
      const tilesWrapp = document.querySelector('.journey__tiles');
      tilesWrapp.insertAdjacentHTML('beforeend', tile)
      
  })
  console.log(tile)
}
getJourney()


function outNUm(num, elem, time, step) {
  let item = document.querySelector('#'+elem);
  let n = 0;
  let duration = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if(n >= num) {
      clearInterval(interval)
    }
    item.innerHTML = n
  }, duration);
}

outNUm(500, 'clients', 3000, 10)
outNUm(15, 'years', 1000, 1)
outNUm(10, 'awards', 1000, 1)
outNUm(5, 'shots', 1000, 1)
outNUm(10000, 'followers', 3000, 200)
outNUm(90, 'rate', 3000, 2)