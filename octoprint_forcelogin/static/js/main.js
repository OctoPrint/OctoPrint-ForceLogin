/*
 * Will get included into the login dialog, NOT into the regular OctoPrint
 * web application.
 */

$(function() {
    var OctoPrint = window.OctoPrint;

    OctoPrint.options.baseurl = BASE_URL;
    OctoPrint.options.apikey = UI_API_KEY;

    var overlayElement = $("#login-overlay");
    var errorElement = $("#login-error");

    $("#login-button").click(function() {
        var usernameElement = $("#login-user");
        var passwordElement = $("#login-password");
        var rememberElement = $("#login-remember");

        var username = usernameElement.val();
        var password = passwordElement.val();
        var remember = rememberElement.checked;

        overlayElement.addClass("in");
        errorElement.removeClass("in");

        OctoPrint.browser.login(username, password, remember)
            .done(function() {
                location.reload();
            })
            .fail(function() {
                usernameElement.val("");
                passwordElement.val("");

                overlayElement.removeClass("in");
                errorElement.addClass("in");
            });

        return false;
    });
});
