import React from "react";
import CustomInput from "./CustomInput";
import { Formik, Form } from "formik";
import { advancedSchema } from "../Schema";
import CustomSelect from "./CustomSelect";
import CustomChechBox from "./CustomChechBox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    //isSubmit in false olmasını 1 saniye geciktiriyor
    setTimeout(resolve, 1000);
  });

  actions.resetForm();
};
function Portal() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({isSubmitting}) => (
          <Form>
            {/*  name formikteki value adı ve schema daki isimlerin 3 aynı olmalı */}
            <CustomInput
              label="Kullanıcı Adı:"
              name="username"
              type="text"
              placeholder="Bir kullanıcı adı belirleyin"
            />
            <CustomSelect
              label="Üniversite"
              name="university"
              placeholder="Lütfen üniversitesinizi seçiniz"
            >
              <option value="" >Lütfen üniversitenizi seçiniz </option>
              <option value="bogaziçi" >Boğaziçi Üniversitesi</option>
              <option value="gsü" >Galatasaray Üniversitesi</option>
              <option value="edtü">ODTÜ</option>
              <option value="itü" >İTÜ</option>
              <option value="Alkü">ALKÜ</option>
              <option>ALKÜ</option>
            </CustomSelect>
            <CustomChechBox type="checkbox" name="isAccepted"  />
            <button disabled={isSubmitting} type="submit" >Kaydet</button>
            <Link className="formLink" to="/" >Ana forma git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Portal;
