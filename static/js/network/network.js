
// network/network.js
console.log('network/network.js')

function Network(search) {
    var search = search.toLowerCase()
    showPage('Network')
    historyPush('Network')
    var network = document.getElementsByClassName('profile-container')
    for(let i = 0; i < network.length; i++) {
        r = '';
        profile = network[i].getElementsByClassName('card-title')[0]
        c = profile.innerHTML
        c = c.toLowerCase()
        test = c.includes(search)
        if (test == false) {
            r = 'none';
        }
        c = profile.parentElement.parentElement.parentElement.parentElement
        //
        c.style.display = r
    }
}   