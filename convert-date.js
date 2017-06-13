
const MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

class convertDate {

    static strToMonth(name) {
        var res = null;
        for (var i = 0; i < MONTHS.length; i++) {
            if (name === MONTHS[i]) {
                res = i;
                break;
            }
        }
        return res;
    }

    static convertToNatural(in_str) {
        var result = '';

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

}

module.exports = convertDate;