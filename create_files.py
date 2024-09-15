import os

# Path where you want to save the files
directory = "/Users/practicallyplaying/Documents/GitHub/Little_App_Library"  # Your repository folder path

# Ensure the directory exists
if not os.path.exists(directory):
    os.makedirs(directory)

# Create index.html
index_html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practically Playing Mini-App Library</title>
  <link rel="manifest" href="/manifest.json">
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .container {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .app {
      margin: 20px;
    }
    .app img {
      width: 100px;
      height: 100px;
    }
    .app a {
      display: inline-block;
      padding: 10px 15px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>Practically Playing Library</h1>
  <div class="container">
    <div class="app">
      <img src="https://yourwebsite.com/path-to-icon/pirate-icon.png" alt="Pirate Playlist">
      <p>Pirate Playlist</p>
      <a href="https://practicallyplaying.github.io/Pirate_Playlist/" target="_blank">Play Now</a>
    </div>
  </div>
</body>
</html>
"""

with open(os.path.join(directory, 'index.html'), 'w') as f:
    f.write(index_html_content)

# Create manifest.json
manifest_json_content = """{
  "name": "Practically Playing Library",
  "short_name": "Play Library",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#007bff",
  "icons": [
    {
      "src": "/icons/play-library-icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/play-library-icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
"""

with open(os.path.join(directory, 'manifest.json'), 'w') as f:
    f.write(manifest_json_content)

# Create service-worker.js
service_worker_js_content = """const CACHE_NAME = 'play-library-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/play-library-icon-192.png',
  '/icons/play-library-icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
"""

with open(os.path.join(directory, 'service-worker.js'), 'w') as f:
    f.write(service_worker_js_content)

print("Files created successfully!")
