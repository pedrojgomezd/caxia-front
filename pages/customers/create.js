import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";

import { clientHttp } from "../../services/clientHttp";
import Card from "../../src/Card";
import Button from "../../src/common/Button";
import IconElement from "../../src/common/IconElement";
import FormBasic from "../../src/form/FormBasic";
import Layouts from "../../src/Layouts";

const validationSchema = Yup.object().shape({
  code: Yup.string().required("Code is required!"),
  name: Yup.string().required("Name is required!"),
  birthday: Yup.string().required("Birth Day is required!"),
  avatar: Yup.mixed().required("A photo is required"),
});

const CustomerCreate = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const route = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
      birth_day: "",
      avatar: null,
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
          setLoading(false);
          route.push(`/customers/${data.id}`);
        })
        .catch(() => setLoading(false));
    },
    validationSchema,
  });
  return (
    <Layouts title="Create Customer">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-2xl text-gray-700 font-semibold flex gap-2 items-center">
          <IconElement icon="User" />
          Customers create
        </h3>
        <div>
          <Link href="/customers">
            <Button label="Back" icon="ArrowLeft" variant="default" />
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <Card>
          <FormBasic containtFile={true} {...{ formik, loading, setFile }} />
        </Card>
      </div>
    </Layouts>
  );
};

export default CustomerCreate;
