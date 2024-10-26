import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginHeader from './page/LoginHeader';
import LoginPage from './page/LoginPage';
import MainHeader from './page/MainHeader';
import MainPage from './page/MainPage';
import RegisterHeader from './page/RegisterHeader';
import RegisterPage from './page/RegisterPage';
import { MatchingQSubmit } from './page/MatchingQSubmit'; 
import { MatchingQSubmit2 } from './page/MatchingQSubmit2'; 
import { Loading } from './page/Loading'; 
import { LoadingSuccess } from './page/LoadingSuccess'; 
import { Card } from './page/Card'; 
import { MatchingList } from './page/MatchingList'; 
import { SignUp } from './page/SignUp';
import SignComplete from './page/SignComplete';
import Profile from './page/Profile';
import Menu from './page/Menu';
import MyHistoryPage from './page/MyHistoryPage';

function App() {
  return (
    <Router>
      <div>
        {/* <Routes>
          <Route path="/" element={<MainHeader />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/matching-submit" element={<MatchingQSubmit />} />
          <Route path="/matching-submit-2" element={<MatchingQSubmit2 />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/loading-success" element={<LoadingSuccess />} />
          <Route path="/card" element={<Card />} />
          <Route path="/matching-list" element={<MatchingList />} />
        </Routes> */}
        {/* <SignComplete/> */}
        {/* <Profile/> */}
        <MyHistoryPage/>
      </div>
    </Router>
  );
}

export default App;
