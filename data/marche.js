$(document).ready(function () {
    //tunidex
    getAction('TN0009050014');
    //tunidex20
    getAction('TN0009050287');
    //all actions
    getAllActions()
    //group
    getGroup(11);

    // test()

    // function test() {
    //     console.log('test url')
    //     $.ajax({
    //         url: 'http://localhost:8888/getdata',
    //         method: 'get',
    //         success: (data) => {
    //             str = JSON.parse(data);
    //             console.log(str);
    //         }
    //     });
    // }



    function getAction(id) {
        console.log('getting action ' + id)
        $.ajax({
            url: 'http://localhost:8888/actions/' + id,
            method: 'get',
            success: (data) => {
                var action = JSON.parse(data).market;
                console.log(action);
            }
        });
    }

    //http://www.bvmt.com.tn/rest_api/rest/market/groups/11,12,51,52,99
    function getAllActions() {
        console.log('getting all actions');
        $.ajax({
            url: 'http://localhost:8888/actions/all',
            method: 'get',
            success: (data) => {
                let actions = JSON.parse(data).markets;
                console.log(actions);
            }
        });
    }
    function getGroup(grp) {
        console.log('getting froup' + grp);
        $.ajax({
            url: 'http://localhost:8888/groups/' + grp,
            method: 'get',
            success: (data) => {
                let actions = JSON.parse(data).markets;
                console.log(actions);
            }
        });
    }


    //http://www.bvmt.com.tn/rest_api/rest/status/all
    //http://www.bvmt.com.tn/rest_api/rest/intraday/TN0007140015
});