import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { GameContext } from './hooks/gamecontext.ts'
import App from './App.tsx'
import Provider from './provider.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Runner from './runner.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  </StrictMode>,
)
