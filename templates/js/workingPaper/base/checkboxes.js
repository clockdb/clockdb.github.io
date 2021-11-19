
// base/checkboxes.js

// clear checkboxes

function ClearCheckboxes() {
    a = document.querySelectorAll('input')
    for(let i = 0; i < a.length; i++) {
        b = a[i].id
        if (b != 'UnhideCheckbox') {
            c = b.slice(b.length - 8)
            if (c == 'Checkbox') {
                a[i].checked = false
                a[i].style.visibility = 'hidden'
            }
            c = b.slice(b.length - 9)
            if (c == 'Checkbox2') {
                a[i].checked = false
                a[i].style.visibility = 'hidden'
            }
        }
    }
}

// checkboxes

document.addEventListener('keydown', (event) => {
    keys = [49, 50]
    if (keys.includes(event.keyCode)) {
        position = event.target
        row = position.id.slice(0, -1)
        if (event.keyCode == 49 && (event.altKey || event.metaKey)) {
            event.preventDefault();
            checkbox = document.getElementById(row + 'Checkbox')
        }
        if (event.keyCode == 50 && (event.altKey || event.metaKey)) {
            event.preventDefault();
            checkbox = document.getElementById(row + 'Checkbox2')
        }
        if (checkbox.checked == true) {
            checkbox.checked = false;
            checkbox.style.visibility = 'hidden'
        } else {
            checkbox.checked = true;
            checkbox.style.visibility = 'visible'
        }
    }
});