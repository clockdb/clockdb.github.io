
// base/base.js

// redirect

function redirect(page, user_id, this_user_id) {
    z = 0
    b = window.location.href.replace(window.location.origin,'')
    a = b.split('/')[1]
    b = b.split('/')[2]
    if (a == user_id) {
        if (page == 'profile') {
            z = 1
        }
    } else {
        if (a == user_id) {
            z = 1
        }
    }
    if (page == 'messages') {
        onSelectFriend(this_user_id)
        Messenger('On')
    } else {
        if (z == 1) {
            showPage(page)
            historyPush(page)
        } else {
            url = window.location.origin + '/' + user_id + '/' + page;
            window.open(url, '_self');
            showPage(page)
            historyPush(page)
        }
    }
}

// history push

function historyPush(page) {
    user_id = window.location.href.replace(window.location.origin,'');
    user_id = user_id.split('/')[1];
    a = 1
    try {
        ts = document.getElementById('TradingSymbol1').value
        w = window.location.href
        o = window.location.origin
        w = w.replace(o, '')
        o = w.split('/')[2]
    } catch {}
    try {
        if (o == 'WorkingPaper') {
            history.pushState({page}, ``, `/${user_id}/WorkingPaper/${ts}/${page}/`);
            document.title = 'Clockdb | ' + ts + ' | ' + page;
            a = 0
        }
        else {}
    } catch {}
    if (a == 1) {
        history.pushState({page}, ``, `/${user_id}/${page}/`);
        document.title = 'Clockdb | ' + page;
    }
}

// popstate

function positionpopstate() {
    try {
        a = document.getElementById(localStorage.position)
        a.focus()
        a.select()
    } catch {}
}

window.onpopstate = function(event) {
    showPage(event.state.page);
    positionpopstate();
}

function historyBack() {
    window.history.back();
    positionpopstate();
}

function historyForward() {
    window.history.forward();
    positionpopstate();		
}

// showPage

function showPage(page) {
    const loading = document.getElementById('id_loading_spinner')
    const searchBar = document.getElementById('SearchBar')
    const searchUsersBar = document.getElementById('SearchUsersBar')
    loading.style.display = 'block';
    searchBar.value = '';
    searchUsersBar.value = '';
    document.querySelectorAll('div').forEach(div => {
        hideDiv(div)
    })
    try {
        document.getElementById(page).style.display = 'block';
        window.scrollTo(0, 0)
    } catch {}
    loading.style.display = 'none';
}

// hide div

function hideDiv(div) {
    skip = [
        // loading
        'id_loading_spinner',
        // header
        'id_chat_notification_dropdown_toggle',
        'id_chat_notifications_container',
        'id_notification_dropdown_toggle',
        'id_general_notifications_container',
        // room
        'id_chatroom_card',
        'id_room_title',
        'id_chat_log_container',
        'id_chatroom_loading_spinner_container',
        'id_chatroom_loading_spinner',
        'id_client_error_modal',
    ]
    if (skip.includes(div.id)) {
    } else {
        z = 0
        try {
            a = parseInt(div.id.replace('m',''))
            if (isNaN(a)) {
                z = 1
            }
        } catch {
            z = 1
        }
        if (z == 1) {
            if (div.id != '') {
                div.style.display = 'none';
            }
        }
    }
}

// display
function display(hideIf) {
    const user_id = document.getElementById('user_id').innerHTML
    const loading = document.getElementById('id_loading_spinner')
    loading.style.display = 'block';
    var page = window.location.pathname
    page = page.split('/')[2];
    document.getElementById('clockdbSpan').style.display = 'inline-block';
    document.getElementById('HomeSpan').style.display = 'inline-block';
    try {
        if (page != 'password_change') {
            document.getElementById('NotAuthenticated').style.display = 'inline-block';
        }
    } catch {
        document.getElementById('Authenticated').style.display = 'inline-block';
    }
    if (hideIf.includes(page)) {
    } else {
        if (page == 'WorkingPaper') {
            a = 'inline-block';
            b = 'none';
            c = 'inline-block';
        } else {
            a = 'none';
            b = 'inline-block';
            c = 'inline-block';
        }
        document.getElementById('FilesSpan').style.display = a;
        document.getElementById('GearSpan').style.display = a;
        document.getElementById('FinancialsSpan').style.display = a;
        document.getElementById('AuditSpan').style.display = a;
        document.getElementById('ValuationSpan').style.display = a;
        document.getElementById('OpinionSpan').style.display = a;
        document.getElementById('MoreSpan').style.display = a;
        //
        document.getElementById('PostsSpan').style.display = b;
        //document.getElementById('DatabaseSpan').style.display = b;
        //
        //document.getElementById('ControlSpan').style.display = c;
        //document.getElementById('MessengerNotificationsSpan').style.display = c;
        //document.getElementById('NotificationsSpan').style.display = c;
        document.getElementById('SearchBarSpan').style.display = c;
        document.getElementById('SearchUsersBarSpan').style.display = c;
        try {
            if (user_id != "{{id}}") {
                username = "{{username}}"
                username = username.toLowerCase()
                a = username + ' network'
            } else {
                a = 'My Network'
            }
            document.getElementById('SearchUsersBar').placeholder = a
            if (window.innerWidth > 799) {
                a = '80%';
            } else {
                a = '60%';
            }
            document.getElementsByClassName('clockdb')[0].style.width = a;
            document.getElementsByClassName('loading')[0].style.width = a;
        } catch {}
    }
    document.getElementById('HeaderMenu').style.display = 'block';
    document.getElementsByClassName('header')[0].style.display = 'block';
    document.getElementsByClassName('panelHeader')[0].style.display = 'block';
    loading.style.display = 'none';
}

function preloadCallback(src, elementId){
    var img = document.getElementById(elementId)
    img.src = src
}

function preloadImage(imgSrc, elementId){
    // console.log("attempting to load " + imgSrc + " on element " + elementId)
    var objImagePreloader = new Image();
    objImagePreloader.src = imgSrc;
    if(objImagePreloader.complete){
        preloadCallback(objImagePreloader.src, elementId);
        objImagePreloader.onload = function(){};
    }
    else{
        objImagePreloader.onload = function() {
            preloadCallback(objImagePreloader.src, elementId);
            //    clear onLoad, IE behaves irratically with animated gifs otherwise
            objImagePreloader.onload=function(){};
        }
    }
}

function validateText(str)
{
    var md = window.markdownit({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +
                        hljs.highlight(lang, str, true).value +
                        '</code></pre>';
                } catch (__) {}
            }
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        },
        linkify: true,
    });
    var result = md.render(str);
    return result
}

function displayLoadingSpinner(isDisplayed){
    var spinner = document.getElementById("id_loading_spinner")
    if(isDisplayed){
        spinner.style.display = "block"
    }
    else{
        spinner.style.display = "none"
    }
}