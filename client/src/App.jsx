"use client";
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <main className="app transition-all ease-in">
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Home />
        <Canvas />
        <Customizer />
      </ErrorBoundary>
    </main>
  )
}

export default App
