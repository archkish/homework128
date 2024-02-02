// edit block

document.addEventListener('keydown', function(event) {

  if (event.key === 'e' && event.ctrlKey) {
    event.preventDefault();
    area.value = text.innerText
    change()
    area.focus()
  }

  if (event.key === 's' && event.ctrlKey) {
    event.preventDefault();
    text.innerText = area.value;
    change()
  }
  
  function change() {
    text.classList.toggle('hide')
    area.classList.toggle('hide')
  }

})

// resize block

const block = document.getElementById('edit');
const btn = document.querySelector('.resize');
let isResizing = false;

function change(event) {
  if (!isResizing) return;

  block.style.width = event.clientX - block.getBoundingClientRect().left + 'px';
  block.style.height = event.clientY - block.getBoundingClientRect().top + 'px';

}

btn.addEventListener('mousedown', () => {
  isResizing = true;
})

document.addEventListener('mousemove', change);
btn.addEventListener('mouseup', () => {
  isResizing = false
});

// sort table

let rows = document.querySelectorAll('#table tbody tr');
let sorted;

table.addEventListener('click', function(e) {
  if(e.target.tagName != 'TH') return;
  let th = e.target;
  
  switch(th.dataset.type) {
    case 'number':
      sorted = [...rows].sort((rowA, rowB) => {
        return rowA.children[th.cellIndex].innerHTML - rowB.children[th.cellIndex].innerHTML
      })
      break
    case 'string':
      sorted = [...rows].sort((rowA, rowB) => {
        return rowA.children[th.cellIndex].innerHTML > rowB.children[th.cellIndex].innerHTML ? 1 : -1
      })
      break
    case 'date':
      sorted = [...rows].sort((rowA, rowB) => {
        return (new Date(rowA.children[th.cellIndex].innerHTML)).getTime() - (new Date(rowB.children[th.cellIndex].innerHTML)).getTime()
      })
      break
  }

  for(let tr of sorted) {
    table.children[1].appendChild(tr)
  }

})
