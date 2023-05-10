import { useField } from "formik";
import React from "react";

function CustomInput({ label, ...props }) {                       //... props label dışındaki diğer 3 props u içeriyor
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <>
      <>
        <label>{label}</label>
        <input {...field} {...props} className={meta.error ? "input-error" : ""}/>
      </>
      {meta.error && <div className="error" >{meta.error}</div>}
    </>
  );
}

export default CustomInput;
/* useField hooks, Formik formlarında form elemanlarına bir bağlantı oluşturmak için kullanılır. 
Bu hooks, bir form elemanının değerini, hatalarını ve değişimlerini takip eder ve bunları Formik formlarıyla 
senkronize eder.

Yukarıdaki kod örneği, useField hooks'unun kullanımını gösterir. props parametresi, Formik form elemanına
 özgü özellikleri içerir. useField hooks, bu özellikleri kullanarak form elemanının durumunu (değer, hata vb.) 
 oluşturur ve field ve meta adlı iki değer döndürür.

field değişkeni, form elemanının durumunu içerir ve meta değişkeni, form elemanının durumu hakkında meta bilgileri
 içerir. Bu bilgiler, form elemanının hatalarını, dokunulduğunu vb. içerir.



meta bilgiler nedir
meta bilgileri, form elemanları hakkında ek bilgiler içeren bir nesnedir. useField hooks'u ile kullanılır ve g
enellikle form elemanlarının hata durumlarını ve dokunulduğu durumunu takip etmek için kullanılır. Örneğin,
 meta.error form elemanı için bir hata varsa bunu tutar ve meta.touched form elemanına dokunulduğunda true değerini
  alır. Bu bilgiler genellikle form elemanlarına hata mesajlarını veya girdi onaylamalarını göstermek için 
  kullanılır. */
