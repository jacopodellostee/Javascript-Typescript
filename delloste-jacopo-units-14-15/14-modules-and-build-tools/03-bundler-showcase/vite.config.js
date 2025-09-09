import { defineConfig } from 'vite';
import { resolve } from 'path';
import { minify } from 'html-minifier-terser';

export default defineConfig({
  // Root directory dove si trova index.html
  root: 'src',
  
  // Build configuration
  build: {
    outDir: '../dist', // Output relativo alla root (src)
    emptyOutDir: true,
    
    // Minification configuration
    minify: 'terser',
    
    // Per configurazioni Terser avanzate
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    
    // CSS minification è abilitata di default in Vite
    cssMinify: true,
    
    // Rollup options per configurazioni avanzate
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      },
      output: {
        // Naming pattern per i bundle
        entryFileNames: '[name].bundle.js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]'
      },
      plugins: [
        // Plugin avanzato per minificazione HTML con html-minifier-terser
        {
          name: 'html-minify-advanced',
          async generateBundle(options, bundle) {
            // Trova tutti i file HTML nel bundle
            for (const fileName of Object.keys(bundle)) {
              if (fileName.endsWith('.html')) {
                const htmlAsset = bundle[fileName];
                if (htmlAsset.type === 'asset' && typeof htmlAsset.source === 'string') {
                  try {
                    // Minifica l'HTML con html-minifier-terser
                    htmlAsset.source = await minify(htmlAsset.source, {
                      // Collassa tutti gli spazi bianchi
                      collapseWhitespace: true,
                      // Rimuove i commenti HTML
                      removeComments: true,
                      // Rimuove attributi ridondanti (es. type="text" per input)
                      removeRedundantAttributes: true,
                      // Rimuove type="text/javascript" dai tag script
                      removeScriptTypeAttributes: true,
                      // Rimuove type="text/css" dai tag link e style
                      removeStyleLinkTypeAttributes: true,
                      // Usa DOCTYPE HTML5 breve
                      useShortDoctype: true,
                      // Minifica CSS inline
                      minifyCSS: true,
                      // Minifica JavaScript inline
                      minifyJS: true,
                      // Rimuove attributi vuoti
                      removeEmptyAttributes: true,
                      // Rimuove valori di attributi quando sono uguali al default
                      removeAttributeQuotes: true,
                      // Collassa spazi bianchi inline
                      collapseInlineTagWhitespace: true,
                      // Mantiene solo uno spazio tra classi
                      trimCustomFragments: true,
                      // Rimuove spazi opzionali dai tag
                      removeOptionalTags: false, // Manteniamo false per compatibilità
                      // Configurazioni CSS minification
                      minifyCSS: {
                        level: 2 // Livello avanzato di minificazione CSS
                      },
                      // Configurazioni JS minification
                      minifyJS: {
                        compress: {
                          drop_console: true,
                          drop_debugger: true
                        },
                        mangle: true
                      }
                    });
                    console.log(`✓ HTML minificato: ${fileName}`);
                  } catch (error) {
                    console.warn(`⚠ Errore durante la minificazione di ${fileName}:`, error.message);
                  }
                }
              }
            }
          }
        }
      ]
    },
    
    // Target browsers
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari12']
  },
  
  // Development server configuration
  server: {
    port: 3000,
    //open: true
  },
  
  // CSS preprocessing e PostCSS
  css: {
    postcss: {
      plugins: []
    }
  },
  
  // Public directory per asset statici (relativo alla root)
  publicDir: '../static',
  
  // Resolve configuration
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@images': resolve(__dirname, 'static/images')
    }
  }
});