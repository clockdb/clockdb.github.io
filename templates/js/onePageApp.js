
// js/onePageApp.js

// on load

function onePageAppOnLoad(hideIf) {
    const user_id = document.getElementById('user_id').innerHTML
    var page = window.location.pathname.replace('/','').split('/')[1];
    if (user_id != '') {
        document.querySelectorAll('div').forEach(div => {
            hideDiv(div);
        });
        document.querySelectorAll('button').forEach(button => {
            onePageApp(button);
        })
        // φ
        if (page == 'WorkingPaper') {
            var subpage = window.location.href.replace(window.location.origin,'').split('/')[4]
            if (subpage == '') {
                subpage = 'Opinion'
            }
            showPage(subpage)
            Compile();
            ts = document.getElementById('TradingSymbol1').value;
            document.title = 'Clockdb | ' + ts + ' | '+ subpage;
            page = subpage
            history.pushState({page}, ``, `/${user_id}/WorkingPaper/${ts}/${page}/`);
        // Posts
        } else {
            // phase
            if (page == 'phase') {
                url = window.location.origin + '/'
                window.open(url, '_self');
            }
            // home
            home = [
                undefined,
                '',
                'home',
                'Home',
            ]
            if (home.includes(page)) {
                try {
                    a = document.getElementById('user_id').innerHTML
                    if (a != 'None') {
                        activeurl = window.location.href.replace(window.location.origin,'').replaceAll('/','')
                        activeurlsub = window.location.href.split('/')[1]
                        url = window.location.origin + '/' + a + '/Posts/'
                        if (activeurl != a) {
                            window.open(url, '_self');
                        } else {
                            page = 'Posts'
                            document.title = 'Clockdb | ' + page;
                            history.pushState({page}, ``, `/${user_id}/${page}/`);
                            showPage(page)
                        }
                    }
                } catch {
                    url = window.location.origin + '/login'
                    window.open(url, '_self');
                }
            // others
            } else {
                document.title = 'Clockdb | ' + page;
                history.pushState({page}, ``, ``);
                showPage(page)
            }
        }
    }
};

// buttons
function onePageApp(button) {
    button.onclick = function() {
        user_id = document.getElementById('user_id').innerHTML;
        page = this.dataset.page;
        gg = 0
        if (page != "#") {
            if (page == 'Messenger') {
                if (localStorage.Messenger == 'On') {
                    Messenger('Off');
                } else {
                    Messenger('On')
                }
                gg = 1
            }
            if (page == 'MessengerNotifications') {
                if (localStorage.MessengerNotifications == 'On') {
                    MessengerNotifications('Off');
                } else {
                    MessengerNotifications('On');
                }
                gg = 1
            }
            if (page == 'Notifications') {
                if (localStorage.Notifications == 'On') {
                    Notifications('Off')
                } else {
                    Notifications('On')
                }
                setGeneralNotificationsAsRead();
                gg = 1
            }
            if (page == 'SortAndOrder') {
                SortAndOrder(button.id);
                gg = 1
            }
            if (page == 'Print') {
                Print();
                gg = 1
            }
            if (page == 'UploadConfirm') {
                UploadConfirm();
                gg = 1
            }
            if (page == 'Save') {
                Save();
                gg = 1
            }
            if (page == 'Rollover') {
                Rollover();
                gg = 1
            }
            if (page == 'ClearCheckboxes') {
                ClearCheckboxes();
                gg = 1
            }
            if (page == 'OpenEditor') {
                OpenEditor();
                gg = 1
            }
            if (page == 'UnhideCheckbox') {
                UnhideCheckbox();
                gg = 1
            }
            id = this.id
            if (id.slice(id.length - 8) == 'ShortCut') {
                position = button.className
                ShortCuts(id, page, position);
                gg = 1
            }
            if (page.slice(-5) == 'Files') {
                FilesPage(page);
                gg = 1
            }
            if (page == 'ReferenceHeader') {
                thisHeader = this
                ReferenceHeaderButton(thisHeader)
                gg = 1
            }
            if (page == 'search_posts') {
                showPage('Posts');
                historyPush('Posts');
                ClearPosts();
                Posts();
                gg = 1
            }
            if (page == 'Control') {
                if (localStorage.Control == 'On') {
                    Control('Off');
                } else {
                    Control('On');
                }
                gg = 1
            }
            if (page == 'change_password') {
                url = window.location.origin + '/' + user_id + '/change_password/';
                window.open(url, '_self');
            }
            if (page == 'messages') {
                const user_id = document.getElementById('user_id').innerHTML
                const this_user_id = button.name.replace('messageTo','')
                redirect(page, user_id, this_user_id)
                Messenger('On');
                gg = 1
            }
            if (page == 'CloseControl') {
                Control('Off');
                gg = 1
            }
            if (page == 'CloseMessenger') {
                Messenger('Off');
                gg = 1
            }
            if (page == 'friend_request') {
                id = button.name
                classB = button.className
                if (classB == 'btn btn-primary') {
                    sendFriendRequest(id)
                }
                if (classB == 'btn btn-danger') {
                    cancelFriendRequest(id)
                }
                toggleButton(id, classB)
                gg = 1
            }
            if (page == 'send_message') {
                messagesSend();
                gg = 1
            }
            if (page == 'New') {
                url = window.location.origin + '/' + user_id + '/WorkingPaper/MODEL';
                window.open(url, '_self');
            }
            if (page == 'Save') {
                Save()
                gg = 1
            }
            if (page == 'Logout') {
                url = window.location.origin + '/logout';
                window.open(url, '_self');
            }
            home = [
                '',
                'Home',
            ]
            if (home.includes(page)) {
                page == 'Home'
            }
            if (page == 'Home') {
                try {
                    a = document.getElementById('Authenticated')
                    showPage(page)
                    gg = 1
                } catch {
                    url = window.location.origin + '/login/'
                    window.open(url, '_self');
                }
            }
            if (page == 'Posts') {
                PostsUrl()
            }
            profile = [
                'profile',
            ]
            if (profile.includes(page)) {
                redirect(page, user_id)
                gg = 1
            }
            if (gg < 1) {
                showPage(page);
                historyPush(page);
                Compile();
            }
        }
    }
}
