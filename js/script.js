let button = document.querySelector('button')
let main = document.querySelector('div')



// button.addEventListener('click',()=>{
//     main.classList.add('main3')
//     main.classList.remove('main')
// })

// tag create element an contains
button.addEventListener('click',()=>{
   let myh2 = document.createElement('h2')
   main.appendChild(myh2)

   myh2.classList.add('heading2')

   myh2.innerHTML = 'hello im headig tag'
})



// let button = document.querySelector('button');
// let main = document.querySelector('.main') || document.querySelector('.main2') || document.querySelector('.main3') || document.querySelector('.main4') || document.querySelector('.main5');

// let classList = ['main', 'main2', 'main3', 'main4', 'main5'];
// let current = 0; 

// button.addEventListener('click', () => {
 
//   main.classList.remove(classList[current]);


//   current = (current + 1) % classList.length;


//   main.classList.add(classList[current]);
// });



