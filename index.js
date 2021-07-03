const tarefa = document.querySelector('#entrada');
const add = document.querySelector('#new-task');
const lista1 = document.querySelector('#incompleted-tasks');
const lista2 = document.querySelector('#completed-tasks');


// let createNewTaskElement = function(taskString) {
//     let listItem = document.createElement("li");
//     let checkBox = document.createElement("input");
//     let label = document.createElement("label");
//     let editInput = document.createElement("input");
//     let editButton = document.createElement("button");
//     let deleteButton = document.createElement("button");

//     label.innerText = taskString;

//     checkBox.type="checkbox";
//     editInput.type="text";

//     editButton.innerText="Editar";
//     editButton.className="edit";
//     deleteButton.innerText="Deletar";
//     deleteButton.className="delete";

//     listItem.appendChild(checkBox);
//     listItem.appendChild(label);
//     listItem.appendChild(editInput);
//     listItem.appendChild(editButton);
//     listItem.appendChild(deleteButton);
    
//     return listItem;
// }

// add.addEventListener('click', e => {
//     e.preventDefault();
//     const texto = tarefa.value;
//     //console.log(texto);
//     if (texto) lista1.innerHTML = lista1.innerHTML + `<li>${texto}</li>`;
//     tarefa.value = "";

// });

const addItem = (lista, entrada) => {
    const texto = entrada.value;
    if (texto) {
        console.log(texto);
        lista.innerHTML = lista.innerHTML + ` <li><input type="checkbox">${texto}<button id="remove">remover</button></li>`;
    }
    entrada.value = "";

}

const addItemViaButton = e => {
    e.preventDefault();
    addItem(lista1, tarefa);
}

const addItemViaEnter = e => {
    if (e.keyCode === 13) {
        e.preventDefault();
        addItem(lista1, tarefa);
    }
}

const removeItem = e => {
    if (e.target.id == "remove") {
    const liRemove = e.target.parentNode;
    liRemove.remove();
    } 
}   

add.addEventListener('click', addItemViaButton);
tarefa.addEventListener('keyPressed', addItemViaEnter);
lista1.addEventListener('click', removeItem);


tarefa.focus();

//passar para a lista de concluidos com check

let checkbox = document.querySelector("input[type=checkbox]");

function addListaCheck(e) {
        if (e.target.type === "checkbox") {
            alert("Checkbox");
            addItem(lista2, tarefa);
        }
    }

checkbox.addEventListener("change", addListaCheck);






