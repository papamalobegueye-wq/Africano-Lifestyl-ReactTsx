import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import ShopPage from "./pages/shop";
import HomeLayout from "./layout/home-Layout";
import HomePage from "./pages/home";
import AuthLayout from "./layout/auth-Layout";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import DashboardLayout from "./layout/dashboard-Layout";
import ProfilPage from "./pages/dashboard/profil";
import FavoryPage from "./pages/dashboard/favory";
import DetailShop from "./pages/dashboard/detailShop/detail-shop";
import ForgetPassword from "./pages/auth/forgetPassword";
import { Toaster } from 'sonner'

export default function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" richColors  />
      <Routes>
        {/* Accueil Routes */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/:id" element={<DetailShop />} />

        </Route>

        {/* Authentification Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgetPassword" element={<ForgetPassword />}/>
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dash" element={<DashboardLayout />}>
          <Route path="profil" element={<ProfilPage />} />
          <Route path="favory" element={<FavoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
