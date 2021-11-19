
// posts/posts.js

// onScroll

window.onscroll = () => {
    var loading = document.getElementById('id_loading_spinner')
    if (loading.style.display == 'none') {
        //
        if (document.getElementById('Posts').style.display != 'none') {
            Posts_Offset = document.getElementsByClassName('post')[0].getElementsByClassName('φ')[0].offsetHeight * (parseInt(localStorage.counter) + 6);
            if (window.scrollY >= Posts_Offset) {
                counter = parseInt(localStorage.counter) + 10
                localStorage.setItem('counter', counter)
                localStorage.setItem('quantity', 10)
                load(url);
            }
        }
        if (document.getElementById('Entities').style.display != 'none') {
            Entities_Offset = parseInt(document.getElementsByClassName('Entity-main')[0].offsetHeight) * (parseInt(localStorage.entities_counter) + 6);
            if (window.scrollY >= Entities_Offset) {
                entities_counter = parseInt(localStorage.entities_counter) + 10
                localStorage.setItem('entities_counter', entities_counter)
                localStorage.setItem('entities_quantity', 10)
                entities_load(url, 'skip');
            }
        }
    }
};


// Posts

function Posts() {
    url = '/entities/'
    PostsUrl(url)
    localStorage.setItem('counter', 1);
    localStorage.setItem('quantity', 10);
    load(url)
}

function ClearPosts() {
    document.getElementById('main_posts').innerHTML = '';
}

function PostsUrl() {
    p = 0
    url = '/posts/'
    cc = '/'
    a = document.getElementById('Industry')
    a = a.options[a.selectedIndex];
    url = url + a.value + '/'
    if (a.value != 'any') {
        cc = a.innerHTML + '/'
    }
    g = document.getElementsByName('Industry_SEC')
    z = 0
    for(let i = 0; i < g.length; i++) {
        if (g[i].style.display == 'block') {
            a = g[i].getElementsByClassName('select')[0]
            a = a.options[a.selectedIndex];
            url = url + a.value + '/'
            if (a.value != 'any') {
                cc = cc + a.innerHTML + '/'
            }
            z = 1
        }
    }
    if (z == 0) {
        url = url + 'any' + '/'
    }
    a = document.getElementById('Period')
    a = a.options[a.selectedIndex];
    url = url + a.value + '/'
    if (a.value != 'any') {
        cc = cc + a.innerHTML + '/'
    }
    a = document.getElementById('WorkInProgress')
    a = a.options[a.selectedIndex];
    url = url + a.value + '/'
    if (a.value != 'any') {
        cc = cc + a.innerHTML + '/'
    }
    a = document.getElementById('Region')
    a = a.options[a.selectedIndex];
    url = url + a.value + '/'
    if (a.value != 'any') {
        cc = cc + a.innerHTML + '/'
    }
    a = document.getElementById('Order')
    a = a.options[a.selectedIndex];
    url = url + a.value + '/'
    if (a.value != 'any') {
        cc = cc + a.innerHTML + '/'
    }
    a = document.getElementById('Sort')
    a = a.options[a.selectedIndex];
    url = url + a.value + '/'
    if (a.value != 'any') {
        cc = cc + a.innerHTML + '/'
    }
    if (cc == '/') {
        cc = ''
    }
    document.getElementsByClassName('posts_search_criterias')[0].innerHTML = cc;
}

function load(url) {
    const loading = document.getElementById('id_loading_spinner');
    loading.style.display = 'block';
    counter = parseInt(localStorage.counter)
    quantity = parseInt(localStorage.quantity)
    const start = counter;
    var end = start + quantity - 1;
    url = url + start + '/' + end + '/'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            d = data.len
            if (d > 1) {
                a = d + ' results'
            } else {
                if (d == 0) {
                    a = 'No result'
                } else {
                    a = d + ' result'
                }
            }
            document.getElementsByClassName('posts_search_len')[0].innerHTML = a
            data.posts.forEach(add_post);
            LineChart();
            Puck();
            loading.style.display = 'none';
        });
};

function add_post(contents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    var Price = new Intl.NumberFormat("en-US", {
        format: "currency",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    const post = document.createElement('span');
    post.className = 'post';
    //
    date(contents.lastyear);
    lastyear = d;
    date(contents.secondlastyear);
    secondlastyear = d;
    date(contents.thirdlastyear);
    thirdlastyear = d;
    date(contents.fourthlastyear)
    fourthlastyear = d;
    //
    amendlastyear = contents.amendlastyear
    amendsecondlastyear = contents.amendsecondlastyear
    amendthirdlastyear = contents.amendthirdlastyear
    amendfourthlastyear = contents.amendfourthlastyear
    //
    datetime(contents.SecuritiesUpdate);
    securitiesupdate = 'Shares Price as of ' + d;
    //
    Opinion1 = contents.OpinionφLastYear
    if (Opinion1 == null) {
        Opinion1 = ''
    }
    Opinion2 = contents.OpinionφSecondLastYear
    if (Opinion2 == null) {
        Opinion2 = ''
    }
    Opinion3 = contents.OpinionφThirdLastYear
    if (Opinion3 == null) {
        Opinion3 = ''
    }
    Opinion4 = contents.OpinionφFourthLastYear
    if (Opinion4 == null) {
        Opinion4 = ''
    }
    Clock1 = contents.ClockφLastYear
    if (Clock1 == null) {
        Clock1 = ''
    } else {
        Clock1 = Clock1 + '%'
    }
    Clock2 = contents.ClockφSecondLastYear
    if (Clock2 == null) {
        Clock2 = ''
    } else {
        Clock2 = Clock2 + '%'
    }
    Clock3 = contents.ClockφThirdLastYear
    if (Clock3 == null) {
        Clock3 = ''
    } else {
        Clock3 = Clock3 + '%'
    }
    Clock4 = contents.ClockφFourthLastYear
    if (Clock4 == null) {
        Clock4 = ''
    } else {
        Clock4 = Clock4 + '%'
    }
    //
    Bridge1 = contents.BridgeφLastYear
    Bridge2 = contents.BridgeφSecondLastYear
    Bridge3 = contents.BridgeφThirdLastYear
    Bridge4 = contents.BridgeφFourthLastYear
    //
    IV1 = numUSD.format(contents.CommonSharesIntrinsicValueLastYear);
    IV2 = numUSD.format(contents.CommonSharesIntrinsicValueSecondLastYear);
    IV3 = numUSD.format(contents.CommonSharesIntrinsicValueThirdLastYear);
    IV4 = numUSD.format(contents.CommonSharesIntrinsicValueFourthLastYear);
    //
    MC1 = numUSD.format(contents.MarketCapitalizationLastYear);
    MC2 = numUSD.format(contents.MarketCapitalizationSecondLastYear);
    MC3 = numUSD.format(contents.MarketCapitalizationThirdLastYear);
    MC4 = numUSD.format(contents.MarketCapitalizationFourthLastYear);
    //
    iv1 = Price.format(contents.CommonShareIntrinsicValueLastYear);
    iv2 = Price.format(contents.CommonShareIntrinsicValueSecondLastYear);
    iv3 = Price.format(contents.CommonShareIntrinsicValueThirdLastYear);
    iv4 = Price.format(contents.CommonShareIntrinsicValueFourthLastYear);
    //
    price1 = Price.format(contents.CommonSharePriceLastYear);
    price2 = Price.format(contents.CommonSharePriceSecondLastYear);
    price3 = Price.format(contents.CommonSharePriceThirdLastYear);
    price4 = Price.format(contents.CommonSharePriceFourthLastYear);
    //
    shares1 = numUSD.format(contents.CommonSharesOutstandingLastYear);
    shares2 = numUSD.format(contents.CommonSharesOutstandingSecondLastYear);
    shares3 = numUSD.format(contents.CommonSharesOutstandingThirdLastYear);
    shares4 = numUSD.format(contents.CommonSharesOutstandingFourthLastYear);
    //
    post.id = contents.tradingSymbol;
    post.innerHTML = `
        {% include 'search/Post.html' %}
    `;
    document.querySelector('#main_posts').append(post);
};

function LineChartButton() {
    a = event.target.id
    a = a.replace('Button','')
    document.getElementById(a).style.display = 'block';
    a = a.replace('LineChart','')
    b = 'Opinion' + a
    document.getElementById(b).style.display = 'none';
    b = 'Share' + a
    document.getElementById(b).style.display = 'none';
    b = 'Comments' + a
    document.getElementById(b).style.display = 'none';
}

function OpinionButton() {
    a = event.target.id
    a = a.replace('Button','')
    document.getElementById(a).style.display = 'block';
    a = a.replace('Opinion','')
    b = 'LineChart' + a
    document.getElementById(b).style.display = 'none';
    b = 'Share' + a
    document.getElementById(b).style.display = 'none';
    b = 'Comments' + a
    document.getElementById(b).style.display = 'none';
}


// Entities

function Entities(search) {
    if (search != '') {
        search = search.toLowerCase()
        document.getElementById('entities_posts').innerHTML = ''
        showPage('Entities')
        historyPush('Entities')
        url = '/entities/' + search
        localStorage.setItem('entities_counter', 1);
        localStorage.setItem('entities_quantity', 10);
        entities_load(url, search)
    }
}

function entities_load(url, search) {
    const loading = document.getElementById('id_loading_spinner');
    loading.style.display = 'block';
    entities_counter = parseInt(localStorage.entities_counter)
    entities_quantity = parseInt(localStorage.entities_quantity)
    const start = entities_counter;
    var end = start + entities_quantity - 1;
    url = url + '/' + start + '/' + end
    fetch(url)
        .then(response => response.json())
        .then(data => {
            d = data.len
            if (d > 1) {
                a = d + ' results'
            } else {
                if (d == 0) {
                    a = 'No result'
                } else {
                    a = d + ' result'
                }
            }
            if (search != 'skip') {
                a = a + " for " + "<b><i>" + search + "</i></b>"
                document.getElementsByClassName('entities_search_len')[0].innerHTML = a
            }
            data.entities.forEach(add_entities_post);
            loading.style.display = 'none';
        });
};

function add_entities_post(contents) {
    const entities_post = document.createElement('div');
    try {
        entities_post.innerHTML = `
            {% include 'search/Entity.html' %}
        `;
    } catch {}
    document.querySelector('#entities_posts').append(entities_post);
};


