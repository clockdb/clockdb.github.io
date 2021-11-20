
// base/openEditor.js
console.log('base/openEditor.js')

function OpenEditor() {
    a = document.getElementById('OpenEditor').checked
    if (a == true) {
        a = false
        b = 'none';
    } else {
        a = true
        b = 'contents';
    }
    document.getElementById('OpenEditor').checked = a;
    document.getElementById('OpenEditorIcon').style.display = b;
};
