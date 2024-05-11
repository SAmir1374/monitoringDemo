import React, { useEffect, useState } from "react";
import InputGroup from "../components/complix/InputGroup";
import Button from "../components/ui/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { AuthLogin } from "../apis/Auth/Login";
import store from "../redux/store";
import { setAccessToken } from "../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/Loader";
import toast from "react-hot-toast";
import "../styles/pages/login.css";
import { useSelector } from "react-redux";

function Login() {
  const [myLoader, setMyLoader] = useState(false);
  const { accessToken } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const { mutate, isSuccess, status, isError, data } = AuthLogin();

  const SignupSchema = Yup.object().shape({
    username: Yup.string().email("نام کاربری را به فرم ایمیل وارد کنید").required("این فلید اجباری است"),
    password: Yup.string().min(8, "تعداد کاراکتر ها باید بیشتر از 8 تا باشد").required("این فلید اجباری است"),
  });

  const formik = useFormik({
    initialValues: {
      username: localStorage.getItem("remeber_Me")
        ? JSON.parse(localStorage.getItem("remeber_Me")).username
        : "",
      password: localStorage.getItem("remeber_Me")
        ? JSON.parse(localStorage.getItem("remeber_Me")).password
        : "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      setMyLoader(true);
      localStorage.setItem("remeber_Me", JSON.stringify(values));
      // mutate({ Email: values.username, Password: values.password, RememberMe: true });
      // isError && !isSuccess && toast.error("خطا");
      
      setTimeout(() => {
        setMyLoader(false)
        navigate("/ImageWall");
        store.dispatch(setAccessToken('hello welcome'));
        resetForm();
      }, 1000 * 2);
    },
  });

  useEffect(() => {

    status === "error" && setMyLoader(false);
    // isError && !isSuccess && toast.error("خطا");
    if (accessToken) {
      navigate("/ImageWall");
    }
    if (isSuccess) {
      toast.success("ورود با موفقیت");
      setMyLoader(false);
      store.dispatch(setAccessToken(data?.token));
      // navigate("/ImageWall");
    }
  }, [formik.values, isSuccess, status]);

  return (
    <div className="LoginContainer">
      {myLoader && <Loader label="کمی صبر کنید" className={"loadingClass"} />}
      <form onSubmit={formik.handleSubmit} className="form-group">
        <InputGroup
          icon={<RiLockPasswordLine />}
          inputName={"username"}
          label={"نام کاربری"}
          inputClassName={"glassInput"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          inputValue={formik.values.username}
          helperText={formik.errors.username ? formik.errors.username : ""}
        />
        <InputGroup
          icon={<FaUserAlt />}
          inputName={"password"}
          inputType={"password"}
          label={"رمز عبور"}
          inputClassName={"glassInput"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          inputValue={formik.values.password}
          helperText={formik.errors.password ? formik.errors.password : ""}
        />
        <Button disabled={!(!!formik.values.username & !!formik.values.password)} type={"submit"}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
