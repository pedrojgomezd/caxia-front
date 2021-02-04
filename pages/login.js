import { useState } from "react";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../src/common/Button";
import Input from "../src/form/Input";
import { useAuth } from "../services/useAuthtintication";
import LoadingComponent from "../src/common/LoadingComponent";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email es requerido!"),
  password: Yup.string().required("Password es requerido!"),
});

export default function Login() {
  const [loading, setLoding] = useState(false);
  const { login, loading: userLoading } = useAuth();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      setLoding(true);
      login(values.email, values.password);
    },
    validationSchema,
  });

  if (userLoading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <Head>
        <title>Caxia Test | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex bg-gradient-to-tr from-blue-200 to-indigo-500 w-full h-screen items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white w-96 rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="p-4 px-6 text-2xl font-semibold text-gray-900">
            Login
          </div>
          <div className="p-6">
            <Input
              iconLeft="User"
              placeholder="email"
              label="Email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              touched={formik.touched.email}
              error={formik.errors.email}
            />
            <Input
              iconLeft="Lock"
              placeholder="password"
              label="Password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              touched={formik.touched.password}
              error={formik.errors.password}
            />
            <div className="mt-8">
              <Button
                label="Login"
                className="w-full justify-center"
                type="submit"
                variant="primary"
                {...{ loading }}
              />
            </div>
          </div>
          <div className="p-4 text-center text-sm text-gray-400 font-light">
            Design and Developer by Pedro J Gomez
          </div>
        </form>
      </main>
    </div>
  );
}
