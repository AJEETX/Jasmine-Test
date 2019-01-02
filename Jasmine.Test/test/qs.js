define(['window'], function (window) {
    var parse = function (qs) {
        if (qs[0] === '?') {
            qs = qs.substring(1);
        }

        return qs.split('&').reduce(function (prev, str) {
            var pair;
            pair = str.split('=');
            prev[pair[0]] = decodeURIComponent(pair[1]);
            return prev;
        }, {});
    };

    var params = parse(window.location.search);

    return {
        params: params
    };
});