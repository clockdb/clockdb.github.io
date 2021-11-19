
// op/rollover.js

function Rollover() {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    Save();
    var d = document.getElementById('ContextDate1').value
    d = new Date(d)
    day = d.getDate();
    month = d.getMonth();
    year = d.getFullYear() + 1
    d = new Date(year, month, day).toDateString()
    d = d.split(' ')
    d = d[1] + '. ' + d[2] + ', ' + d[3]
    document.getElementById('ContextDate6').value = document.getElementById('ContextDate5').value
    document.getElementById('ContextDate5').value = document.getElementById('ContextDate4').value
    document.getElementById('ContextDate4').value = document.getElementById('ContextDate3').value
    document.getElementById('ContextDate3').value = document.getElementById('ContextDate2').value
    document.getElementById('ContextDate2').value = document.getElementById('ContextDate1').value
    document.getElementById('ContextDate1').value = d
    //
    rows = document.querySelectorAll('tr');
    //
    RowClass = [
        'Date',
        'Clock',
        'ClockRate',
        'Context',
        'Opinion',
        'OpinionThree',
        'OpinionFour',
        'Price',
        'Proportion',
        'TrialBalance',
        'ShareholdersEquityBeginningBalance',
    ]
    //
    for(let i = 0; i < rows.length; i++) {
        trid = rows[i].id
        trclass = rows[i].className
        if(RowClass.includes(trclass)) {
            row = trid.slice(0, -3);
            //
            input1 = row + 1
            input2 = row + 2
            input3 = row + 3
            input4 = row + 4
            input5 = row + 5
            input6 = row + 6
            //
            if (trclass == 'OpinionFour') {
            } else {
                document.getElementById(input6).value = document.getElementById(input5).value;
                document.getElementById(input5).value = document.getElementById(input4).value;
            }
            if (trclass == 'OpinionThree') {
            } else {
                document.getElementById(input4).value = document.getElementById(input3).value;
                document.getElementById(input3).value = document.getElementById(input2).value;
                document.getElementById(input2).value = document.getElementById(input1).value;
            }
            try {
                var a = parseInt(document.getElementById(input1).value.replaceAll(/,/g, ''));
            } catch {}
            if (Math.abs(a) > 1) {
                document.getElementById(input1).value = 0
            }
            var a = document.getElementById(trid).className
            //
            if (a == 'Context') {
                document.getElementById(input1).value = '';
            }
            if (a == 'Date') {
                document.getElementById(input1).value = '';
            }
            if (a == 'ShareholdersEquityBeginningBalance') {
                b = input1.replace('TrialBalance','')
                b = document.getElementById(b).value.replaceAll(/,/g, '');
                document.getElementById(input1).value = numUSD.format(-b);
            }
        }
    };
    Compile();
};