// adds item to the shopping list
function addItem() {
    $('#js-shopping-list-form').on('submit', function(event) {
        // override form default
        event.preventDefault();
        // save input text in var 'item'
        let item = $(this).find('input').val();
        // display input text in html
        $('.shopping-list').append(
            `<li>
                <span class="shopping-item">${item}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        )
    });
}

// check/uncheck item functionality
function toggleCheck() {
    // execute function when 'check' button is clicked
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        // target 'shopping-item' class and add '&__checked' class to it
        // had a problem where I couldnt target .shopping-item. i kept trying with the thought that it's a parent of 'this' but it wasn't
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

// delete item functionality
function deleteItem() {
    // add click event to delete button
    $('ul').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    })
}

$(addItem);
$(toggleCheck);
$(deleteItem);

