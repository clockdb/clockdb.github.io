// files/open.js
console.log('files/open.js')

// Open File Name

function OpenFileName() {
    a = document.getElementById('Upload').files[0].name
    document.getElementById('OpenFileName').innerHTML = a;
    document.getElementById('UploadConfirm').style.display = 'block';
}

// Open

function UploadConfirm() {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    document.getElementById('UnhideCheckbox').checked = true
    CheckUnhideCheckbox();
    try {
        var list = document.getElementById('FilesDetails');
        list.innerHTML = '';
        Rows = document.getElementsByClassName('Reference');
        Row = 1
        Papa.parse(document.getElementById('Upload').files[0], 
            {
            download: true,
            header: true,
            skipEmptyLines: true, 
            complete: function(results) {
                for (var k in results.data) {
                    var a = results.data[k].Value
                    var b = results.data[k].Reference
                    var c = results.data[k].Type
                    var Reference = results.data[k].FileReference
                    var Status = results.data[k].Status
                    var WorkInProgress = results.data[k].WorkInProgress
                    var Prepared = results.data[k].Prepared
                    var DatePrepared = results.data[k].DatePrepared
                    var Reviewed = results.data[k].Reviewed
                    var DateReviewed = results.data[k].DateReviewed
                    if (a == 'NaN') {
                        a = '';
                    }
                    if (c == 'Checkbox') {
                        if (a == 'true') {
                            document.getElementById(b).checked = true;
                            document.getElementById(b).style.visibility = 'visible';
                        } else {}
                    }
                    if (c == 'ClockRate') {
                        document.getElementById(b).value = a;
                    }
                    if (c == 'Context') {
                        document.getElementById(b).value = a;
                    }
                    if (c == 'ContextDate') {
                        document.getElementById(b).value = a;
                    }
                    if (c == 'Date') {
                        document.getElementById(b).value = a;
                    }
                    if (c == 'Directory') {
                        document.getElementById(b).value = a;
                    }
                    if (c == 'Header') {
                        document.getElementById(b).value = a;
                    }
                    if (c == 'Opinion') {
                        document.getElementById(b).value = numUSD.format(a);
                    }
                    if (c == 'OpinionThree') {
                        document.getElementById(b).value = numUSD.format(a);
                    }
                    if (c == 'OpinionFour') {
                        document.getElementById(b).value = numUSD.format(a);
                    }
                    if (c == 'Proportion') {
                        document.getElementById(b).value = a;
                    }
                    if (c == 'Price') {
                        document.getElementById(b).value = a;
                    }
                    if (c == 'REF') {
                        document.getElementById(b).value = a;
                    }
                    if (c == 'Reference') {
                        var tr = document.createElement('tr');
                        tr.className = "Reference"
                        var r = "FileProperty" + Row;
                        tr.id = r + '.Row'
                        var name = a;
                        var b = 1
                        AddFile(name, tr, b, r, list, Reference, Status, WorkInProgress, Prepared, DatePrepared, Reviewed, DateReviewed);
                        tr.innerHTML = html
                        list.appendChild(tr) 
                        Row = Row + 1
                    }
                    if (c == 'ShareholdersEquityBeginningBalance') {
                        document.getElementById(b).value = numUSD.format(a);
                    }
                    if (c == 'TrialBalance') {
                        document.getElementById(b).value = numUSD.format(a);
                    }
                }
            }
        });
        document.getElementById('FilesDetails').innerHTML = list.innerHTML;
    } catch {}
    showPage('Context')
    historyPush('Context')
    Compile();
    document.getElementById('UploadConfirm').style.display = 'none';
};
