const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
    e.preventDefault();
    
    // Get the value from the input field
    const newItem = itemInput.value.trim();

    // Validate Input
    if (newItem === '') {
        alert('Please add an item');
        return;
    }

    // Create list item (li)
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    // Create and append the button
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    // Append the li to the item list
    itemList.appendChild(li);

    // Clear input field
    itemInput.value = '';
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    // Add an icon to the button
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
