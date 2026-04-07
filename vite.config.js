// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-background',
      closeBundle() {
        fs.copyFileSync(
          resolve(__dirname, 'background.js'),
          resolve(__dirname, 'dist/background.js')
        )
      }
    }
  ],
})
