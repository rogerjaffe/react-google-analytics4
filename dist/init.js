var gTagUrl = "https://www.googletagmanager.com/gtag/js?id=";
var injectScript = function (prop, val) {
    var script = document.createElement("script");
    script[prop] = val;
    script.async = true;
    document.body.appendChild(script);
};
var injectScriptUrl = function (url) {
    injectScript("src", url);
};
var injectScriptInline = function (code) {
    injectScript("innerText", code);
};
export var init = function (measurementId) {
    injectScriptUrl("".concat(gTagUrl).concat(measurementId));
    injectScriptInline("window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag(\"js\", new Date());\n    gtag(\"config\", \"".concat(measurementId, "\");\n  "));
};
