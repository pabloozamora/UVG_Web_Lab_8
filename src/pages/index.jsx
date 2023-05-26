import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MazePage from './MazePage/MazePage'
import WelcomePage from './WelcomePage/WelcomePage'
import GameOverPage from './GameOverPage/GameOverPage'

const Page = () => (
  <Routes>
    <Route path="/maze" element={<MazePage width={5} height={5} />} />
    <Route path="/" element={<WelcomePage />} />
    <Route path="/GameOverPage" element={<GameOverPage />} />
  </Routes>
)

export default Page
