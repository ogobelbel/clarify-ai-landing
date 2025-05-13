import ChromeIcon from "@/public/icons/chrome.svg";
import FirefoxIcon from "@/public/icons/firefox.svg";
import EdgeIcon from "@/public/icons/edge.svg";

export interface Browser {
  name: string;
  link: string;
  logo: string;
}

export function isEdgeBrowser() {
    const ua = navigator.userAgent;
    return /Edg\/|Edge\//.test(ua);
}

export const BrowserName = {
    Chrome: "Chrome",
    Firefox: "Firefox",
    Edge: "Edge",
}

export function isFirefoxBrowser() {
    const ua = navigator.userAgent;
    return /Firefox\//.test(ua);
}

export function isChromeBrowser() {
    const ua = navigator.userAgent;
    return /Chrome\//.test(ua);
}

const EDGE_ADDON_LINK = "https://microsoftedge.microsoft.com/addons/detail/youtube-summary-ai-with-g/akjfbgldngciabajgkmmbdlhpkciffgc";
const FIREFOX_ADDON_LINK = "https://addons.mozilla.org/firefox/addon/clarify-ai/";
const CHROME_ADDON_LINK = "https://chromewebstore.google.com/detail/youtube-summary-ai-with-g/ogihgbocgnbhhdcmcolhipjhkmkecpeg";

export function getBrowserConfig(): Browser {
    if (isEdgeBrowser()) {
        return {
            name: BrowserName.Edge,
            link: EDGE_ADDON_LINK,
            logo: EdgeIcon
        };
    }
    if (isFirefoxBrowser()) {
        return {
            name: BrowserName.Firefox,
            link: FIREFOX_ADDON_LINK,
            logo: FirefoxIcon
        };
    }
    return {
        name: BrowserName.Chrome,
        link: CHROME_ADDON_LINK,
        logo: ChromeIcon
    };
}