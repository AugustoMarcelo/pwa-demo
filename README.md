# 99x PWA Installer

A Progressive Web App (PWA) demonstration with custom iOS installation prompts and native Android install support.

## 🌐 Live Demo

**Visit the live demo:** [https://augustomarcelo.github.io/pwa-demo/](https://augustomarcelo.github.io/pwa-demo/)

## ✨ Features

- **📱 PWA Installation**: Full PWA capabilities with manifest and service worker
- **🍎 iOS Custom Prompt**: Native-looking installation modal for iOS Safari users
- **🤖 Android Native Support**: Uses browser's native install prompt
- **🎨 Modern UI**: Clean, professional design with custom icons
- **📦 Docker Support**: Easy containerized deployment
- **🚀 GitHub Pages**: Automatic deployment from main branch

## 🛠️ Installation & Usage

### Option 1: GitHub Pages (Recommended)

The app is automatically deployed to GitHub Pages. Simply visit:
```
https://augustomarcelo.github.io/pwa-demo/
```

### Option 2: Docker Deployment

1. **Clone the repository:**
```bash
git clone https://github.com/AugustoMarcelo/pwa-demo.git
cd pwa-demo
```

2. **Using Makefile (Easiest):**
```bash
# Start the application
make up

# View logs
make logs

# Stop the application
make down

# Development mode with live reload
make up-dev
```

3. **Manual Docker commands:**
```bash
# Build and run
docker build -t 99x-pwa-installer .
docker run -d -p 8080:80 --name pwa-installer 99x-pwa-installer

# Access at http://localhost:8080/
```

### Option 3: Local Development

1. **Clone and serve locally:**
```bash
git clone https://github.com/AugustoMarcelo/pwa-demo.git
cd pwa-demo

# Using Python (if available)
python -m http.server 8000

# Using Node.js (if available)
npx serve .

# Using PHP (if available)
php -S localhost:8000
```

2. **Access at:** `http://localhost:8000/`

## 📱 PWA Installation

### iOS Safari Users
- **Custom Modal**: Native-looking installation prompt appears automatically
- **Step-by-step Instructions**: Clear guidance for adding to home screen
- **Professional Design**: Dark theme matching iOS design patterns

### Android Users
- **Native Prompt**: Uses browser's built-in install dialog
- **Chrome/Edge Support**: Works with modern Android browsers
- **Automatic Detection**: Shows when PWA criteria are met

### Desktop Users
- **Browser Install**: Look for install button in address bar
- **Chrome/Edge/Firefox**: Supported across modern browsers

## 🏗️ Project Structure

```
pwa-demo/
├── index.html          # Main PWA page
├── app.js             # PWA logic and iOS prompt
├── styles.css         # Styling including modal design
├── manifest.json      # PWA manifest configuration
├── sw.js             # Service worker for offline support
├── icons/            # PWA icons and custom prompt icons
│   ├── 99x.svg
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── share.svg
│   └── add-square.svg
├── docker/           # Docker configuration
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── docker-compose.dev.yml
├── .github/          # GitHub Actions for deployment
│   └── workflows/
└── Makefile          # Development commands
```

## 🔧 Technical Details

### PWA Features
- **Manifest**: Complete PWA manifest with icons and metadata
- **Service Worker**: Offline caching and background sync
- **HTTPS**: Required for PWA functionality (provided by GitHub Pages)
- **Responsive Design**: Works on all device sizes

### iOS Prompt Features
- **Custom Modal**: Dark theme matching iOS design
- **Smart Detection**: Only shows on iOS Safari when not installed
- **Professional Icons**: Custom SVG icons for share and add actions
- **Dismissible**: Users can cancel the prompt

### Deployment
- **GitHub Pages**: Automatic deployment from main branch
- **GitHub Actions**: CI/CD pipeline for reliable deployment
- **Docker Support**: Containerized deployment option
- **HTTPS**: Secure connection required for PWA features

## 🎨 Design Features

- **Brand Consistency**: Colors and branding from 99x logo
- **Modern UI**: Clean, professional interface
- **Accessibility**: Proper contrast and readable text
- **Responsive**: Works perfectly on mobile and desktop

## 📋 Requirements

- **HTTPS**: Required for PWA functionality (GitHub Pages provides this)
- **Modern Browser**: Chrome, Safari, Firefox, Edge
- **iOS Safari**: For custom installation prompt
- **Android Chrome/Edge**: For native install prompt

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on different devices/browsers
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for PWA demonstration and iOS installation prompts.** 