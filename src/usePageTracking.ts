// Inspired by https://stackoverflow.com/questions/34836500/how-to-set-up-google-analytics-for-react-router
import { useEffect } from "react";

export const usePageTracking = () => {
  const location = document.location;

  useEffect(() => {
    // @ts-ignore
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);
};
