import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/npm run dev
export default defineConfig(({ mode }) => ({
  plugins: [vue()],

   /* Si le site est en mode production (bref lorsque le site est live) */
  base: mode === 'production' 
  ? '/webapp-creative-hebert-nassif-lavoie/' /* ← La base du projet est le dossier correspondant au nom de votre repo GitHub*/

  /* Sinon, le site est en mode développement local */
  : '/' /* ← La base du projet est à la racine */
}))
