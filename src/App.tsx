import './styles/index.scss';
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'
import Stats from './Pages/Charts/Stats/index';
import PaymentsCard from './Pages/Payments/PaymentsCard';
import Dashboard from './Pages/Dashboard/Dashboard';
import GamePlay from './Pages/GamePlay/GamePlay';
import Organization from './Pages/Organization/Organization';
import Profile from './Pages/Profile/Profile';
function App() {
  let token: any =localStorage.getItem('user')
  token=JSON.parse(token)?.accessToken?.token
  console.log("app token ==== ", token);

  return (
    <BrowserRouter>
      <Routes>
        { 
          !token ?
            <>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/sign-up" element={<SignUp />}></Route>
            </>
          :
      <>
      <Route
        path="/pages"
        element={<Layout>
          <NotFound />
        </Layout>} />
        <Route
          path="/stats"
          element={<Layout>
            <Stats />
          </Layout>} />
          <Route
          path="/dashboard"
          element={<Layout>
            <Dashboard />
          </Layout>} />
          <Route
          path="/payments"
          element={<Layout>
            <PaymentsCard />
          </Layout>} />
          <Route
          path="/game_play"
          element={<Layout>
            <GamePlay />
          </Layout>} />
          <Route
          path="/organization"
          element={<Layout>
            <Organization />
          </Layout>} />
          <Route
          path="/profile"
          element={<Layout>
            <Profile />
          </Layout>} />
          <Route path="/user-dashboard" element={<Layout />}>
            </Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<NotFound />}></Route></>
}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
