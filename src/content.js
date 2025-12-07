(() => {
  const logPrefix = "[Bandyboll]";

  const tagVideos = () => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.dataset.bandybollReady = "true";
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      tagVideos();
      console.info(`${logPrefix} content script initialized after DOM load`);
    }, { once: true });
  } else {
    tagVideos();
    console.info(`${logPrefix} content script initialized`);
  }
})();
