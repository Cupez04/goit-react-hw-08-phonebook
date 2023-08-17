import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";
import NotFoundPage from "../../pages/NotFoundPage";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks";
import { refresh } from "../../redux/auth/operationsAuth";
import { Loader } from "../Loader/Loader";

const HomePage = lazy(() =>import("../../pages/Home"));
const RegisterPage = lazy(() =>import("../../pages/Register"));
const LoginPage = lazy(() =>import("../../pages/Login"));
const ContactsPages = lazy(() =>import("../../pages/Contacts"));
const CreateContactsPage = lazy(() => import("../../pages/CreateContact"));
const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  },[dispatch])

  return(
    <>
    {isRefreshing ? <Loader/> : (
      <Routes>
         <Route path="/" element={<Layout/>}>
            < Route index element={<RestrictedRoute component={<HomePage/>} redirectTo= "/contacts" />} />
              <Route path="register" element={<RestrictedRoute component={<RegisterPage/>} redirectTo="/contacts"/>} />
              <Route path="login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts"/>} />
              <Route path="contacts" element={< PrivateRoute component={<ContactsPages/>} redirectTo="/"/>} />
              <Route path="create-contacts" element={<PrivateRoute component={<CreateContactsPage/>} redirectTo="/" />} />
              <Route path="*" element={<NotFoundPage/>}/>
            </Route>
      </Routes>
    )}
    </>
  )


}
export default App;