import { useField } from "formik";
import React from "react";

function CustomChechBox({ label, ...props }) {     //... props label dışındaki diğer 3 props u içeriyor
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <>
      <div className="checkbox">    {/*  checkbox da input */}
        <input
          {...field}
          {...props}
          className={meta.error ? "input-error" : ""}
        />
        <span>Kullanım Koşullarını Kabul Ediyorum.</span>
      </div>

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomChechBox;
