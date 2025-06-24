import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/jsx_program_chris-s-_practice_one',
  plugins: [tailwindcss(),
    react()
  ],
 
})
