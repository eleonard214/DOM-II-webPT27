// Your code goes here
const nav1 = document.querySelector('a')
const nav2 = nav1.nextElementSibling
const nav3 = nav2.nextElementSibling
const headImg = document.querySelector('.intro img')
const headH1= document.querySelector('h1')
const allH2s = document.querySelectorAll('h2')
const firstH2= allH2s[0]
const secH2= allH2s[1]
const thirdH2=allH2s[2]
const fourH2=allH2s[5]
const footPara=document.querySelector('.footer p')

window.addEventListener('resize', (event)=>{
    headImg.src='http://images.clipartpanda.com/city-bus-side-view-clipart-dTraX7aT9.png'
})

nav1.addEventListener('click', (event)=> {
    event.target.style.fontSize="25px"
})

nav2.addEventListener('auxclick', (event)=> {
    event.target.style.backgroundColor='orchid'
})
nav2.addEventListener('click', (event)=>{
    event.target.style.color='orchid'
})
nav3.addEventListener('mouseleave', (event)=> {
    event.target.style.color='orange'
})
headH1.addEventListener('keydown', (event)=> {
    event.target.style.color='red'
})
firstH2.addEventListener('auxclick', (event)=>{
    event.target.style.color='purple'
})
firstH2.addEventListener('keyup', (event)=> {
    event.target.style.border='5px solid blue'
})



secH2.addEventListener('wheel', (event)=> {
    event.target.textContent='Welcome!!!'
})
thirdH2.addEventListener('dblclick',(event)=>{
    event.target.textContent='Are You Ready?!?!'
})
fourH2.addEventListener('focus', (event)=>{
    event.target.style.backgroundColor='cyan'
})
footPara.addEventListener('mouseover', (event)=>{
    event.target.textContent="Edited in DOM by EL 2021"
})
const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
    })
})
console.log(allH2s[3])