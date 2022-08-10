// import _ from 'lodash';
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
    description: 'Merge ',
  },
];

document.querySelector('.ToDolistGen').innerHTML = arr1.map((items) => `<div class="completeList">
  <div class="toDo">
  <input type="checkbox" id="checkB">
  <p class="workdescription" id="firstcard">${items.description}</p> 
  </div>`).join('');
