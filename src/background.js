const logPrefix = "[Bandyboll]";

chrome.runtime.onInstalled.addListener(() => {
  console.info(`${logPrefix} service worker ready`);
});
