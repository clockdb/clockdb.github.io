
// friend/friend.js
console.log('friend/friend.js')

function onFriendRequestAccepted(){
    location.reload();
}

function onFriendRequestDeclined(){
    location.reload();
}

function triggerAcceptFriendRequest(friend_request_id){
    acceptFriendRequest(friend_request_id, onFriendRequestAccepted)
}

function triggerDeclineFriendRequest(friend_request_id){
    declineFriendRequest(friend_request_id, onFriendRequestDeclined)
}

function onFriendRemoved(){
    location.reload();
}

function onFriendRequestAccepted(){
    location.reload();
}

function onFriendRequestDeclined(){
    location.reload();
}

function sendFriendRequest(id){
    payload = {
        "csrfmiddlewaretoken": "{{ csrf_token }}",
        "receiver_user_id": id,
    }
    $.ajax({
        type: 'POST',
        dataType: "json",
        url: "{% url 'friend-request' %}",
        timeout: 5000,
        data: payload,
        success: function(data) {
            //console.log("SUCCESS", data)
            if(data['response'] == "Friend request sent."){
                // ui is updated
            }
            else if(data['response'] != null){
                alert(data['response'])
            }
        },
        error: function(data) {
            console.error("ERROR...", data)
            alert("Something went wrong.")
        },
        complete: function(data){}
    });
}

function cancelFriendRequest(id){
    payload = {
        "csrfmiddlewaretoken": "{{ csrf_token }}",
        "receiver_user_id": id,
    }
    $.ajax({
        type: 'POST',
        dataType: "json",
        url: "{% url 'friend-request-cancel' %}",
        data: payload,
        timeout: 5000,
        success: function(data) {
            //console.log("SUCCESS", data)
            if(data['response'] == "Friend request canceled."){
                // ui is updated
            }
            else if(data['response'] != null){
                alert(data['response'])
            }
        },
        error: function(data) {
            console.error("ERROR...", data)
            alert("Something went wrong.")
        },
        complete: function(data){}
    });
}

try {
    var removeFriendBtn = document.getElementById("id_unfriend_btn")
    if (removeFriendBtn != null){
        removeFriendBtn.addEventListener("click", function(){
            removeFriend("{{id}}", onFriendRemoved)
        })
    }
} catch {}

function removeFriend(id, uiUpdateFunction){
    payload = {
        "csrfmiddlewaretoken": "{{ csrf_token }}",
        "receiver_user_id": id,
    }
    $.ajax({
        type: 'POST',
        dataType: "json",
        timeout: 5000,
        url: "{% url 'remove-friend' %}",
        data: payload,
        success: function(data) {
            //console.log("SUCCESS", data)
            if(data.response == "Successfully removed that friend."){
                // UI gets updated
            }
            else if(data.response != null){
                alert(data.response)
            }
        },
        error: function(data) {
            console.error("ERROR...", data)
            alert("Something went wrong." + data)
        },
        complete: function(data){
            uiUpdateFunction()
        }
    });
}

function triggerAcceptFriendRequest(friend_request_id){
    acceptFriendRequest(friend_request_id, onFriendRequestAccepted)
}

function acceptFriendRequest(friend_request_id, uiUpdateFunction){
    var url = "{% url 'friend-request-accept' friend_request_id=53252623623632623 %}".replace("53252623623632623", friend_request_id)
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: url,
        timeout: 5000,
        success: function(data) {
            //console.log("SUCCESS", data)
            if(data['response'] == "Friend request accepted."){
                // ui is updated
            }
            else if(data['response'] != null){
                alert(data['response'])
            }
        },
        error: function(data) {
            console.error("ERROR...", data)
            alert("Something went wrong: " + data)
        },
        complete: function(data){
            uiUpdateFunction()
        }
    });
}

function triggerDeclineFriendRequest(friend_request_id){
    declineFriendRequest(friend_request_id, onFriendRequestDeclined)
}

function declineFriendRequest(friend_request_id, uiUpdateFunction){
    var url = "{% url 'friend-request-decline' friend_request_id=53252623623632623 %}".replace("53252623623632623", friend_request_id)
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: url,
        timeout: 5000,
        success: function(data) {
            //console.log("SUCCESS", data)
            if(data['response'] == "Friend request declined."){
                // ui is updated
            }
            else if(data['response'] != null){
                alert(data['response'])
            }
        },
        error: function(data) {
            console.error("ERROR...", data)
            alert("Something went wrong: " + data)
        },
        complete: function(data){
            uiUpdateFunction()
        }
    });
}
    
function friendRequestButtonsOnStart() {
    FR = "{{ friends_requests }}"
    FR = FR.replace('[','')
    FR = FR.replace(']','')
    i = 0
    id = 0
    while (id != undefined) {
        try {
            id = FR.split(', ')[i]
            document.getElementsByName(id)[0].innerHTML = 'Cancel Friend Request';
            document.getElementsByName(id)[0].id = 'id_cancel_friend_request_btn_profiles';
            document.getElementsByName(id)[0].className = 'btn btn-danger';
            document.getElementsByName(id)[1].innerHTML = 'Cancel Friend Request';
            document.getElementsByName(id)[1].id = 'id_cancel_friend_request_btn_profiles';
            document.getElementsByName(id)[1].className = 'btn btn-danger';
        } catch {}
        i = i + 1
    }
}
