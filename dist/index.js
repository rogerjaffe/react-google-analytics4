import { useEffect } from "react";
var gTagUrl = "https://www.googletagmanager.com/gtag/js?id=";
var injectScript = function (prop, val) {
    var script = document.createElement("script");
    script[prop] = val;
    script.async = true;
    document.body.appendChild(script);
};
var injectScriptUrl = function (document, url) {
    injectScript("src", url);
};
var injectScriptInline = function (document, code) {
    injectScript("innerText", code);
};
export var initGA4 = function (document, measurementId) {
    injectScriptUrl(document, "".concat(gTagUrl).concat(measurementId));
    injectScriptInline(document, "window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag(\"js\", new Date());\n    gtag(\"config\", \"".concat(measurementId, "\");\n  "));
};
export var usePageTracking = function () {
    var location = document.location;
    useEffect(function () {
        // @ts-ignore
        window.gtag("event", "page_view", {
            page_path: location.pathname + location.search,
        });
    }, [location.pathname, location.search]);
};
