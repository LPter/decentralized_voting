import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomPage';
import CreatePollPage from './pages/CreatePollPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PollPage from './pages/PollPage';
import RequireAuth from './Auth/RequireAuth';
import MypollPage from './pages/MyPoll';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>

      <Route element={<RequireAuth/>}>
        <Route path='/create' element={<CreatePollPage/>}></Route>
      </Route>

      <Route element={<RequireAuth/>}>
        <Route path='/poll/:id' element={<PollPage/>}></Route>
      </Route>

      <Route element={<RequireAuth/>}>
        <Route path='/my-poll/:id' element={<MypollPage/>}></Route>
      </Route>
      
    </Routes>
  );
}

export default App;
