import {Browser} from "@/components/hero-home";
import ChromeLogo from "@/public/images/chrome_logo.png";
import FirefoxLogo from "@/public/images/firefox_logo.png";
import EdgeLogo from "@/public/images/edge_logo.png";

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
    console.log(/Firefox\//.test(ua))
    return /Firefox\//.test(ua);
}

export function isChromeBrowser() {
    debugger
    const ua = navigator.userAgent;
    return /Chrome\//.test(ua);
}

const EDGE_ADDON_LINK = "https://microsoftedge.microsoft.com/addons/detail/youtube-summary-ai-with-g/akjfbgldngciabajgkmmbdlhpkciffgc";
const FIREFOX_ADDON_LINK = "https://addons.mozilla.org/en-US/firefox/addon/youtube-summary/";
const CHROME_ADDON_LINK = "https://chromewebstore.google.com/detail/youtube-summary-ai-with-g/ogihgbocgnbhhdcmcolhipjhkmkecpeg";

export function getBrowserConfig(): Browser {
    if (isEdgeBrowser()) {
        return {
            name: BrowserName.Edge,
            link: EDGE_ADDON_LINK,
            logo: EdgeLogo
        };
    }
    if (isFirefoxBrowser()) {
        return {
            name: BrowserName.Firefox,
            link: FIREFOX_ADDON_LINK,
            logo: FirefoxLogo
        };
    }
    return {
        name: BrowserName.Chrome,
        link: CHROME_ADDON_LINK,
        logo: ChromeLogo
    };
}