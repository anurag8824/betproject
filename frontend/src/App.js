import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import CricketBet from './components/CricketBet';
import LiveCasino from './components/LiveCasino';
import CasinoBet from './components/CasinoBet';
import Slot from './pages/Slot';
import Fantasy from './pages/Fantasy';




function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cricket-bet/:id" element={<CricketBet />} />
          <Route path="owncasino" element={<LiveCasino />} />
          <Route path="owncasino/:name" element={<CasinoBet />} />

          <Route path="slot" element={<Slot />} />
          <Route path="fantasy" element={<Fantasy />} />





         



          <Route path="ddd" element={<NoPage />} />
        </Route>

      </Routes>
    </BrowserRouter >


  );
}

export default App;