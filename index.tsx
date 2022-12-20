import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const initElement = document.querySelector('#app')

if (!initElement) {
    console.error('No initElement was found')
} else {
    const root = createRoot(initElement)

    root.render(<App />)
}
