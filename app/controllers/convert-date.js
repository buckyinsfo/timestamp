
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
            in_str = in_str.toString().replace(/\/|\,/g, '');
            in_str = in_str.toString().replace(/%20/g, ' ');

            var arr = in_str.split(' ');

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

    static convertToEpoch( in_str ) {
        var result = null;

        if ( in_str ) {
            in_str = in_str.toString().replace( /\/|\,/g, '' );
            in_str = in_str.toString().replace( /%20/g, ' ' );

            var arr = in_str.split(' ');

            if ( arr.length === 3 ) {

                var dt= arr[2] + "." + this.strToMonth( arr[0] ) + "." + arr[1];
                result = parseInt((new Date( dt ).getTime() / 1000).toFixed(0))
            }
        }
        return result;
    }

    static testcode() {
        var epoch = this.convertToEpoch( '/February%2019,%201980' );
        //var epoch = null;
        //var nat_dt = this.convertToNatural( '/319795200' );

        if ( epoch ) {
            nat_dt = convertDate.convertToNatural( epoch );
            //nat_dt = req.url;
        } else if ( nat_dt ) {
            epoch = convertDate.convertToEpoch( nat_dt );
            //epoch = req.url;
        }

        var obj = { "unix": epoch, "natural": nat_dt };
        console.log( JSON.stringify( obj ) );
    }

    static testcode2() {
        var epoch = convertDate.convertToEpoch( '/February 19, 1980' );
        var nat_dt = null;

        if ( epoch ) {
            nat_dt = convertDate.convertToNatural(epoch);
        }
        var obj = { "unix": epoch, "natural": nat_dt };
        //_.isEqual(remoteJSON, localJSON)
        //expect( obj ).toEqual( { "unix": 319795200 , "natural": 'February 19, 1980' } );
    }
}

//convertDate.convertToEpoch('/February 19, 1980');
//convertDate.testcode2();


module.exports = convertDate;