if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js")
    .then(() => console.log("✅ Service Worker registered!"))
    .catch(err => console.log("❌ Error registering SW", err));
}

// PWA Install Prompt (iOS custom, Android native)
(function() {
  let deferredPrompt;
  
  function isIos() {
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  }
  
  function isAndroid() {
    return /android/i.test(window.navigator.userAgent);
  }
  
  function isInStandaloneMode() {
    return (window.navigator.standalone === true) || (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  }
  
  function isSafari() {
    return isIos() && /safari/i.test(window.navigator.userAgent) && !/crios|fxios|opera|edgios/i.test(window.navigator.userAgent);
  }
  
  function shouldShowIosPrompt() {
    const ios = isIos();
    const safari = isSafari();
    const standalone = isInStandaloneMode();
    
    console.log("🔍 iOS Debug info:", {
      ios: ios,
      safari: safari,
      standalone: standalone,
      userAgent: window.navigator.userAgent
    });
    
    return ios && safari && !standalone;
  }
  
  function showIosPrompt() {
    console.log("🚀 Showing iOS PWA prompt");
    var prompt = document.getElementById('ios-pwa-prompt');
    if (!prompt) {
      console.log("❌ Prompt element not found");
      return;
    }
    
    prompt.innerHTML = `
      <button class="close" aria-label="Close" onclick="this.parentNode.style.display='none';">&times;</button>
      <strong>Install 99x PWA Installer</strong><br/>
      To install this app, tap <span style="font-size:1.2em;">&#x2191;</span> and then <b>Add to Home Screen</b>.
      <br/>
      <small>Works offline and saves as an app!</small>
    `;
    prompt.style.display = 'block';
  }
  
  // Android native install prompt - let it use the native prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    console.log("📱 Android native install prompt available");
    // Don't prevent default - let Android show its native prompt
    deferredPrompt = e;
  });
  
  // Show prompt after page loads
  window.addEventListener('DOMContentLoaded', function() {
    console.log("📱 Page loaded, checking for install prompts...");
    
    // Check for iOS prompt
    if (shouldShowIosPrompt()) {
      console.log("✅ iOS conditions met, showing custom prompt in 1.2s");
      setTimeout(showIosPrompt, 1200);
    } else {
      console.log("❌ iOS conditions not met");
    }
    
    // For Android, let the native prompt handle it
    if (isAndroid()) {
      console.log("🤖 Android detected, will use native install prompt");
    }
  });
  
  // Also try to show prompt on page visibility change (when user returns to tab)
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden && shouldShowIosPrompt()) {
      console.log("👁️ Page became visible, showing iOS prompt");
      setTimeout(showIosPrompt, 500);
    }
  });
})();