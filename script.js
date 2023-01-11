// 1st

let h1tag=document.querySelector('.main')
document.querySelector('#btn').addEventListener('click',()=>{
    let h1main=document.createElement('h1')
    h1main.innerHTML='<h1>MERN stack</h1>'
    h1tag.appendChild(h1main)
})

// 2nd
let tag=document.querySelector('h1')
document.querySelector('#btn').addEventListener('click',()=>{
    tag.style.color="red"
})
// 3rd

let clock=document.querySelector('.clock');
clock.style.display="none"
document.querySelector('#check_time').addEventListener('click',()=>{
    clock.style.display="block"
})
function time0(){    
    let date_check  = new Date()
    let time  =  date_check.toLocaleTimeString()
    clock.innerHTML =  time
}
setInterval(()=>{
    time0()
},1000)


//  4th

let check=document.querySelector('#content');
document.querySelector('#btn').addEventListener('click',()=>{
    check.innerHTML =  "Welcome to Elevation academy"
})

// Q 5th
document.querySelector('#btn').addEventListener('click',()=>{
    document.querySelector('#content').style.display="none";
})