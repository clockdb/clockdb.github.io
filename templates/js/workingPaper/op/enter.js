
// op/enter.js

// enter key
document.addEventListener('keydown', (event) => {
    keys = [13, 38, 40]
    up = [38]
    if (keys.includes(event.keyCode)) {
        event.preventDefault()
        a = window.location.href.replace(window.location.origin, '').split('/')[2]
        // cell positioning
        if (a == 'WorkingPaper') {
            try {
                //
                cells = document.querySelectorAll('input');
                cell = event.target;
                column = cell.id.slice(-1);
                for(let i = 0; i < cells.length; i++) {
                    if (cell === cells[i]) {
                        cellrank = i;
                    }
                }
                g = 1;
                if (up.includes(event.keyCode)) {
                    g = -1;
                }
                if (event.shiftKey) {
                    o = -8 * g;
                } else {
                    o = 8 * g;
                }
                p = cellrank + o
                visiblerow = 0
                while (visiblerow === 0) {
                    nextcell = cells[p].id
                    a = nextcell.slice(0, -1) + 'Row';
                    a = document.getElementById(a).style.display;
                    if (a == 'none') {
                        visiblerow = 0;
                        p = p + o
                    } else {
                        visiblerow = 1;
                    }
                }
                cells[p].focus()
                cells[p].select()
                //
            } catch {}
        }
        //
        e = event.target
        user_id = document.getElementById('user_id').innerHTML
        //
        if (e.id == 'id_chat_message_input') {
            messagesSend()
        }
        if (e.id == 'inputPassword') {
            document.getElementById('Login').click()
        }
        if (e.id == 'inputPassword2') {
            document.getElementById('Register').click()
        }
        // search entities
        if (e.id == 'SearchBar') {
            Entities(e.value);
        }
        // search user
        if (e.id == 'SearchUsersBar') {
            Network(e.value);
        }
    }
})