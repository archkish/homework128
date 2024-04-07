function priceHTML (card) {
  return `
    <div class="price">
      <div class="price-info">
        <div class="price-title">${card.name}</div>
        <div class="price-bottom">
          <div class="price-price">$${card.price}</div>
          <div class="card-link">
            <a href="about.html">
              <span>viev project</span>
              <svg width="22" height="21" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3125 0.187501L20.375 0.1875C20.6236 0.1875 20.8621 0.286272 21.0379 0.462087C21.2137 0.637903 21.3125 0.87636 21.3125 1.125V15.1875C21.3125 15.7053 20.8928 16.125 20.375 16.125C19.8572 16.125 19.4375 15.7053 19.4375 15.1875V3.38833L2.28791 20.5379C1.9218 20.904 1.3282 20.904 0.962087 20.5379C0.595971 20.1718 0.595971 19.5782 0.962087 19.2121L18.1117 2.0625L6.3125 2.0625C5.79473 2.0625 5.375 1.64277 5.375 1.125C5.375 0.607234 5.79473 0.187501 6.3125 0.187501Z" fill="white"/>
              </svg>  
            </a>
          </div>
        </div>
      </div>
      <div class="price-list">
        <ul>
          ${card.services.map(el => `<li>${el}</li>`).join('')}
        </ul>
      </div>
    </div>
  `
}
function getPrice(data) {
  let res = ''; 
  data.forEach(card => {
      res = priceHTML(card);
      const slider = document.querySelector('.show');
      slider.insertAdjacentHTML('beforeend', res)
      
  })
}

function blockHTML(block) {
  return `
    <div class="service-block">
      <div class="service-info">
        <div class="info-title">${block.title}</div>
        <div class="info-descr">${block.descr}</div>
        <div class="card-link">
            <a href="about.html">
              <span>viev project</span>
              <svg width="22" height="21" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3125 0.187501L20.375 0.1875C20.6236 0.1875 20.8621 0.286272 21.0379 0.462087C21.2137 0.637903 21.3125 0.87636 21.3125 1.125V15.1875C21.3125 15.7053 20.8928 16.125 20.375 16.125C19.8572 16.125 19.4375 15.7053 19.4375 15.1875V3.38833L2.28791 20.5379C1.9218 20.904 1.3282 20.904 0.962087 20.5379C0.595971 20.1718 0.595971 19.5782 0.962087 19.2121L18.1117 2.0625L6.3125 2.0625C5.79473 2.0625 5.375 1.64277 5.375 1.125C5.375 0.607234 5.79473 0.187501 6.3125 0.187501Z" fill="white"/>
              </svg>  
            </a>
          </div>
      </div>
      <div class="wrap-slider">
        <div class="block-slider">
          <div>
            <img src="../assets/images/w1.png">
          </div>
        </div>
        <div class="rev-top-btn">
          <button type="button"><span class="left"></span></button>
          <button type="button"><span class="right"></span></button>
        </div>
      </div>
    </div>
  `
}

function getBlock(data) {
  let res = ''; 
  data.forEach(block => {
      res = blockHTML(block);
      const slider = document.querySelector('.show');
      slider.insertAdjacentHTML('beforeend', res)
      
  })
}


getBlock(blokSlider1)
getPrice(pricesPortrait) 
getBlock(blokSlider2)
getPrice(pricesEvents) 
getBlock(blokSlider3)
getPrice(pricesComercial) 

accordion()
