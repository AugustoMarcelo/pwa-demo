# 99x PWA Installer

This project is an installable PWA, ready for iOS/Safari installation prompt demonstration.

## How to run with Docker

1. **Build the image:**

```bash
docker build -t 99x-pwa-installer .
```

2. **Run the container:**

```bash
docker run -d -p 8080:80 --name pwa-installer 99x-pwa-installer
```

3. **Access at:**

```
http://localhost:8080/
```

Or configure your nginx reverse proxy to point to the container as desired (e.g., `/pwa-install/`).

---

- The app is installable (manifest, service worker, 99x icon).
- On iOS/Safari, displays a custom prompt to install.
- Branding and colors extracted from the 99x logo. 