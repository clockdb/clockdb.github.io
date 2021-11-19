// base/display.js

function DisplayWorkingPaper() {
    for (let i = 0; i < document.querySelectorAll('.Clock').length; i++) {
        var numUSD = new Intl.NumberFormat("en-US", {
            format: "number",
        });
        var m = document.getElementsByClassName("Clock")[i].value;
        document.getElementsByClassName('Clock')[i].value = numUSD.format(m);
    };
    for (let i = 0; i < document.querySelectorAll('.Proportion').length; i++) {
            var numUSD = new Intl.NumberFormat("en-US", {
                format: "number",
                minimumFractionDigits: 1,
                maximumFractionDigits: 1
            });
            var m = document.getElementsByClassName("Proportion")[i].value;
            document.getElementsByClassName('Proportion')[i].value = numUSD.format(m);
    };
    for (let i = 0; i < document.querySelectorAll('.ClockRate').length; i++) {
            var numUSD = new Intl.NumberFormat("en-US", {
                style: 'percent',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            var m = document.getElementsByClassName("ClockRate")[i].value;
            document.getElementsByClassName('ClockRate')[i].value = numUSD.format(m);
    };
    for (let i = 0; i < document.querySelectorAll('.Price').length; i++) {
            var numUSD = new Intl.NumberFormat("en-US", {
                format: "currency",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            var m = document.getElementsByClassName("Price")[i].value;
            document.getElementsByClassName('Price')[i].value = numUSD.format(m);
    };
};

function FormatCell() {
    var Clock = new Intl.NumberFormat("en-US", {
        format: "number",
    });
    var Proportion = new Intl.NumberFormat("en-US", {
        format: "number",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
    var ClockRate = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    var Price = new Intl.NumberFormat("en-US", {
        format: "currency",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    if (event.target.className == 'Clock') {
        var m = parseInt(event.target.value.replaceAll(/,/g, ''));
        document.getElementById(event.target.id).value = Clock.format(m);
    }
    if (event.target.className == 'Proportion') {
        var m = event.target.value;
        document.getElementById(event.target.id).value = Proportion.format(m);
    }
    if (event.target.className == 'ClockRate') {
        var m = event.target.value.replace('%','') / 100;
        document.getElementById(event.target.id).value = ClockRate.format(m);
    }
    if (event.target.className == 'Price') {
        var m = event.target.value;
        document.getElementById(event.target.id).value = price.format(m);
    }
}
