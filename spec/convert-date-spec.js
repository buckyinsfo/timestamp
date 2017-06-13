const convertDate = require("../convert-date");

describe("convert-date", function () {
    it("convert NullMonth to number", function () {
        var month = convertDate.strToMonth( 'NullMonth' );
        expect( month ).toBeNull();
    });

    it("convert December to number", function () {
        var month = convertDate.strToMonth( 'December' );
        expect( month ).toBe( 11 );
    });

    it("convert November to number", function () {
        var month = convertDate.strToMonth( 'November' );
        expect( month ).toBe( 10 );
    });

    it("convert October to number", function () {
        var month = convertDate.strToMonth( 'October' );
        expect( month ).toBe( 9 );
    });

    it("convert September to number", function () {
        var month = convertDate.strToMonth( 'September' );
        expect( month ).toBe( 8 );
    });

    it("convert August to number", function () {
        var month = convertDate.strToMonth( 'August' );
        expect( month ).toBe( 7 );
    });

    it("convert July to number", function () {
        var month = convertDate.strToMonth( 'July' );
        expect( month ).toBe( 6 );
    });

    it("convert June to number", function () {
        var month = convertDate.strToMonth( 'June' );
        expect( month ).toBe( 5 );
    });

    it("convert May to number", function () {
        var month = convertDate.strToMonth( 'May' );
        expect( month ).toBe( 4 );
    });

    it("convert April to number", function () {
        var month = convertDate.strToMonth( 'April' );
        expect( month ).toBe( 3 );
    });

    it("convert March to number", function () {
        var month = convertDate.strToMonth( 'March' );
        expect( month ).toBe( 2 );
    });

    it("convert February to number", function () {
        var month = convertDate.strToMonth( 'February' );
        expect( month ).toBe( 1 );
    });

    it("convert January to number", function () {
        var month = convertDate.strToMonth( 'January' );
        expect( month ).toBe( 0 );
    });

    //**********************
    it("convert unix timestamp to natural date", function () {
        var nat = convertDate.convertToNatural('/1450137600');
        expect( nat ).toBe( 'December 15, 2015');
    });
});