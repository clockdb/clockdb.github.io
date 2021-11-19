
// files/save.js
console.log('files/save.js')

function Save() {
    //
    var FileData = [  
        //
        // settings
        ['UnhideCheckbox', document.getElementById('UnhideCheckbox').checked, 'Checkbox'],
        ['OpenEditor', document.getElementById('OpenEditor').checked, 'Checkbox'],
    ];  
    RowClass = [
        'Checkbox',
        'ClockRate',
        'Context',
        'ContextDate',
        'Date',
        'Header',
        'Opinion',
        'OpinionThree',
        'OpinionFour',
        'Price',
        'Proportion',
        'REF',
        'ShareholdersEquityBeginningBalance',
        'TrialBalance',
    ]
    ClockClass = [
        'Opinion',
        'OpinionFour',
        'ShareholdersEquityBeginningBalance',
        'TrialBalance',
    ]
    FourColumns = [
        'OpinionFour',
    ]
    ThreeColumns = [
        'OpinionThree',
    ]
    rows = document.querySelectorAll('tr');
    FileDataExtension = []
    //
    for(let i = 0; i < rows.length; i++) {
        trid = rows[i].id
        trclass = rows[i].className
        if(RowClass.includes(trclass)) {
            row = trid.slice(0, -3);
            input1 = row + 1
            input2 = row + 2
            input3 = row + 3
            input4 = row + 4
            input5 = row + 5
            input6 = row + 6
            checkbox1 = row + 'Checkbox'
            checkbox2 = row + 'Checkbox' + 2
            a = document.getElementById(input1).value;
            b = document.getElementById(input2).value;
            c = document.getElementById(input3).value;
            d = document.getElementById(input4).value;
            e = document.getElementById(input5).value;
            f = document.getElementById(input6).value;
            try {
                g = document.getElementById(checkbox1).checked;
                h = document.getElementById(checkbox2).checked;
            } catch {}
            if (ClockClass.includes(trclass)) {
                a = parseInt(a.replaceAll(/,/g, ''));
                b = parseInt(b.replaceAll(/,/g, ''));
                c = parseInt(c.replaceAll(/,/g, ''));
                d = parseInt(d.replaceAll(/,/g, ''));
                e = parseInt(e.replaceAll(/,/g, ''));
                f = parseInt(f.replaceAll(/,/g, ''));
            }
            a = [input1, a, trclass]
            b = [input2, b, trclass]
            c = [input3, c, trclass]
            d = [input4, d, trclass]
            e = [input5, e, trclass]
            f = [input6, f, trclass]
            try {
                g = [checkbox1, g, 'Checkbox']
                h = [checkbox2, h, 'Checkbox']
            } catch {}
            FileDataExtension.push(a)
            FileDataExtension.push(b)
            FileDataExtension.push(c)
            try {
                FileDataExtension.push(g)
                FileDataExtension.push(h)
            } catch {}

            if (FourColumns.includes(trclass)) {
                FileDataExtension.push(d)
            } else {
                if (ThreeColumns.includes(trclass)) {
                } else {
                    FileDataExtension.push(d)
                    FileDataExtension.push(e)
                    FileDataExtension.push(f)
                };
            };
        };
    };
    ReferenceFileDataExtension = []
    Rows = document.getElementsByClassName('Reference')
        for (let i = 0; i < Rows.length; i++) {
            try {
                //
                a = Rows[i].id.replace('.Row', '.1');
                b = Rows[i].id.replace('.Row', '.2');
                c = Rows[i].id.replace('.Row', '.3');
                d = Rows[i].id.replace('.Row', '.4');
                e = Rows[i].id.replace('.Row', '.5');
                f = Rows[i].id.replace('.Row', '.6');
                g = Rows[i].id.replace('.Row', '.7');
                h = Rows[i].id.replace('.Row', '.8');
                //
                aa = document.getElementById(a).value;
                bb = document.getElementById(b).value;
                cc = document.getElementById(c).value;
                dd = document.getElementById(d).value;
                ee = document.getElementById(e).value;
                ff = document.getElementById(f).value;
                gg = document.getElementById(g).value;
                hh = document.getElementById(h).value;
                //
                a = [Rows[i].id, aa, 'Reference', bb, cc, dd, ee, ff, gg, hh]
                //
                ReferenceFileDataExtension.push(a)
            } catch {}
        }
    //
    var db = 'Reference|Value|Type|FileReference|Status|WorkInProgress|Prepared|DatePrepared|Reviewed|DateReviewed\n';  

    FileData.forEach(function(row) {  
        db += row.join('|');  
        db += "\n";  
    });  
    FileDataExtension.forEach(function(row) {  
        db += row.join('|');  
        db += "\n";  
    });  
    ReferenceFileDataExtension.forEach(function(row) {  
        db += row.join('|');  
        db += "\n";  
    });  
    var hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(db);  
    hiddenElement.target = '_blank';  
    //
    var d = document.getElementById('ContextDate1').value
    var d = new Date(d)
    //
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    //
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var formateddate = year + '-' + month + '-' + day;
    //
    b = document.getElementById('Amend1').value
    if (b == "") {
        a = ""
    }
    //
    var file_name = document.getElementById('TradingSymbol1').value + " " + formateddate + a + b + ".db"
    hiddenElement.download = file_name;
    hiddenElement.click();
}
