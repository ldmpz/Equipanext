import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function viteInjectPlugin() {
  return {
    name: 'vite-inject-plugin',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const regex = /<!--\s*include\(([^)]+)\)\s*-->/g;
        let newHtml = html;
        let match;
        // Use helper to replace iteratively to support multiple inclusions
        while ((match = regex.exec(html)) !== null) {
          const placeholder = match[0];
          const fileName = match[1].trim();
          const filePath = path.resolve(__dirname, 'src/components', fileName);
          if (fs.existsSync(filePath)) {
            const componentContent = fs.readFileSync(filePath, 'utf-8');
            newHtml = newHtml.replace(placeholder, componentContent);
          } else {
            console.warn(`Warning: Component file not found: ${filePath}`);
          }
        }
        return newHtml;
      }
    }
  };
}

export default defineConfig({
  root: 'src',
  plugins: [viteInjectPlugin()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        nosotros: path.resolve(__dirname, 'src/nosotros.html'),
        productos: path.resolve(__dirname, 'src/productos.html'),
        servicios: path.resolve(__dirname, 'src/servicios.html'),
        contacto: path.resolve(__dirname, 'src/contacto.html'),
        diseñador: path.resolve(__dirname, 'src/diseñador.html')
      }
    }
  }
});
