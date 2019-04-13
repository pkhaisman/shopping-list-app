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

$(addItem);

