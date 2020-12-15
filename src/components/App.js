import React from 'react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import RecommendedVideos from "./RecommendedVideos" 
import "./css/App.css"

function App() {
  return (
    <div>
    <Header />
    <div className="page">
      <Sidebar />
      <RecommendedVideos />
    </div>
      
    </div>
  )
}

export default App
