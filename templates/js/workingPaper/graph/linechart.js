
// graph/linechart.js

function LineChart(lsc) {
    //
    a = window.location.href.replace(window.location.origin, '').split('/')[2]
    if (a != 'WorkingPaper') {
        //
        lsc = parseInt(localStorage.counter) - 1
        //
        l = document.querySelectorAll('.EntityRegistrantNamePosts')
        //
        //
        for (let q = lsc; q < l.length; q++) {
            //
            a = 0
            a = Math.max(a, parseInt(document.getElementsByClassName('IntrinsicValuesPosts1')[q].value.replaceAll(/,/g, '')));
            if (Number.isNaN(Number(a))) {
                a = 1
            }
            //
            b = 0
            b = Math.max(b, parseInt(document.getElementsByClassName('IntrinsicValuesPosts2')[q].value.replaceAll(/,/g, '')));
            if (Number.isNaN(Number(b))) {
                b = 1
            }
            //
            c = 0
            c = Math.max(c, parseInt(document.getElementsByClassName('IntrinsicValuesPosts3')[q].value.replaceAll(/,/g, '')));
            if (Number.isNaN(Number(c))) {
                c = 1
            }
            //
            d = 0
            d = Math.max(d, parseInt(document.getElementsByClassName('IntrinsicValuesPosts4')[q].value.replaceAll(/,/g, '')));
            if (Number.isNaN(Number(d))) {
                d = 1
            }
            //
            e = 0
            e = Math.max(e, parseInt(document.getElementsByClassName('MarketCapitalizationPosts1')[q].value.replaceAll(/,/g, '')));
            if (Number.isNaN(Number(e))) {
                e = 1
            }
            //
            f = 0
            f = Math.max(f, parseInt(document.getElementsByClassName('MarketCapitalizationPosts2')[q].value.replaceAll(/,/g, '')));
            if (Number.isNaN(Number(f))) {
                f = 1
            }
            //
            g = 0
            g = Math.max(g, parseInt(document.getElementsByClassName('MarketCapitalizationPosts3')[q].value.replaceAll(/,/g, '')));
            if (Number.isNaN(Number(g))) {
                g = 1
            }
            //
            h = 0
            h = Math.max(h, parseInt(document.getElementsByClassName('MarketCapitalizationPosts4')[q].value.replaceAll(/,/g, '')));
            if (Number.isNaN(Number(h))) {
                h = 1
            }
            //
            i = Math.max(a, b, c, d, e, f, g, h)
            //
            if (i/1000000000 > 1) {
                dad = 1000000000;
                scale = '(in billions)';
            } else {
                if (i/1000000 > 1) {
                    dad = 1000000;
                    scale = '(in millions)';
                } else {
                    dad = 1000;
                    scale = '(in thousands)';
                }
            }
            //
            const lastyear = document.getElementsByClassName('DateSummary1')[q].innerHTML.replaceAll(/,/g, '');
            const secondlastyear = document.getElementsByClassName('DateSummary2')[q].innerHTML.replaceAll(/,/g, '');
            const thirdlastyear = document.getElementsByClassName('DateSummary3')[q].innerHTML.replaceAll(/,/g, '');
            const fourthlastyear = document.getElementsByClassName('DateSummary4')[q].innerHTML.replaceAll(/,/g, '');
            //
            if (a == 0) {
                a = NaN
            } else {
                a = a / dad;
            }
            let lastyearIntrinsicValue = Math.round(a * 1000)/1000
            //
            if (b == 0) {
                a = NaN
            } else {
                a = b / dad;
            }
            let secondlastyearIntrinsicValue = Math.round(a * 1000)/1000
            //
            if (c == 0) {
                a = NaN
            } else {
                a = c / dad;
            }
            let thirdlastyearIntrinsicValue = Math.round(a * 1000)/1000
            //
            if (d == 0) {
                a = NaN
            } else {
                a = d / dad;
            }
            let fourthlastyearIntrinsicValue = Math.round(a * 1000)/1000
            //
            if (e == 0) {
                a = NaN
            } else {
                a = e / dad;
            }
            let lastyearMarketCap = Math.round(a * 1000)/1000
            //
            if (f == 0) {
                a = NaN
            } else {
                a = f / dad;
            }
            let secondlastyearMarketCap = Math.round(a * 1000)/1000
            //
            if (g == 0) {
                a = NaN
            } else {
                a = g / dad;
            }
            let thirdlastyearMarketCap = Math.round(a * 1000)/1000
            //
            if (h == 0) {
                a = NaN
            } else {
                a = h / dad;
            }
            let fourthlastyearMarketCap = Math.round(a * 1000)/1000
            //
            const charty = document.getElementsByClassName('LineChartPosts')[q];
            charty.width = window.innerWidth * 0.6;
            charty.height = window.innerHeight * 0.3;
            //
            let lineChart = new Chart(charty, {
                type: 'line',
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }]
                    }
                },
                data: {
                    labels: [lastyear, secondlastyear, thirdlastyear, fourthlastyear],
                    datasets: [
                        {
                            label: 'intrinsic value ' + scale,
                            fill: false,
                            lineTension: 0.5,
                            borderColor: '#0D47A1',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointBorderRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(75,192,192,1)',
                            pointHoverBorderWidth: 2,
                            pointHitRadius: 10,
                            data: [lastyearIntrinsicValue, secondlastyearIntrinsicValue, thirdlastyearIntrinsicValue, fourthlastyearIntrinsicValue],
                        },
                        {
                            label: 'market capitalization ' + scale,
                            fill: false,
                            lineTension: 0.5,
                            borderColor: 'red',
                            borderCapStyle: 'butt', 
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointBorderRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(75,192,192,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [lastyearMarketCap, secondlastyearMarketCap, thirdlastyearMarketCap, fourthlastyearMarketCap],
                        },
                    ]
                }
            });
        }
    } else {
        //
        a = 0
        a = Math.max(a, parseInt(document.getElementById('IntrinsicValues1').value.replaceAll(/,/g, '')));
        if (Number.isNaN(Number(a))) {
            a = 1
        }
        //
        b = 0
        b = Math.max(b, parseInt(document.getElementById('IntrinsicValues2').value.replaceAll(/,/g, '')));
        if (Number.isNaN(Number(b))) {
            b = 1
        }
        //
        c = 0
        c = Math.max(c, parseInt(document.getElementById('IntrinsicValues3').value.replaceAll(/,/g, '')));
        if (Number.isNaN(Number(c))) {
            c = 1
        }
        //
        d = 0
        d = Math.max(d, parseInt(document.getElementById('IntrinsicValues4').value.replaceAll(/,/g, '')));
        if (Number.isNaN(Number(d))) {
            d = 1
        }
        //
        e = 0
        e = Math.max(e, parseInt(document.getElementById('MarketCapitalization1').value.replaceAll(/,/g, '')));
        if (Number.isNaN(Number(e))) {
            e = 1
        }
        //
        f = 0
        f = Math.max(f, parseInt(document.getElementById('MarketCapitalization2').value.replaceAll(/,/g, '')));
        if (Number.isNaN(Number(f))) {
            f = 1
        }
        //
        g = 0
        g = Math.max(g, parseInt(document.getElementById('MarketCapitalization3').value.replaceAll(/,/g, '')));
        if (Number.isNaN(Number(g))) {
            g = 1
        }
        //
        h = 0
        h = Math.max(h, parseInt(document.getElementById('MarketCapitalization4').value.replaceAll(/,/g, '')));
        if (Number.isNaN(Number(h))) {
            h = 1
        }
        //
        i = Math.max(a, b, c, d, e, f, g, h)
        //
        if (i/1000000000 > 1) {
            dad = 1000000000;
            scale = '(in billions)';
        } else {
            if (i/1000000 > 1) {
                dad = 1000000;
                scale = '(in millions)';
            } else {
                dad = 1000;
                scale = '(in thousands)';
            }
        }
        //
        const lastyear = document.getElementById('DateSummary1').innerHTML.replaceAll(/,/g, '');
        const secondlastyear = document.getElementById('DateSummary2').innerHTML.replaceAll(/,/g, '');
        const thirdlastyear = document.getElementById('DateSummary3').innerHTML.replaceAll(/,/g, '');
        const fourthlastyear = document.getElementById('DateSummary4').innerHTML.replaceAll(/,/g, '');
        //
        if (a == 0) {
            a = NaN
        } else {
            a = a / dad;
        }
        let lastyearIntrinsicValue = Math.round(a * 1000)/1000
        //
        if (b == 0) {
            a = NaN
        } else {
            a = b / dad;
        }
        let secondlastyearIntrinsicValue = Math.round(a * 1000)/1000
        //
        if (c == 0) {
            a = NaN
        } else {
            a = c / dad;
        }
        let thirdlastyearIntrinsicValue = Math.round(a * 1000)/1000
        //
        if (d == 0) {
            a = NaN
        } else {
            a = d / dad;
        }
        let fourthlastyearIntrinsicValue = Math.round(a * 1000)/1000
        //
        if (e == 0) {
            a = NaN
        } else {
            a = e / dad;
        }
        let lastyearMarketCap = Math.round(a * 1000)/1000
        //
        if (f == 0) {
            a = NaN
        } else {
            a = f / dad;
        }
        let secondlastyearMarketCap = Math.round(a * 1000)/1000
        //
        if (g == 0) {
            a = NaN
        } else {
            a = g / dad;
        }
        let thirdlastyearMarketCap = Math.round(a * 1000)/1000
        //
        if (h == 0) {
            a = NaN
        } else {
            a = h / dad;
        }
        let fourthlastyearMarketCap = Math.round(a * 1000)/1000
        //
        const chart = document.getElementById('LineChart');
        chart.width = window.innerWidth * 0.6;
        chart.height = window.innerHeight * 0.3;
        //
        let lineChart = new Chart(chart, {
            type: 'line',
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                }
            },
            data: {
                labels: [lastyear, secondlastyear, thirdlastyear, fourthlastyear],
                datasets: [
                    {
                        label: 'intrinsic value ' + scale,
                        fill: false,
                        lineTension: 0.5,
                        borderColor: '#0D47A1',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointBorderRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(75,192,192,1)',
                        pointHoverBorderWidth: 2,
                        pointHitRadius: 10,
                        data: [lastyearIntrinsicValue, secondlastyearIntrinsicValue, thirdlastyearIntrinsicValue, fourthlastyearIntrinsicValue],
                    },
                    {
                        label: 'market capitalization ' + scale,
                        fill: false,
                        lineTension: 0.5,
                        borderColor: 'red',
                        borderCapStyle: 'butt', 
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointBorderRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(75,192,192,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [lastyearMarketCap, secondlastyearMarketCap, thirdlastyearMarketCap, fourthlastyearMarketCap],
                    },
                ]
            }
        });
    }
};
