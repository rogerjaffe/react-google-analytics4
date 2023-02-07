// Inspired by https://stackoverflow.com/questions/34836500/how-to-set-up-google-analytics-for-react-router
import { useEffect } from "react";
export var usePageTracking = function () {
    var location = document.location;
    useEffect(function () {
        // @ts-ignore
        window.gtag("event", "page_view", {
            page_path: location.pathname + location.search,
        });
    }, [location.pathname, location.search]);
};
