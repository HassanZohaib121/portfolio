import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ProjectPage from './pages/Project'
import CVPage from './pages/CV'

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
