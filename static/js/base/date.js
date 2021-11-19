
// base/date.js

function date(date) {
    d = new Date(date)
    day = d.getDate();
    month = d.getMonth();
    year = d.getFullYear()
    d = new Date(year, month, day).toDateString()
    d = d.split(' ')
    d = d[1] + '. ' + d[2] + ', ' + d[3]
};

function datetime(datetime) {
    //
    date(datetime);
    //
    t = new Date(datetime);
    hours = t.getHours();
    if (hours > 12) {
        hours = hours - 12;
        z = 'p.m.';
    } else {
        z = 'a.m.';
    }
    minutes = t.getMinutes();
    //
    if (minutes.toString().length == 1) {
        minutes = '0' + minutes;
    }
    d = d + ', ' + hours + ':' + minutes + ' ' + z;
}
