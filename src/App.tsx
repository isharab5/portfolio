import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ProfilePage from './pages/ProfilePage'
import AgenticAIPage from './pages/AgenticAIPage'
import MachineLearningPage from './pages/MachineLearningPage'
import FullStackPage from './pages/FullStackPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/agentic-ai/*" element={<AgenticAIPage />} />
          <Route path="/machine-learning/*" element={<MachineLearningPage />} />
          <Route path="/full-stack/*" element={<FullStackPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
