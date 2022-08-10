import _ from 'lodash';
import './style.css';

const arr1 = [
  {
    id: 0,
    description: 'Code To Do List',
  },
  {
    id: 1,
    description: 'Submit Project',
  },
  {
    id: 2,
    description: 'Review Project',
  },
  {
    id: 3,
    description: 'Merge branch',
  },
];


  document.querySelector('.ToDolistGen').innerHTML = arr1.map((items) => `<div class="completeList">
  <div class="toDo">
  <input type="checkbox" id="checkB">
  <p class="workdescription" id="firstcard">${items.description}</p> 
  </div>`).join('');

  


// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   return element;
// }

// document.body.appendChild(component());