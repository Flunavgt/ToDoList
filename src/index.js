// import _ from 'lodash';
import './style.css';

class ToDolist {
#toDo;

  constructor() {
    this.#toDo = [];
  }

  // Setters
  SetToDo(toDo) {
    this.#toDo = toDo;
  }

  // Getter
  get ToDo() {
    return this.#toDo;
  }

  reorder() {
    for (let index = 0; index < this.#toDo.length; index++) {
      this.#toDo[index].id = index;      
    }
  }

  editToDo(id, activity, doneBox) {
  }

  // Methods
  AddToDo(activity, doneBox) {
    // const id = `${new Date().getTime()}`;
    const id = this.#toDo.length;
    this.#toDo.push({
      activity,
      doneBox,
      id,
    });
  }

  DeleteToDo(id) {
    const localToDo = this.#toDo;
    this.#toDo.splice(id, 1);
    console.log(id);

    // this.#toDo = localToDo.filter((toDo) => {
    //   if (toDo.id !== id) {
    //     return true;
    //   }
    //   return false;
    // });
  }


  SaveToDolistLocal() {
    localStorage.setItem('toDo', JSON.stringify(this.#toDo));
  }

  LoadToDoFromLocal() {
    const savedToDo = JSON.parse(localStorage.getItem('toDo'));

    if (Array.isArray(savedToDo)) {
      this.#toDo = savedToDo;
      return true;
    }
    return false;
  }

}

const myToDolist = new ToDolist();

myToDolist.LoadToDoFromLocal();

function modificarBox(index, valor){
  console.log(index, valor);
  myToDolist.ToDo[index].doneBox = valor;
  myToDolist.SaveToDolistLocal();
}

function modifyDescription(index, valor){
  console.log(index, valor);
  myToDolist.ToDo[index].activity = valor;
  myToDolist.SaveToDolistLocal();
}

const render = () => {
  document.querySelector('.ToDoList').innerHTML = '';
    for (let index = 0; index < myToDolist.ToDo.length; index +=1) {
     
      const toDo = myToDolist.ToDo[index];
  
      const List = document.querySelector('.ToDoList');
      const element = document.createElement('li');
      element.classList.add('eachToDo');
      const doneBox = document.createElement('input');
      doneBox.type = 'checkbox';
      const inputTask = document.createElement('input');
      inputTask.type = 'text';
      doneBox.classList.add('doneBox');
      inputTask.value = toDo.activity;
      element.append(doneBox, inputTask);
      doneBox.setAttribute('id', toDo.id);
      inputTask.disabled = false;
      doneBox.checked = toDo.doneBox;
      if(doneBox.checked){
        inputTask.style.textDecoration = 'line-through';
      }
      

      inputTask.addEventListener('change', (event)=>{
        // if (event.key === 'Enter'){
          modifyDescription(index, inputTask.value);
          console.log(inputTask.value);
        // }
      });

      doneBox.addEventListener('click', ()=>{
        modificarBox(index, doneBox.checked);
        
        if(doneBox.checked){
          inputTask.style.textDecoration = 'line-through';
        }else{
          inputTask.style.textDecoration = 'none';
        }
      });


      List.appendChild(element);
    


      // Remove Button
      const deleteButton = document.createElement('button');

      function deleteToDo() {
        const idToDelete = deleteButton.id;
        myToDolist.DeleteToDo(idToDelete);
        myToDolist.reorder();
        myToDolist.SaveToDolistLocal();
        render();
      }
      deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
      deleteButton.classList.add('delButton');
      deleteButton.onclick = deleteToDo;
      deleteButton.id = toDo.id;
      element.appendChild(deleteButton);
    }
  
};

render()
// Controller
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  const titletextbox = document.getElementById('activity');
  const toDop = titletextbox.value;
  myToDolist.AddToDo(toDop, false);
  myToDolist.SaveToDolistLocal();
  titletextbox.value = '';
  render();
});











// window.isEditingALi=false;

// document.addEventListener("click", function(e){ //Of course you can merge this EventListener with the next one but I am separing them just to make things clear for you !

//   const elementsIdSelector="toEdit";

//   e=(e||window.event);
//   e.preventDefault();
//   const path=e.path;
//   for(var i=0;i<path.length-4;i++){
//     if(path[i].tagName=="SPAN"&&path[i].id==elementsIdSelector){
//       //Found a Li element with the id required ( Even dynamically created li would fires ! )
      
//       //Do whatever you want there 
      
//       path[i].addEventListener("click", function(){
//           if(this.getAttribute("contenteditable")!="true"){
//             const wantEdit=window.confirm("You want to edit this element content ?");
//             if(wantEdit){
//               this.setAttribute("contenteditable", true);
//               window.isEditingALi=this;
//               this.focus();
//              }else{
//               window.isEditingALi=false;
//              }
//           }
//         });
      
//     }
//   }
// });

// document.addEventListener("click", function(e){
//   e=(e||window.event);
//   e.preventDefault();
//   const path=e.path;
//   let canGetReset=true;
//   for(var i=0;i<path.length-4;i++){
//     if(path[i]==window.isEditingALi) canGetReset=false;
//   }
//   if(canGetReset&&window.isEditingALi){
//     window.isEditingALi.removeAttribute("contenteditable");
    
//     //Here you can add your Ajax request or whatever function you want to do after the user finish editing the li ..
    
//     alert("Li has been changed successfully !");
//     window.isEditingALi=false;
    
//   }
// });