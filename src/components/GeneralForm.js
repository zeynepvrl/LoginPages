import React from "react"; //rfce
import { useFormik } from "formik";
import { basicSchema } from "../Schema";
import { Link } from "react-router-dom";

function GeneralForm() {

  const onSubmit= async (values, actions)=>{
    console.log(values);
    console.log(actions);

    await new Promise((resolve)=>{                  //isSubmit in false olmasını 1 saniye geciktiriyor
      setTimeout(resolve,1000);
    })

    actions.resetForm();
  }

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormik({            //error Schema schema dosyasındaki '' içindeki metinleri içeriyor
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordconfirm: "",                                                                  /*handleSubmit tetiklenince useFormik içirisindeki onSubmiti tetikleyecek bu fonksiyonun içeriği form tetiklendiğinde olacak olanları içerecek************** */
    },
    validationSchema:basicSchema,          //fonsksiyonlar values lardan ayrı yazılır! hj
    onSubmit,
  });
  console.log(values);
  return (
      <form onSubmit={handleSubmit} >                                  
        <div className="inputDiv" >
          <label>Email </label>
          <input
            type="email"
            value={values.email}
            id="email"
            onChange={handleChange}
            placeholder="Mail adresinizi giriniz"
            className={errors.email ? 'input-error' : ''}      
          />
        </div> 
        {errors.email && <p className="error">{errors.email}</p>}                    {/* && varsa demek */}
        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="number"
            value={values.age}
            id="age"
            onChange={handleChange}
            placeholder="Yaşınızı girin"
            className={errors.age ? 'input-error' : ''}
          />
        </div>
        {errors.age && <p className="error">{errors.age}</p>}
        <div className="inputDiv">
          <label>Şifreniz</label>
          <input
            type="password"
            value={values.password}
            id="password"
            onChange={handleChange}
            placeholder="Şifrenizi giriniz"
            className={errors.password ? 'input-error' : ''} 
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="inputDiv">
          <label>Şifre Doğrulama</label>
          <input
            type="password"
            value={values.passwordconfirm}
            id="passwordconfirm"
            onChange={handleChange}
            placeholder="Şifrenizi doğrulayın"
            className={errors.passwordconfirm ? 'input-error' : ''}
          />
        </div>
        {errors.passwordconfirm && <p className="error">{errors.passwordconfirm}</p>}
        <button disabled={isSubmitting} type="submit" >Kaydet</button>        {/*  isSubmitting bir formik parametresi submit bitince false veya devam ederken true a eşit oluyor */}
        <Link className="formLink" to="/portal" >Portala Git</Link>
      </form>
  );
}
export default GeneralForm;
/* Bu kod bloğu, Formik kütüphanesindeki useFormik() hook'unun kullanımını göstermektedir.
 Bu hook, React form elemanları için form yönetimi sağlamak için kullanılır.

Bu örnekte, initialValues özelliğiyle başlatılan ve email ve age alanlarını içeren bir form 
değerleri nesnesi oluşturulur. Daha sonra, useFormik() hook'u ile bu değerler ve form elemanlarının değişikliklerine
 yanıt olarak çalıştırılacak işlevler alınır ve values, errors, handleChange ve handleSubmit değişkenleriyle ilgili
  işlevlere atanır.

values değişkeni, form elemanlarındaki girilen verileri tutar. errors değişkeni, form elemanlarındaki geçersiz 
verileri tutar. handleChange fonksiyonu, form elemanlarında herhangi bir değişiklik olduğunda çalıştırılır ve form 
verilerini günceller. handleSubmit fonksiyonu, form gönderildiğinde çağrılır ve form verilerini işlemek için bir 
işlev çağırır. */

/* HTML'de "id" özelliği, bir elementi tanımlamak ve daha sonra JavaScript ile erişmek için kullanılır. Bu örnekte,
 "passwordconfirm" id'si, şifre doğrulama alanının formdaki diğer alanlardan ayrılmasını ve özellikle formun bu
  alanının değerlerine erişmek istediğimizde bu id'yi kullanarak erişebilmemizi sağlar. Örneğin, JavaScript kodunda,
   bu alanın değerine erişmek istediğimizde "document.getElementById('passwordconfirm').value" kullanabiliriz */


   /* react promise fonksiyonu ne işe yarar
   React Promise, React'te kullanılan bir pakettir ve özellikle API çağrıları gibi asenkron işlemleri yönetmek için 
   tasarlanmıştır. Promise, bir asenkron işlemin sonucunu temsil eden bir nesnedir. React Promise, bu nesneyi 
   kullanarak, API çağrıları gibi asenkron işlemleri yönetmek için daha kolay bir yol sağlar.
   
   React Promise, bir bileşen içinde bir işlemi yürütürken, işlemin başarılı veya başarısız olduğunu belirten bir 
   durumunu depolamak için bir state (durum) kullanır. Bu durum, işlem tamamlandığında güncellenir ve sonucunu 
   bileşenin durumunda depolar. Bu nedenle, bileşen yeniden render edildiğinde, sonucu görüntüleyebilirsiniz.
   
   React Promise, ayrıca, işlem sırasında yüklenme durumunu da gösterebilir. Bu sayede, kullanıcıya, işlemin
    tamamlanmasını beklerken bir yüklenme göstergesi gösterilebilir.
   
   await new Promise((resolve)=>{
         setTimeout(resolve,1000);
       }) nedir
   
   Bu kod parçası, 1 saniyelik bir gecikme (1,000 milisaniye) ekleyerek bir Promise döndürür. Bu Promise, s
   adece beklemek için kullanılır ve hiçbir şey döndürmez. Bu, özellikle asenkron fonksiyonlarla çalışırken
    bir süre gecikme sağlamak istediğiniz durumlarda kullanışlı olabilir. Örneğin, bir API'den veri almadan önce 
    bir süre beklemeniz gerekiyorsa, bu kod parçasını kullanarak beklemeyi gerçekleştirebilirsiniz.
   
   burdaki resolve nedir
   resolve bir parametre olarak geçirilen bir fonksiyondur ve Promise'in durumunu fulfilled (gerçekleşmiş)
    olarak değiştirir. Promise'in bir değerle çözülmesini sağlar. Yani setTimeout fonksiyonu 1 saniye sonra 
    tamamlandığında, Promise'in durumu gerçekleşmiş (fulfilled) olur ve işlem sonlanmış olur. */
