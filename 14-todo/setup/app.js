// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const constainer = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    // console.log(grocery.value);
    const value = grocery.value;
    const id = new Date().getTime().toString();
    // console.log(id);

    if(value && !editFlag) {
        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
                <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);


        // append child
        list.appendChild(element);
        // display alert
        displayAlert('item added to the list', 'success');
        // show container
        constainer.classList.add('show-container');

        // ------------------------------------

        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();




    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();


    } else {
        displayAlert('empty value', 'danger');
    }
}

// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

// delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement; // <article class="grocery-item">
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        constainer.classList.remove('show-container');
    }
    displayAlert('item removed', 'danger');

    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
}
// edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement; // <article class="grocery-item">
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling; // <p class="title">item</p>
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = 'edit';
}


// set back to default
function setBackToDefault() {
    grocery.value= '';
    // If it also reset editElement, it will look cleaner.
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit'
}

// clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');

    if (items.length > 0) {
        items.forEach(item => {
            list.removeChild(item);
        })
    }
    constainer.classList.remove('show-container');
    displayAlert('empty list', 'danger');

    setBackToDefault();
    localStorage.removeItem('list');
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    const grocery = {id, value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}
function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(item => item.id !== id);
    localStorage.setItem('list', JSON.stringify(items));
}
function editLocalStorage(id, value) {}
function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

// localStorage API
// setItem
// getItem
// removeItem
// save as string
// localStorage.setItem('orange', JSON.stringify(['item', 'item2']));
// const oranges = JSON.parse(localStorage.getItem('orange'));
// console.log(oranges);
// localStorage.removeItem('orange');

// ****** SETUP ITEMS **********
