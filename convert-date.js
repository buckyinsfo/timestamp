
const MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

class convertDate {

    static strToMonth(name) {
        var res = null;
        for (var i = 0; i < MONTHS.length; i++) {
            if (name === MONTHS[i]) {
                res = i + 1;
                break;
            }
        }
        return res;
    }

    static numToMonth( num ) {
        var res = null;
        if ( num >= 0 && num <= MONTHS.length ) {
            res = MONTH[ num ];
        }
        return res;
    }

    static convertToNatural(in_str) {
        var result = null;

        if (in_str) {

            if (in_str.charAt(0) === '/') {
                in_str = in_str.slice(1);
            }

            let arr = in_str.split(' ');

            if (arr.length === 1 && !isNaN(arr[0])) {
                //var date = new Date(parseInt(arr[0] + 0200));
                var date = new Date( parseInt(arr[0]) * 1000 );
                var month = date.getMonth();
                var day = date.getUTCDate();
                var yr = date.getFullYear();

                result = MONTHS[month] + ' ' + day + ', ' + yr;
                console.log(result);

            } else {

                var date = new Date();
                date.setMonth
                console.log('natural date test.');
            }
        }
        return result;
    }

    static convertToUnixTS( in_str ) {
        var result = null;

        if ( in_str ) {

            if (in_str.charAt(0) === '/') {
                in_str = in_str.slice(1);
            }

            in_str = in_str.replace( /,/g, "" );

            let arr = in_str.split(' ');

            if (arr.length === 3 /*&& !isNaN(arr[0]) */) {

                var yr = arr[2];
                var dy = "." + arr[1];
                var mn = "." + this.strToMonth( arr[0] );

                var dt = yr.concat( mn, dy );
                //var date = new Date( dt );

                //result = date.getTime()/1000;
                //result = Date.parse( in_str ).getTime()/1000;
                result = parseInt((new Date( dt ).getTime() / 1000).toFixed(0))
            }
        }
        return result;
    }
}

convertDate.convertToUnixTS('/November 08, 2008');

module.exports = convertDate;