// let button = document.querySelector('button')
// let main = document.querySelector('.main')


// button.addEventListener('click',()=>{
//     main.classList.add('main3')
//     main.classList.remove('main')
// })



let button = document.querySelector('button');
let main = document.querySelector('.main') || document.querySelector('.main2') || document.querySelector('.main3') || document.querySelector('.main4') || document.querySelector('.main5');

let classList = ['main', 'main2', 'main3', 'main4', 'main5'];
let current = 0; 

button.addEventListener('click', () => {
 
  main.classList.remove(classList[current]);


  current = (current + 1) % classList.length;


  main.classList.add(classList[current]);
});



console.log(0+1%5)