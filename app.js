if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js")
    .then(() => console.log("✅ Service Worker registered!"))
    .catch(err => console.log("❌ Error registering SW", err));
}

// PWA Install Prompt (iOS custom only)
(function() {
  function isIos() {
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  }
  
  function isInStandaloneMode() {
    return (window.navigator.standalone === true) || (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  }
  
  function isSafari() {
    return isIos() && /safari/i.test(window.navigator.userAgent) && !/crios|fxios|opera|edgios/i.test(window.navigator.userAgent);
  }
  
  function shouldShowPrompt() {
    return isIos() && isSafari() && !isInStandaloneMode();
  }
  
  function hidePrompt() {
    const promptElement = document.getElementById('ios-pwa-prompt');
    if (promptElement) {
      promptElement.style.display = 'none';
    }
  }
  
  function showInstallPrompt() {
    const promptElement = document.getElementById('ios-pwa-prompt');
    if (!promptElement) {
      console.error("❌ iOS PWA Prompt element not found.");
      return;
    }

    promptElement.style.display = 'block';
    promptElement.innerHTML = `
      <div class="ios-prompt-overlay">
        <div class="ios-prompt-modal">
          <div class="ios-prompt-header">
            <h3>Add to Home Screen</h3>
            <button class="ios-prompt-cancel" onclick="this.closest('.ios-prompt-overlay').style.display='none';">Cancel</button>
          </div>
          <div class="ios-prompt-content">
            <p>This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.</p>
            <div class="ios-prompt-instructions">
              <div class="ios-prompt-step">
                <div class="ios-prompt-icon">
                  <img src="./icons/share.svg" alt="Share" width="24" height="24">
                </div>
                <span>1) Press the 'Share' button</span>
              </div>
              <div class="ios-prompt-step">
                <div class="ios-prompt-icon">
                  <img src="./icons/add-square.svg" alt="Add to Home Screen" width="24" height="24">
                </div>
                <span>2) Press 'Add to Home Screen'</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Show prompt when page loads if conditions are met
  window.addEventListener('load', () => {
    if (shouldShowPrompt()) {
      setTimeout(showInstallPrompt, 1000);
    }
  });

  // Also show prompt if user returns to page (e.g., from app switcher)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && shouldShowPrompt()) {
      setTimeout(showInstallPrompt, 500);
    }
  });
})();