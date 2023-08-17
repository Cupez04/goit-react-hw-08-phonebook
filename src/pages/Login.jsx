import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthLoading } from "../redux/auth/selectorauth";
import { login } from "../redux/auth/operationsAuth";
import { Notify } from "notiflix";
import s from "./pages.module.css";
const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  // const { formError, error, isLoading } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    if (email.value && password.value) {
      dispatch(login(credentials));
      Notify.success("Congrats You have been logged");
    } else {
      Notify.failure("Verify the provided info and try again.");
    }
    console.log(credentials);
  };

  return (
    <div
      style={{
        // height: "calc(100vh - 50px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={handleLogin}
        className={s.formContainer}
      >
        <label
          className={s.loginLabel}
        >
          Email
          <input type="email" name="email" className={s.loginInput} />
        </label>
        <label
          className={s.loginLabel}
        >
          Password
          <input type="password" name="password" className={s.loginInput} />
        </label>
        <button type="submit" className={s.loginButton} disabled={isLoading}>
          {isLoading ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Login;
