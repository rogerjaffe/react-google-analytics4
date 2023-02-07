const gTagUrl = "https://www.googletagmanager.com/gtag/js?id=";

const injectScript = (prop: "innerText" | "src", val: string) => {
  const script = document.createElement("script");
  script[prop] = val;
  script.async = true;
  document.body.appendChild(script);
};

const injectScriptUrl = (url: string) => {
  injectScript("src", url);
};

const injectScriptInline = (code: string) => {
  injectScript("innerText", code);
};

export const init = (measurementId: string) => {
  injectScriptUrl(`${gTagUrl}${measurementId}`);
  injectScriptInline(`window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "${measurementId}");
  `);
};
