$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015 Q1',
            tunindex: 2666,
            portefeuille: 2647
        }, {
            period: '2015 Q2',
            tunindex: 2778,
            portefeuille: 2294
        }, {
            period: '2015 Q3',
            tunindex: 4912,
            portefeuille: 1969
        }, {
            period: '2015 Q4',
            tunindex: 3767,
            portefeuille: 3597
        }, {
            period: '2016 Q1',
            tunindex: 6810,
            portefeuille: 1914
        }, {
            period: '2016 Q2',
            tunindex: 5670,
            portefeuille: 4293
        }, {
            period: '2016 Q3',
            tunindex: 4820,
            portefeuille: 3795
        }, {
            period: '2016 Q4',
            tunindex: 15073,
            portefeuille: 5967
        }, {
            period: '2017 Q1',
            tunindex: 10687,
            portefeuille: 4460
        }, {
            period: '2017 Q2',
            tunindex: 8432,
            portefeuille: 5713
        }],
        xkey: 'period',
        ykeys: ['tunindex', 'portefeuille'],
        labels: ['tunindex', 'portefeuille'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
