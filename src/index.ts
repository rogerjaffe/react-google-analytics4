import React, { useEffect } from "react";

const gTagUrl = "https://www.googletagmanager.com/gtag/js?id=";

const injectScript = (prop: "innerText" | "src", val: string) => {
  const script = document.createElement("script");
  script[prop] = val;
  script.async = true;
  document.body.appendChild(script);
};

const injectScriptUrl = (document: Document, url: string) => {
  injectScript("src", url);
};

const injectScriptInline = (document: Document, code: string) => {
  injectScript("innerText", code);
};

export const initGA4 = (document: Document, measurementId: string) => {
  injectScriptUrl(document, `${gTagUrl}${measurementId}`);
  injectScriptInline(
    document,
    `window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "${measurementId}");
  `
  );
};

export const usePageTracking = () => {
  const location = document.location;

  useEffect(() => {
    // @ts-ignore
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);
};
