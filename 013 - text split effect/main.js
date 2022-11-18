function countdown() {
  let day = 0
  const days = document.querySelector('.numbers > p:nth-child(1)')
  days.innerHTML = day++;
  console.log('fdsdf')
}

setInterval(() => {
  countdown();  
}, 1000);