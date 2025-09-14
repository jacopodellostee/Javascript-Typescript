import { defineConfig } from 'vite';
import { resolve } from 'path';
import { minify } from 'html-minifier-terser';

export default defineConfig({

  root: 'src',
  
  build: {
    outDir: '../dist', 
    emptyOutDir: true,
    
    minify: 'terser',
    
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    
    cssMinify: true,
    
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      },
      output: {
        entryFileNames: '[name].bundle.js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]'
      },
      plugins: [
        {
          name: 'html-minify-advanced',
          async generateBundle(options, bundle) {
            for (const fileName of Object.keys(bundle)) {
              if (fileName.endsWith('.html')) {
                const htmlAsset = bundle[fileName];
                if (htmlAsset.type === 'asset' && typeof htmlAsset.source === 'string') {
                  try {
                    htmlAsset.source = await minify(htmlAsset.source, {
                      collapseWhitespace: true,
                      removeComments: true,
                      removeRedundantAttributes: true,
                      removeScriptTypeAttributes: true,
                      removeStyleLinkTypeAttributes: true,
                      useShortDoctype: true,
                      minifyCSS: true,
                      minifyJS: true,
                      removeEmptyAttributes: true,
                      removeAttributeQuotes: true,
                      collapseInlineTagWhitespace: true,
                      trimCustomFragments: true,
                      removeOptionalTags: false, 
                      minifyCSS: {
                        level: 2 
                      },
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
    
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari12']
  },
  
  server: {
    port: 3000,
    open: true
  },
  
  css: {
    postcss: {
      plugins: []
    }
  },
  
  publicDir: '../static',
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@images': resolve(__dirname, 'static/images')
    }
  }
});