
// controlPanel/controlPanel.js
console.log('controlPanel/controlPanel.js')

function hideIndustrySEC() {
    g = document.getElementsByName('Industry_SEC')
    for(let i = 0; i < g.length; i++) {
        g[i].style.display = 'none';
    }
}

function controlPanelTitles() {
    // marker
    marker = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
    </svg>
    `
    // Sort
    try {
        a = document.getElementById('Sort')
        a = a.options[a.selectedIndex].text
        if (a == '') {
            a = 'Sort';
        } else {
            a = marker + 'Sort by ' + a;
        }
        c = document.getElementById('SortButton')
        c.innerHTML = a;
    } catch {}
    // Order
    try {
        a = document.getElementById('Order')
        a = a.options[a.selectedIndex].text
        if (a == '') {
            a = 'Order'
        } else {
            a = marker + a;
        }
        c = document.getElementById('OrderButton')
        c.innerHTML = a;
    } catch {}
    // Industry
    try {
        a = document.getElementById('Industry')
        a = a.options[a.selectedIndex].text
        if (a == '') {
            a = 'Industry'
        } else {
            a = marker + a;
        }
        c = document.getElementById('IndustryButton')
        c.innerHTML = a;
    } catch {}
    // Region
    try {
        a = document.getElementById('Region')
        a = a.options[a.selectedIndex].text
        if (a == '') {
            a = 'Region'
        } else {
            a = marker + a;
        }
        c = document.getElementById('RegionButton')
        c.innerHTML = a;
    } catch {}
    // Period
    try {
        a = document.getElementById('Period')
        a = a.options[a.selectedIndex].text
        if (a == '') {
            a = 'Year Ending'
        } else {
            a = marker + a;
        }
        c = document.getElementById('PeriodButton')
        c.innerHTML = a;
    } catch {}
    // Work In Progress
    try {		
        a = document.getElementById('WorkInProgress')
        a = a.options[a.selectedIndex].text
        if (a == 'Include Work In Progress') {
            a = 'Include Work In Progress'
        } else {
            a = marker + a;
        }
        c = document.getElementById('WorkInProgressButton')
        c.innerHTML = a;
    } catch {}
}

function IndustryChange() {
    try {
        controlPanelTitles();
        hideIndustrySEC();
        e = document.getElementById('Industry').value
        e = document.getElementById(e)
        e = e.parentElement
        e = e.parentElement
        e = e.parentElement
        e.style.display = 'block';
    } catch {}
}

function IndustrySECChange(e) {
    id = e.id.replace('m','')
    a = document.getElementById(id)
    for(let i = 0; i < a.length; i++) {
        if (a.options[i].value == a.value) {
            gg = a.options[i].innerHTML
        }
    }
    if (gg != '') {
        gg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
            </svg>
        ` + gg
        id = 'IndustryButton_' + id
        document.getElementById(id).innerHTML = gg
    }
}

function OptionsSelection() {
    e = event.target
    a = document.getElementById(e.name)
    a.value = e.id.replace('Option', '')
    e.parentElement.style.display = 'none';
    controlPanelTitles();
    hideIndustrySEC();
    try {
        IndustryChange();
        IndustrySECChange(e);
    } catch {}
}

function OptionsSection(c) {
    f = c + 'OptionsSection'
    f = document.getElementsByClassName(f)[0]
    d = f.style.display
    if (d == 'none') {
        d = 'block';
    } else {
        d = 'none';
    }
    f.style.display = d;
    //
    a = document.getElementById(c).options
    //
    for(let i = 0; i < a.length; i++) {
        o = a[i].innerHTML
        if (o == '') {
            o = 'any'
        }
        option = `<button id="` + a[i].value + `Option` + `" class="` + `options` + `" name="` + c + `" onclick="OptionsSelection()">` + o + `</button>`
        optionsO = optionsO + option
    }
}

function SortAndOrderOptions(c) {
    optionsO = ''
    OptionsSection(c, optionsO)
    a = c + 'OptionsSection'
    a = document.getElementsByClassName(a)[0]
    a.innerHTML = optionsO
}

function SortAndOrder(id) {
    c = id.replace('Button','')
    if (c == 'Sort') {
        SortAndOrderOptions(c)
    }
    if (c == 'Order') {
        SortAndOrderOptions(c)
    }
    if (c == 'filterFor') {
        filterForRefresh();
    }
    if (c == 'Industry') {
        SortAndOrderOptions(c)
    }
    if (c == 'Region') {
        SortAndOrderOptions(c)
    }
    if (c == 'Period') {
        SortAndOrderOptions(c)
    }
    if (c == 'WorkInProgress') {
        WorkInProgressToggle()
    }
    c = id.slice(15)
    if (id.replace(c,'') == 'IndustryButton_') {
        SortAndOrderOptions(c)
    }
}

function filterForRefresh() {
    document.getElementById('Industry').value = 'any'
    document.getElementById('Region').value = 'any'
    document.getElementById('Period').value = 'any'
    controlPanelTitles();
    hideIndustrySEC();
}

function WorkInProgressToggle() {
    a = document.getElementById('WorkInProgress').value
    if (a == '21') {
        a = 'any';
    } else {
        a = '21';
    }
    document.getElementById('WorkInProgress').value = a;
    controlPanelTitles();
}

function controlPanel() {
    try {
        a = window.location.href.replace(window.location.origin,'').split('/')[2]
        if (a == 'WorkingPaper') {
            a = 'Working Paper'
            wp = 'block'
            p = 'none'
        } else {
            a = 'Posts'
            wp = 'none'
            p = 'block'
        }
        document.getElementsByClassName('controlWorkingPaper')[0].style.display = wp;
        document.getElementsByClassName('controlPosts')[0].style.display = p;
        document.getElementsByClassName('controlHeaderTitle')[0].innerHTML = a;
    } catch {}
};

function closePanel() {
    c = 'none'
    m = 'none'
    g = 'none'
    t = 'none'
    document.getElementsByClassName('Control')[0].style.display = c;
    document.getElementsByClassName('Messenger')[0].style.display = m;
    document.getElementsByClassName('MessengerNotifications')[0].style.display = g;
    document.getElementsByClassName('Notifications')[0].style.display = t;
    document.getElementsByClassName('clockdb')[0].style.width = '100%';
    document.getElementsByClassName('loading')[0].style.width = '100%';
    localStorage.setItem('Control', 'Off')
    localStorage.setItem('Messenger', 'Off')
    localStorage.setItem('MessengerNotifications', 'Off')
    localStorage.setItem('Notifications', 'Off')
}

function toggleButton(id, classB) {
    if (classB == 'btn btn-danger') {
        classA = 'btn btn-primary'
        innerHTML = 'Send Friend Request'
    } else {
        classA = 'btn btn-danger'
        innerHTML = 'Cancel Friend Request'
    }
    a = document.getElementsByName(id)[0].className = classA
    a = document.getElementsByName(id)[0].innerHTML = innerHTML
    b = document.getElementsByName(id)[1].className = classA
    a = document.getElementsByName(id)[1].innerHTML = innerHTML
}

function Notifications(Arg) {
    if (Arg == 'On') {
        c = 'none'
        m = 'none'
        g = 'none'
        t = 'block'
        Panel(c, m, g, t, 'Notifications')
    } else {
        closePanel()
    }
}

function MessengerNotifications(Arg) {
    if (Arg == 'On') {
        c = 'none'
        m = 'none'
        g = 'block'
        t = 'none'
        Panel(c, m, g, t, 'MessengerNotifications')
    } else {
        closePanel()
    }
}

function Messenger(Arg) {
    if (Arg == 'On') {
        c = 'none'
        m = 'block'
        g = 'none'
        t = 'none'
        Panel(c, m, g, t, 'Messenger')
    } else {
        closePanel()
    }
    messageInputFocus();
}

function Control(Arg) {
    if (Arg == 'On') {
        c = 'block'
        m = 'none'
        g = 'none'
        t = 'none'
        Panel(c, m, g, t, 'Control')
    } else {
        closePanel()
    }
}

function Panel(c, m, g, t, r) {
    z = 'border-bottom: solid #0D47A1;'
    s = 'border-bottom: solid white;'
    document.getElementsByClassName('Control')[0].style.display = c;
    document.getElementsByClassName('Messenger')[0].style.display = m;
    document.getElementsByClassName('MessengerNotifications')[0].style.display = g;
    document.getElementsByClassName('Notifications')[0].style.display = t;
    resize(c, m, g, t)
    document.getElementById('ControlButton').style = s
    document.getElementById('MessengerButton').style = s
    document.getElementById('MessengerNotificationsButton').style = s
    document.getElementById('NotificationsButton').style = s
    document.getElementById(r + 'Button').style = z
    localStorage.setItem('Control', 'Off')
    localStorage.setItem('Messenger', 'Off')
    localStorage.setItem('MessengerNotifications', 'Off')
    localStorage.setItem('Notifications', 'Off')
    localStorage.setItem(r, 'On')
}

