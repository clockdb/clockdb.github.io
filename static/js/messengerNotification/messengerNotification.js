
// messengerNotification/messengerNotification.js

setOnChatNotificationScrollListener()
onChatNotificationsPaginationTriggerListener()

const CHAT_NOTIFICATION_INTERVAL = 4000
var chatCachedNotifList = new List([])

function submitNewChatNotificationToCache(notification){
    var result = chatCachedNotifList.filter(function(n){ 
        return n['notification_id'] === notification['notification_id']
    })
    // This notification does not already exist in the list
    if(result.length == 0){
        chatCachedNotifList.push(notification)

        // append to top of list
        appendTopChatNotification(notification)
    }
    // This notification already exists in the list
    else{
        // find the div and update it.
        refreshChatNotificationsList(notification)
    }
}

function submitChatNotificationToCache(notification){
    var result = chatCachedNotifList.filter(function(n){ 
        return n['notification_id'] === notification['notification_id']
    })
    // This notification does not already exist in the list
    if(result.length == 0){
        chatCachedNotifList.push(notification)

        // append to bottom of list
        appendBottomChatNotification(notification)
    }
    // This notification already exists in the list
    else{
        // find the div and update it.
        refreshChatNotificationsList(notification)
    }
}

function handleNewChatNotificationsData(notifications){
    if(notifications.length > 0){
        clearNoChatNotificationsCard()
        notifications.forEach(notification => {

            submitNewChatNotificationToCache(notification)

            setChatNewestTimestamp(notification['timestamp'])
        })
    }
}

function setChatNewestTimestamp(timestamp){
    element = document.getElementById("id_chat_newest_timestamp")
    current = element.innerHTML
    if(Date.parse(timestamp) > Date.parse(current)){
        element.innerHTML = timestamp
    }
    else if(current == "" || current == null || current == "undefined"){
        element.innerHTML = timestamp
    }
    //console.log("setChatNewestTimestamp: " + element.innerHTML)
}

function setupChatDropdownHeader(){
    var notificationContainer = document.getElementById("id_chat_notifications_container")

    if(notificationContainer != null){

        var div = document.createElement("div")
        div.classList.add("chat-dropdown-header", "d-flex", "flex-row", "justify-content-end", "m-auto", "align-items-end")

    }
}

function chatRedirect(url){
    window.location.href = url
}

function setupChatNotificationsMenu(){
    var notificationContainer = document.getElementById("id_chat_notifications_container")

    if(notificationContainer != null){
        setupChatDropdownHeader()

        card = createChatNotificationCard("id_no_chat_notifications")

        var div = document.createElement("div")
        div.classList.add("d-flex", "flex-row", "align-items-start")

        span = document.createElement("span")
        span.classList.add("align-items-start", "pt-1", "m-auto")
        span.innerHTML = "You have no notifications."
        div.appendChild(span)
        card.appendChild(div)
        notificationContainer.appendChild(card)

        setChatNotificationsCount([])
    }
}

function clearNoChatNotificationsCard(){
    var element = document.getElementById("id_no_chat_notifications")
    if(element != null && element != "undefined"){
        document.getElementById("id_chat_notifications_container").removeChild(element)
    }
}

function createChatNotificationCard(cardId){
    var card = document.createElement("div")
    if(cardId != "undefined"){
        card.id = cardId
    }
    card.classList.add("d-flex", "flex-column", "align-items-start", "chat-card","p-4")
    card.style = "width: 100%"
    return card
}

function createChatProfileImageThumbnail(notification){
    img = document.createElement("img")
    img.classList.add("notification-thumbnail-image", "img-fluid", "rounded-circle", "mr-2")
    img.src = notification['from']['image_url']
    img.id = assignChatImgId(notification['notification_id'])
    return img
}

function createChatTimestampElement(notification){
    var timestamp = document.createElement("p")
    timestamp.classList.add("small", "pt-2", "timestamp-text")
    timestamp.innerHTML = notification['natural_timestamp']
    timestamp.id = assignChatTimestampId(notification)
    return timestamp
}

function createUnreadChatRoomMessagesElement(notification){
    card = createChatNotificationCard()
    card.id = assignChatCardId(notification)
    card.addEventListener("click", function(){
        //chatRedirect(notification['actions']['redirect_url'])
        user_id = document.getElementById('user_id').innerHTML
        a = notification['from'].image_url
        a = a.replace(window.location.origin,'')
        this_user_id = a.split('/')[3]
        redirect('messages', user_id, this_user_id)
        Messenger('On');
    })

    var div1 = document.createElement("div")
    div1.classList.add("d-flex", "flex-row", "align-items-start")
    div1.id = assignChatDiv1Id(notification)

    img = createChatProfileImageThumbnail(notification)
    img.id = assignChatImgId(notification)
    div1.appendChild(img)

    var div2 = document.createElement("div")
    div2.classList.add("d-flex", "flex-column")
    div2.id = assignChatDiv2Id(notification)
    
    var title = document.createElement("span")
    title.classList.add("align-items-start")
    title.innerHTML = notification['from']['title']
    title.id = assignChatTitleId(notification)
    div2.appendChild(title)

    var chatRoomMessage = document.createElement("span")
    chatRoomMessage.id = assignChatroomMessageId(notification)
    chatRoomMessage.classList.add("align-items-start", "pt-1", "small", "notification-chatroom-msg")
    if(notification['verb'].length > 50){
        chatRoomMessage.innerHTML = notification['verb'].slice(0, 50) + "..."
    }
    else{
        chatRoomMessage.innerHTML = notification['verb']
    }
    div2.appendChild(chatRoomMessage)
    div1.appendChild(div2)
    card.appendChild(div1)
    card.appendChild(createChatTimestampElement(notification))
    return card
}

function appendTopChatNotification(notification){
    switch(notification['notification_type']) {

        case "UnreadChatRoomMessages":
            chatNotificationContainer = document.getElementById("id_chat_notifications_container")
            card = createUnreadChatRoomMessagesElement(notification)

            if(chatNotificationContainer.childNodes.length > 2){
                // Append as the SECOND child. First child is the "go to chatroom" button
                // var index = chatNotificationContainer.childNodes.length - 1
                var index = 2
                chatNotificationContainer.insertBefore(card, chatNotificationContainer.childNodes[index]);
            }
            else {
                chatNotificationContainer.appendChild(card)
            }
            
            break;

        default:
            // code block
    }
}

function appendBottomChatNotification(notification){

    switch(notification['notification_type']) {

        case "UnreadChatRoomMessages":
            chatNotificationContainer = document.getElementById("id_chat_notifications_container")
            card = createUnreadChatRoomMessagesElement(notification)
            chatNotificationContainer.appendChild(card)
            break;

        default:
            // code block
    }
}

function handleChatNotificationsData(notifications, new_page_number){
    if(notifications.length > 0){
        clearNoChatNotificationsCard()
        
        notifications.forEach(notification => {

            submitChatNotificationToCache(notification)

            setChatNewestTimestamp(notification['timestamp'])
        })
        setChatPageNumber(new_page_number)
    }
}

function refreshChatNotificationsList(notification){
    notificationContainer = document.getElementById("id_chat_notifications_container")

    if(notificationContainer != null){
        divs = notificationContainer.childNodes

        divs.forEach(function(card){
            // card
            if(card.id == ("id_notification_" + notification['notification_id'])){
                
                if(notification['notification_type'] == "UnreadChatRoomMessages"){
                    refreshUnreadChatRoomMessagesCard(card, notification)
                }
            }
        })
    }
}

function refreshUnreadChatRoomMessagesCard(card, notification){

    card.childNodes.forEach(function(element){

        // DIV1
        if(element.id == ("id_chat_div1_" + notification['notification_id'])){
            element.childNodes.forEach(function(child){

                // DIV2
                if(child.id == ("id_chat_div2_" + notification['notification_id'])){
                    child.childNodes.forEach(function(nextChild){
                        if(nextChild.id == ("id_chat_title_" + notification['notification_id'])){
                            // found title
                            nextChild.innerHTML = notification['from']['title']
                        }
                        if(nextChild.id == ("id_chat_message_" + notification['notification_id'])){
                            // found chat message
                            if(notification['verb'].length > 50){
                                nextChild.innerHTML = notification['verb'].slice(0, 50) + "..."
                            }
                            else{
                                nextChild.innerHTML = notification['verb']
                            }
                        }
                    })
                }
            })
        }

        // TIMESTAMP
        if (element.id == ("id_timestamp_" + notification['notification_id'])){
            element.innerHTML = notification['natural_timestamp']
        }
    })
}

function setChatPaginationExhausted(){
    setChatPageNumber("-1")
}

function setChatPageNumber(pageNumber){
    document.getElementById("id_chat_page_number").innerHTML = pageNumber
}

function onChatNotificationsPaginationTriggerListener(){
    window.onscroll = function(ev) {
        // because of rounding we need to add 2. 1 might be OK but I'm using 2.
        if ((window.innerHeight + window.scrollY + 2) >= document.body.scrollHeight) {
            getNextChatNotificationsPage()
        }
    };
}

function setOnChatNotificationScrollListener(){
    var menu = document.getElementById("id_chat_notifications_container")
    if(menu != null ){
        menu.addEventListener("scroll", function(e){

            if ((menu.scrollTop) >= (menu.scrollHeight - menu.offsetHeight)) {
                getNextChatNotificationsPage()
            }
        });
    }
    
}

function setChatNotificationsCount(count){
    var countElement = document.getElementById("id_chat_notifications_count")
    if(count > 0){
        countElement.style.display = "contents"
        countElement.innerHTML = count
    }
    else{
        countElement.style.background = "transparent"
        countElement.style.display = "none"
    }
}

function getUnreadChatNotificationsCount(){
    if("{{request.user.is_authenticated}}"){
        notificationSocket.send(JSON.stringify({
            "command": "get_unread_chat_notifications_count",
        }));
    }
}

function getNextChatNotificationsPage(){
    var pageNumber = document.getElementById("id_chat_page_number").innerHTML
    // -1 means exhausted or a query is currently in progress
    if("{{request.user.is_authenticated}}" && pageNumber != "-1"){
        notificationSocket.send(JSON.stringify({
            "command": "get_chat_notifications",
            "page_number": pageNumber,
        }));
    }
}

function getNewChatNotifications(){
    newestTimestamp = document.getElementById("id_chat_newest_timestamp").innerHTML
    //console.log("NEWEST TS: " + newestTimestamp)
    if("{{request.user.is_authenticated}}"){
        notificationSocket.send(JSON.stringify({
            "command": "get_new_chat_notifications",
            "newest_timestamp": newestTimestamp,
        }));
    }
}

function getFirstChatNotificationsPage(){
    if("{{request.user.is_authenticated}}"){
        notificationSocket.send(JSON.stringify({
            "command": "get_chat_notifications",
            "page_number": "1",
        }));
        getUnreadChatNotificationsCount()
    }
}

function startChatNotificationService(){
    if("{{request.user.is_authenticated}}" == "True"){
        setInterval(getNewChatNotifications, CHAT_NOTIFICATION_INTERVAL)
        setInterval(getUnreadChatNotificationsCount, CHAT_NOTIFICATION_INTERVAL)
    }
}

startChatNotificationService()

function assignChatDiv1Id(notification){
    return "id_chat_div1_" + notification['notification_id']
}

function assignChatImgId(notification){
    return "id_chat_img_" + notification['notification_id']
}

function assignChatTitleId(notification){
    return "id_chat_title_" + notification['notification_id']
}

function assignChatroomMessageId(notification){
    return "id_chat_message_" + notification['notification_id']
}

function assignChatDiv2Id(notification){
    return "id_chat_div2_" + notification['notification_id']
}

function assignChatTimestampId(notification){
    return "id_timestamp_" + notification['notification_id']
}

function assignChatCardId(notification){
    return "id_notification_" + notification['notification_id']
}

function setChatInitialTimestamp(){
    // ('%Y-%m-%d %H:%M:%S.%f')
    var today = new Date();
    var date = today.getFullYear() + "-01-01 01:00:00.000000"
    document.getElementById("id_chat_newest_timestamp").innerHTML = date
}

setChatInitialTimestamp() 

var chatSocket = null;
var roomId = null;

function ChatMessagesAndNotificationsOnStart(){
    {% if m_and_f %}
        onSelectFriend("{{m_and_f.0.friend.id}}")
    {% endif %}
    {% for x in m_and_f %}
        preloadImage("{{x.friend.profile_image.url|safe}}", "id_friend_img_{{x.friend.id}}")
    {% endfor %}
}
