////  elements
const hourseEl = document.querySelector('.hourse')
const minutesEl = document.querySelector('.minutes')
const secondsEl = document.querySelector('.seconds')



setInterval(()=>{
  document.body.style.backgroundColor =   '#'  +  Math.floor(Math.random()*16777215).toString(16);
  document.body.style.transition =  '5s';
  const   now = new Date();
const hourse = now.getHours().toString().padStart(2, '0')
const minutes = now.getMinutes().toString().padStart(2, '0')
const seconds = now.getSeconds().toString().padStart(2, '0')
   hourseEl.textContent = `${hourse} :`
  minutesEl.textContent = `${minutes} :`
  secondsEl.textContent = `${seconds}`
}, 1000);




