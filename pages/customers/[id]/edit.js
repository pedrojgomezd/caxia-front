import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

import { clientHttp } from "../../../services/clientHttp";
import Layouts from "../../../src/Layouts";
import FormBasic from "../../../src/form/FormBasic";

const validationSchema = Yup.object().shape({
  code: Yup.string().required("Code is required!"),
  name: Yup.string().required("Name is required!"),
  birthday: Yup.string().required("Birth Day is required!"),
});

const CustomersDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);

  const [customer, setCustomer] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
      birthday: "",
    },

    onSubmit: (value) => {
      setLoading(true);
      clientHttp
        .put(`customers/${id}`, value)
        .then(({ data }) => {
          router.push(`/customers/${data.id}`);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    },
    validationSchema,
  });

  const fetchCustomer = useCallback(async () => {
    setLoading(true);
    const { data } = await clientHttp.get(`customers/${id}`);
    setCustomer(data);
    setLoading(false);
    formik.setValues({
      name: data.name,
      code: data.code,
      birthday: data.birthday,
    });
  }, [id]);

  useEffect(() => {
    if (id >= 1 && id !== undefined) {
      fetchCustomer();
    }

    return () => true;
  }, [id]);

  return (
    <Layouts title="Customer">
      <div>
        <h3 className="text-2xl text-gray-700 font-semibold">
          Customer: {customer.name}
        </h3>
      </div>
      <div className="flex gap-4">
        <div className="w-3/12 bg-white p-2">
          <img src={customer.avatar} className=" rounded-sm" />
        </div>
        <div className="w-9/12">
          <FormBasic {...{ formik, loading }} />
        </div>
      </div>
    </Layouts>
  );
};

export default CustomersDetails;
