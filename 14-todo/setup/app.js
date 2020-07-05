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
        console.log('editing');

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
    list.removeChild(element);
    if (list.children.length === 0) {
        constainer.classList.remove('show-container');
    }
    displayAlert('item removed', 'danger');
}
// edit function
function editItem() {
    console.log('edit item');
}


// set back to default
function setBackToDefault() {
    grocery.value= '';
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
    // localStorage.removeItem('list');
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    console.log('added to local storage');
}


// ****** SETUP ITEMS **********
