import './styles/index.scss';
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'
import Stats from './Pages/Charts/Stats/index';
import PaymentsCard from './Pages/Payments/PaymentsCard';
import Dashboard from './Pages/Dashboard/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/pages"
          element={
            <Layout>
              <NotFound/>
            </Layout>
          }
        />
      <Route
          path="/stats"
          element={
            <Layout>
              <Stats/>
            </Layout>
          }
        />
      <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard/>
            </Layout>
          }
        />
      <Route
          path="/payments"
          element={
            <Layout>
              <PaymentsCard/>
            </Layout>
          }
        />
        <Route path="/user-dashboard" element={<Layout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
