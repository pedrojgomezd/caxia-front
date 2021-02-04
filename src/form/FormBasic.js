import React from "react";
import Button from "../common/Button";
import Input from "./Input";

const FormBasic = ({ formik, loading, setFile, containtFile = false }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mt-12">
        <div className="">
          <Input
            label="Name"
            iconLeft="User"
            placeholder="Name"
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            touched={formik.touched.name}
            error={formik.errors.name}
          />
        </div>
        <div>
          <Input
            iconLeft="Hash"
            placeholder="Code"
            label="Code"
            type="text"
            name="code"
            onChange={formik.handleChange}
            value={formik.values.code}
            touched={formik.touched.code}
            error={formik.errors.code}
          />
        </div>
        <div>
          <Input
            label="Birth Day"
            iconLeft="Calendar"
            placeholder="Birth Day"
            label="Birth Day"
            type="date"
            name="birthday"
            onChange={formik.handleChange}
            value={formik.values.birthday}
            touched={formik.touched.birthday}
            error={formik.errors.birthday}
          />
        </div>
        {containtFile && (
          <div>
            <Input
              label="Photo"
              iconLeft="Camera"
              placeholder="Photo"
              type="file"
              name="avatar"
              onChange={(e) => {
                formik.handleChange(e);
                setFile(e.currentTarget.files[0]);
              }}
              value={formik.values.avatar}
              touched={formik.touched.avatar}
              error={formik.errors.avatar}
            />
          </div>
        )}
      </div>
      <div className="">
        <Button
          label="Register"
          className="w-full justify-center"
          type="submit"
          variant="primary"
          {...{ loading }}
        />
      </div>
    </form>
  );
};

export default FormBasic;
