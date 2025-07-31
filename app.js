if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("✅ Service Worker registered!"))
    .catch(err => console.log("❌ Error registering SW", err));
}

// iOS PWA Install Prompt
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
  function showPrompt() {
    var prompt = document.getElementById('ios-pwa-prompt');
    if (!prompt) return;
    prompt.innerHTML = `
      <button class="close" aria-label="Close" onclick="this.parentNode.style.display='none';">&times;</button>
      <strong>Install 99x PWA Installer</strong><br/>
      To install this app, tap <span style="font-size:1.2em;">&#x2191;</span> and then <b>Add to Home Screen</b>.
      <br/>
      <small>Works offline and saves as an app!</small>
    `;
    prompt.style.display = 'block';
  }
  window.addEventListener('DOMContentLoaded', function() {
    if (shouldShowPrompt()) {
      setTimeout(showPrompt, 1200);
    }
  });
})();