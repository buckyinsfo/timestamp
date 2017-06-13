const convertDate = require("../convert-date");

describe("convert-date", function () {
    it("convert NullMonth to number", function () {
        var month = convertDate.strToMonth( 'NullMonth' );
        expect( month ).toBeNull();
    });

    it("convert December to number", function () {
        var month = convertDate.strToMonth( 'December' );
        expect( month ).toBe( 12 );
    });

    it("convert November to number", function () {
        var month = convertDate.strToMonth( 'November' );
        expect( month ).toBe( 11 );
    });

    it("convert October to number", function () {
        var month = convertDate.strToMonth( 'October' );
        expect( month ).toBe( 10 );
    });

    it("convert September to number", function () {
        var month = convertDate.strToMonth( 'September' );
        expect( month ).toBe( 9 );
    });

    it("convert August to number", function () {
        var month = convertDate.strToMonth( 'August' );
        expect( month ).toBe( 8 );
    });

    it("convert July to number", function () {
        var month = convertDate.strToMonth( 'July' );
        expect( month ).toBe( 7 );
    });

    it("convert June to number", function () {
        var month = convertDate.strToMonth( 'June' );
        expect( month ).toBe( 6 );
    });

    it("convert May to number", function () {
        var month = convertDate.strToMonth( 'May' );
        expect( month ).toBe( 5 );
    });

    it("convert April to number", function () {
        var month = convertDate.strToMonth( 'April' );
        expect( month ).toBe( 4 );
    });

    it("convert March to number", function () {
        var month = convertDate.strToMonth( 'March' );
        expect( month ).toBe( 3 );
    });

    it("convert February to number", function () {
        var month = convertDate.strToMonth( 'February' );
        expect( month ).toBe( 2 );
    });

    it("convert January to number", function () {
        var month = convertDate.strToMonth( 'January' );
        expect( month ).toBe( 1 );
    });

    //**********************
    it("convert unix timestamp to natural date", function () {
        var nat = convertDate.convertToNatural('/1226390400');
        expect( nat ).toBe( 'November 11, 2008');
    });

    it("convert natural date to unix timestamp", function () {
        var unix_ts = convertDate.convertToUnixTS('/November 11, 2008');
        expect( unix_ts ).toBe( 1226390400 );
    });
});