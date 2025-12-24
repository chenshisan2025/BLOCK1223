import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Rewards } from './pages/Rewards';
import { Withdraw } from './pages/Withdraw';
import { Events } from './pages/Events';
import { Leaderboard } from './pages/Leaderboard';
import { Invite } from './pages/Invite';
import { Transparency } from './pages/Transparency';
import { Help } from './pages/Help';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="arch-bg"></div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/events" element={<Events />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
