import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/auth/operationsAuth";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { selectIsAuthLoading } from "../redux/auth/selectorAuth";
import s from './pages.module.css';
const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const credentials = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    if (name.value && email.value && password.value) {
      dispatch(register(credentials));
      Notify.success("Congrats You have been registred");
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
      <h1>Register</h1>
      <form
      className={s.formContainer}
        onSubmit={handleSubmit}
      >
        <label
        className={s.formLabel}
          // style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Name
          <input type="text" name="name" className={s.formInput} />
        </label>

        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Email
          <input type="email" name="email"  className={s.formInput}/>
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Password
          <input type="password" name="password"  className={s.formInput}/>
        </label>
        <button type="submit" className={s.formButton} disabled={isLoading}>
          {isLoading ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Register;
