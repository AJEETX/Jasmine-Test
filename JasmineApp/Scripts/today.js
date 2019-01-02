/// <reference path="require.js" />

define(['string', 'util/date'], function (string, date) {
    return {
        getDateString: function () {
            return string.format('Today is %d', date.today);
        },
        setFormat: function (form) {
            string.format.style = form;
        },
        getFormat: function () {
            return string.format.style;
        }
    }
});