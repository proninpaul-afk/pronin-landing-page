import React from 'react'
import ReactDOM from 'react-dom/client'

const root = document.getElementById('root')

if (!root) {
  document.body.innerHTML = '<h1>ROOT NOT FOUND</h1>'
} else {
  ReactDOM.createRoot(root).render(
    <div style={{ padding: 40 }}>
      <h1>React работает</h1>
      <p>Если ты это видишь — проблема внутри App</p>
    </div>
  )
}
