import { useField } from "formik";
import React from "react";

function CustomSelect({ label, ...props }) {                       //... props label dışındaki diğer 3 props u içeriyor
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <>
      <>
        <label>{label}</label>
        <select {...field} {...props} className={meta.error ? "input-error" : ""}/>
      </>
      {meta.error && <div className="error" >{meta.error}</div>}
    </>
  );
}

export default CustomSelect;