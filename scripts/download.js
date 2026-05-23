const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = {
  'home.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2NhZTM5YWZjZWMyYTQ5OTdiMWJlZWM2NTFjNGVmMjFhEgsSBxDqyL3HkgIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjQxNjYyNTkxNjI2NTU5MTYwOQ&filename=&opi=89354086',
  'nosotros.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzA5OGYxZmQyM2U3YTRiYTM4MDYyZTMyMDIzMDBkZjllEgsSBxDqyL3HkgIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjQxNjYyNTkxNjI2NTU5MTYwOQ&filename=&opi=89354086',
  'logo.svg': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2NkOWZjMzg4MmY5YTRjOGZiNTI5NTA5YWFlMTllYjM5EgsSBxDqyL3HkgIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjQxNjYyNTkxNjI2NTU5MTYwOQ&filename=&opi=89354086',
  'contacto.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2ZjZDcyM2ZiNWMzYzQzNzY5MDk0NTg4ZjdmYjdhMzQwEgsSBxDqyL3HkgIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjQxNjYyNTkxNjI2NTU5MTYwOQ&filename=&opi=89354086',
  'servicios.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzE1M2ZjNjI3NWM1MjRkZDdhMmZjMDIwNWJmM2IzNjg3EgsSBxDqyL3HkgIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjQxNjYyNTkxNjI2NTU5MTYwOQ&filename=&opi=89354086',
  'home_animated.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzE2MDg3NjIwZGE5OTQ4Yzg4MmU3ZWU2ZmU4OTUyMWQxEgsSBxDqyL3HkgIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjQxNjYyNTkxNjI2NTU5MTYwOQ&filename=&opi=89354086',
  'productos.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzU2NmIzOGEzOTcwYjRhOGE4NWRmMTQ2ZmFkNjBmMzFlEgsSBxDqyL3HkgIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjQxNjYyNTkxNjI2NTU5MTYwOQ&filename=&opi=89354086'
};

async function download(filename, url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${filename}' (${res.statusCode})`));
        return;
      }
      const fileStream = fs.createWriteStream(path.join(__dirname, filename));
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  for (const [filename, url] of Object.entries(urls)) {
    try {
      await download(filename, url);
    } catch (err) {
      console.error(`Error downloading ${filename}:`, err.message);
    }
  }
}

main();
