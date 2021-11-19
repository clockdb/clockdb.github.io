
// messenger/messenger.js

function messagesSend() {
    const messageInputDom = document.getElementById('id_chat_message_input');
    const message = messageInputDom.value;
    chatSocket.send(JSON.stringify({
        "command": "send",
        "message": message,
        "room": roomId
    }));
    messageInputDom.value = '';
}

function messageFrom(this_user_id) {
    const user_id = document.getElementById('user_id').innerHTML
    page = 'messages'
    redirect(page, user_id, this_user_id)
    Messenger('On');
}

function onSelectFriend(id){
    payload = {
        "csrfmiddlewaretoken": "{{ csrf_token }}",
        "user2_id": id,
    }
    $.ajax({
        type: 'POST',
        dataType: "json",
        url: "{% url 'create-or-return-private-chat' %}", // production
        data: payload,
        timeout: 5000,
        success: function(data) {
            //console.log("SUCCESS", data)
            if(data['response'] == "Successfully got the chat."){
                setupWebSocket(data['chatroom_id'])
            }
            else if(data['response'] != null){
                alert(data['response'])
            }
        },
        error: function(data) {
            console.error("ERROR...", data)
            alert("Something went wrong.")
        },
    });
    clearHighlightedFriend();
    highlightFriend(id);
    Messenger('On');
}

function closeWebSocket(){
    if(chatSocket != null){
        chatSocket.close()
        chatSocket = null
        clearChatLog()
        setPageNumber("1")
        disableChatLogScrollListener()
    }
}

function setupWebSocket(room_id){

    //console.log("setupWebSocket: " + room_id)

    roomId = room_id

    // close previous socket if one is open
    closeWebSocket()

    // Correctly decide between ws:// and wss://
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    var ws_path = ws_scheme + '://' + window.location.host + ":8001/chat/" + roomId + "/"; // production
    
    // console.log("Connecting to " + ws_path);
    chatSocket = new WebSocket(ws_path);

    // Handle incoming messages
    chatSocket.onmessage = function(message) {
        // Decode the JSON
        // console.log("Got chat websocket message " + message.data);
        //console.log("Got websocket message.");
        var data = JSON.parse(message.data);

        // display the progress bar?
        displayChatroomLoadingSpinner(data.display_progress_bar)

        // Handle errors (ClientError)
        if (data.error) {
            console.error(data.error + ": " + data.message)
            showClientErrorModal(data.message)
            return;
        }
        // Handle joining (Client perspective)
        if (data.join) {
            //console.log("Joining room " + data.join);
            getUserInfo()
            getRoomChatMessages()
            enableChatLogScrollListener()
        }
        // Handle leaving (client perspective)
        if (data.leave) {
            // do nothing
            //console.log("Leaving room " + data.leave);
        }

        // user info coming in from backend
        if(data.user_info){
            handleUserInfoPayload(data.user_info)
        }

        // Handle getting a message
        if (data.msg_type == 0 || data.msg_type == 1 || data.msg_type == 2) {
            appendChatMessage(data, false, true)
        }

        // new payload of messages coming in from backend
        if(data.messages_payload){
            handleMessagesPayload(data.messages, data.new_page_number)
        }
    };

    chatSocket.addEventListener("open", function(e){
        //console.log("ChatSocket OPEN")
        // join chat room
        if("{{request.user.is_authenticated}}"){
            chatSocket.send(JSON.stringify({
                "command": "join",
                "room": roomId
            }));
        }
    })

    chatSocket.onclose = function(e) {
        //console.log('Chat socket closed.');
    };

    chatSocket.onOpen = function(e){
        //console.log("ChatSocket onOpen", e)
    }

    chatSocket.onerror = function(e){
        //console.log('ChatSocket error', e)
    }

    if (chatSocket.readyState == WebSocket.OPEN) {
        //console.log("ChatSocket OPEN")
    } else if (chatSocket.readyState == WebSocket.CONNECTING){
        //console.log("ChatSocket connecting..")
    }
}

function getUserInfo(){
    chatSocket.send(JSON.stringify({
        "command": "get_user_info",
        "room_id": roomId,
    }));
}

function handleUserInfoPayload(user_info){
    document.getElementById("id_other_username").innerHTML = user_info['username']
    document.getElementById("id_other_user_profile_image").classList.remove("d-none")
    document.getElementById("id_user_info_container").href= "/" + user_info['id'] + '/profile/'
    preloadImage(user_info['profile_image'], "id_other_user_profile_image")
}

function showClientErrorModal(message){
    document.getElementById("id_client_error_modal_body").innerHTML = message
    document.getElementById("id_trigger_client_error_modal").click()
}

function appendChatMessage(data, maintainPosition, isNewMessage){
    messageType = data['msg_type']
    msg_id = data['msg_id']
    message = data['message']
    uName = data['username']
    user_id = data['user_id']
    profile_image = data['profile_image']
    timestamp = data['natural_timestamp']
    //console.log("append chat message: " + messageType)
    
    var msg = "";
    var username = ""

    // determine what type of msg it is
    switch (messageType) {
        case 0:
            // new chatroom msg
            username = uName + ": "
            msg = message + '\n'
            createChatMessageElement(msg, msg_id, username, profile_image, user_id, timestamp, maintainPosition, isNewMessage)
            break;
        case 1:
            // User joined room
            createConnectedDisconnectedElement(message, msg_id, profile_image, user_id)
            break;
        case 2:
            // User left room
            createConnectedDisconnectedElement(message, msg_id, profile_image, user_id)
            break;
        default:
            console.log("Unsupported message type!");
            return;
    }
}

function createChatMessageElement(msg, msg_id, username, profile_image, user_id, timestamp, maintainPosition, isNewMessage){
    var chatLog = document.getElementById("id_chat_log")

    var newMessageDiv = document.createElement("div")
    newMessageDiv.classList.add("d-flex")
    newMessageDiv.classList.add("flex-row")
    newMessageDiv.classList.add("message-container")

    var profileImage = document.createElement("img")
    profileImage.addEventListener("click", function(e){
        selectUser(user_id)
    })
    profileImage.classList.add("profile-image-messages")
    profileImage.classList.add("rounded-circle")
    profileImage.classList.add("img-fluid")
    profileImage.src = "static/clockdb/dummy_image.png/"
    var profile_image_id = "id_profile_image_" + msg_id
    profileImage.id = profile_image_id
    newMessageDiv.appendChild(profileImage)

    var div1 = document.createElement("div")
    div1.classList.add("d-flex")
    div1.classList.add("flex-column")

    var div2 = document.createElement("div")
    div2.classList.add("d-flex")
    div2.classList.add("flex-row")

    var usernameSpan = document.createElement("span")
    usernameSpan.innerHTML = username
    usernameSpan.classList.add("username-span-messages")
    usernameSpan.addEventListener("click", function(e){
        selectUser(user_id)
    })
    div2.appendChild(usernameSpan)

    var timestampSpan = document.createElement("span")
    timestampSpan.innerHTML = timestamp
    timestampSpan.classList.add("timestamp-span")
    timestampSpan.classList.add("d-flex")
    timestampSpan.classList.add("align-items-center")
    timestampSpan.addEventListener("click", function(e){
        selectUser(user_id)
    })
    div2.appendChild(timestampSpan)

    div1.appendChild(div2)

    var msgP = document.createElement("p")
    msgP.innerHTML = validateText(msg)
    msgP.style="line-break: normal;"
    div1.appendChild(msgP)

    newMessageDiv.appendChild(div1)

    if(isNewMessage){
        chatLog.insertBefore(newMessageDiv, chatLog.firstChild)
    }
    else{
        chatLog.appendChild(newMessageDiv)
    }
    
    if(!maintainPosition){
        chatLog.scrollTop = chatLog.scrollHeight
    }

    preloadImage(profile_image, profile_image_id)
}

function createConnectedDisconnectedElement(msg, msd_id, profile_image, user_id){
    var chatLog = document.getElementById("id_chat_log")

    var newMessageDiv = document.createElement("div")
    newMessageDiv.classList.add("d-flex")
    newMessageDiv.classList.add("flex-row")
    newMessageDiv.classList.add("message-container")

    var profileImage = document.createElement("img")
    profileImage.addEventListener("click", function(e){
        selectUser(user_id)
    })
    profileImage.classList.add("profile-image-messages")
    profileImage.classList.add("rounded-circle")
    profileImage.classList.add("img-fluid")
    profileImage.src = "static/clockdb/dummy_image.png/"
    var profile_image_id = "id_profile_image_" + msg_id
    profileImage.id = profile_image_id
    newMessageDiv.appendChild(profileImage)

    var usernameSpan = document.createElement("span")
    usernameSpan.innerHTML = msg
    usernameSpan.classList.add("username-span-messages")
    usernameSpan.addEventListener("click", function(e){
        selectUser(user_id)
    })
    newMessageDiv.appendChild(usernameSpan)

    chatLog.insertBefore(newMessageDiv, chatLog.firstChild)

    preloadImage(profile_image, profile_image_id)
}

function setPageNumber(pageNumber){
    document.getElementById("id_page_number").innerHTML = pageNumber
}

function clearChatLog(){
    document.getElementById("id_chat_log").innerHTML = ""
}

function setPaginationExhausted(){
    setPageNumber("-1")
}

function getRoomChatMessages(){
    var pageNumber = document.getElementById("id_page_number").innerHTML
    if(pageNumber != "-1"){
        setPageNumber("-1") // loading in progress
        chatSocket.send(JSON.stringify({
            "command": "get_room_chat_messages",
            "room_id": roomId,
            "page_number": pageNumber,
        }));
    }
}

function handleMessagesPayload(messages, new_page_number){
    if(messages != null && messages != "undefined" && messages != "None"){
        setPageNumber(new_page_number)
        messages.forEach(function(message){
            appendChatMessage(message, true, false)
        })
    }
    else{
        setPaginationExhausted() // no more messages
    }
}

function selectUser(user_id){
    // Weird work-around for passing arg to url
    //var win = window.open(url, "_blank")
    //win.focus()
}

function chatLogScrollListener(e) {
    var chatLog = document.getElementById("id_chat_log")
    if ((Math.abs(chatLog.scrollTop) + 2) >= (chatLog.scrollHeight - chatLog.offsetHeight)) {
        getRoomChatMessages()
    }
}

function enableChatLogScrollListener(){
    document.getElementById("id_chat_log").addEventListener("scroll", chatLogScrollListener);
}

function disableChatLogScrollListener(){
    document.getElementById("id_chat_log").removeEventListener("scroll", chatLogScrollListener)
}

function displayChatroomLoadingSpinner(isDisplayed){
    //console.log("displayChatroomLoadingSpinner: " + isDisplayed)
    var spinner = document.getElementById("id_chatroom_loading_spinner")
    if(isDisplayed){
        spinner.style.display = "block"
    }
    else{
        spinner.style.display = "none"
    }
}

function highlightFriend(userId){
    // select new friend
    document.getElementById("id_friend_container_" + userId).style.background = "#f2f2f2"
}

function clearHighlightedFriend(){
    {% if m_and_f %}
        {% for x in m_and_f %}
            document.getElementById("id_friend_container_{{x.friend.id}}").style.background = ""
        {% endfor %}
    {% endif %}

    // clear the profile image and username of current chat
    document.getElementById("id_other_user_profile_image").classList.add("d-none")
    document.getElementById("id_other_user_profile_image").src = "/static/clockdb/dummy_image.png/"
    document.getElementById("id_other_username").innerHTML = ""
}

function messageInputFocus() {
    a = document.getElementById('id_chat_message_input')
    a.focus()
}


