
// base/tabulation.js
console.log('base/tabulation.js')

// tabulation key
document.addEventListener('keydown', (event) => {
    keys = [9]
    if (keys.includes(event.keyCode)) {
        a = event.target.id
        //
        if (a == 'SearchBar') {
            event.preventDefault();
            b = document.getElementById('SearchUsersBar')
            b.select()
            document.getElementsByClassName('HeaderMenu')[0].scrollTo(9999, 0)
        }
        if (a == 'SearchUsersBar') {
            event.preventDefault();
            b = document.getElementById('SearchBar')
            b.select()
            document.getElementsByClassName('HeaderMenu')[0].scrollTo(0, 9999)
        }
    }
})