// base/unhideRows.js

function UnhideRows() {
    rows = document.querySelectorAll('tr');
    for(let i = 1; i <= rows.length; i++) {
        try {
            row = rows[i];
            row.style.display = '';
        } catch {}
    }
}

function CheckUnhideCheckbox() {
    var a = document.getElementById("UnhideCheckbox").checked
    if (a == true) {
        UnhideRows();
        document.getElementById('UnhideCheckboxOff').style.display = 'contents';
        document.getElementById('UnhideCheckboxOn').style.display = 'none';
    } else {
        document.getElementById('UnhideCheckboxOff').style.display = 'none';
        document.getElementById('UnhideCheckboxOn').style.display = 'contents';
    }
    Compile();
}

function UnhideCheckbox() {
    a = document.getElementById('UnhideCheckbox').checked
    if (a == true) {
        a = false
    } else {
        a = true
    }
    document.getElementById('UnhideCheckbox').checked = a
    CheckUnhideCheckbox();
}