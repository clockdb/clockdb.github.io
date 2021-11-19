
// base/base.js

// dom

document.addEventListener('DOMContentLoaded', function() {
    var loading = document.getElementById('id_loading_spinner')
    loading.style.display = 'block'
    hideIf = [
        '',
        'login',
        'register',
        'password_reset',
        'change_password',
        'done',
    ]
    display(hideIf);
    onePageAppOnLoad(hideIf);
    try {
        document.getElementById('SearchBar').select()            
    } catch {
        try {
            document.getElementById('inputEmail').select()            
        } catch {
            try {
                document.getElementById('id_email').select()            
            } catch {}
        }
    }
    a = document.getElementsByClassName('NotAuthenticated')[0]
    if (a != undefined) {
        document.getElementsByClassName('HeaderMenu')[0].style.width = '100%';
    } else {
        Control('On')
    }
});


// opnePageApp buttons

document.querySelectorAll('button').forEach(button => {
    onePageApp(button);
});
