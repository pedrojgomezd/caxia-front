import Head from "next/head";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { clientHttp } from "../services/clientHttp";
import Link from "next/link";
import FormBasic from "../src/form/FormBasic";

const validationSchema = Yup.object().shape({
  code: Yup.string().required("Code is required!"),
  name: Yup.string().required("Name is required!"),
  birthday: Yup.string().required("Birth Day is required!"),
  avatar: Yup.mixed().required("A photo is required"),
});

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
      birthday: "",
    },

    onSubmit: (value) => {
      setLoading(true);
      const form = new FormData();
      for (let v in value) {
        form.append(v, value[v]);
      }

      form.append("avatar", file);

      clientHttp
        .post("customers/register", form)
        .then(({ data }) => {
          formik.setValues({
            name: "",
            code: "",
            birthday: "",
            avatar: null,
          });
          setLoading(false);
          setSuccess(true);
        })
        .catch(() => setLoading(false));
    },
    validationSchema,
  });
  return (
    <div>
      <Head>
        <title>Caxia Test - Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex bg-indigo-600 h-screen">
        <div className="w-6/12">
          <div className="flex flex-col gap-4  justify-center items-center h-screen">
            <h2 className="text-6xl text-white font-extrabold">Welcome.</h2>
            <Link href="/login">
              <a className="p-2 px-8 text-gray-800 font-bold bg-white rounded-sm">
                Login
              </a>
            </Link>
          </div>
        </div>
        <div className="w-6/12 bg-white p-4">
          <div className="text-4xl font-bold text-gray-700">New Register</div>
          <div className="text-gray-400 text-base">
            Puede registrar sus datos, para que pueda pertencer a nuestra base
            de datos.
          </div>
          {success && (
            <div className="bg-green-400 text-green-900 p-4 rounded-sm font-bold">
              Register succesful. Can add other register.
            </div>
          )}
          <FormBasic containtFile={true} {...{ formik, loading, setFile }} />
        </div>
      </main>
    </div>
  );
}
