const toast = {
  timeoutID: null,
  styles: {
    position: 'fixed',
    left: '0',
    top: '0',
    'border-radius': '10px',
    padding: '15px',
    'background-color': '#c2bebe',
    color: '#FFF',
    'z-index': 10000,
    'text-align': 'center',
    width: '100%'
  },

  success: function(text){
    this.show(text, 'success')
  },
  error: function(text){
    this.show(text, 'error')
  },
  warning: function(text){
    this.show(text, 'warning')
  },
  info: function(text){
    this.show(text, 'info')
  },

  show: function(text, type) {
    const myToast = document.getElementById('my_toast')
    
    if(myToast) {
      clearTimeout(this.timeoutID)
      myToast.remove();
    }

    myToast && myToast.remove();
    let style = '';
    Object.entries(this.styles).forEach(([key, value]) => {
      style += `${key}: ${value};`
    })

    switch(type) {
      case 'success': 
        style += 'background-color: #5ee360;'
        break
      case 'error': 
        style += 'background-color: #f4351c;'
        break
      case 'warning': 
        style += 'background-color: #fde14;'
        break
      case 'info': 
        style += 'background-color: #0dcaf0;'
        break
    }

    const html = `<div class="my-toast" id='my_toast' style='${style}'>
    <p class="mb-0">${text}</p>
  </div>`
    document.body.insertAdjacentHTML('afterbegin', html);
    this.hide(3000);
  },

  hide: function(timeout) {
    this.timeoutID = setTimeout(function() {
      const myToast = document.getElementById('my_toast');

      myToast && myToast.remove();
    }, timeout)

  }
}