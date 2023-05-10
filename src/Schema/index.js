import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/; //bu regex ifadesini tanımlamak için matches() kullanılacak

export const basicSchema = yup.object().shape({
  //basicSchema yı GeneralGorm.js deki useFormik yapısının içine ekleyeceksin
  email: yup
    .string()
    .email("Lütfen email formatına uygun bir mail yazınız.")
    .required("Email girmek zorunludur."), //bu email age vs isimler useFormikteki ile eşleşmeli aynı olmalı
  age: yup
    .number("Lütfen sayı giriniz")
    .positive("Lütfen positif bir sayı giriniz.")
    .integer("Lütfen tamsayı bir değer giriniz.")
    .required("Yaş belirtilmesi zorunludur."),
  password: yup
    .string()
    .min(5, "Şifre minimum 5 karakter olmalı.")
    .matches(passwordRules, {
      message:
        "Şifre en az bir büyük harf, bir küçük harf ve bir rakamran oluşmalı.",
    })
    .required("Şifre belirlemek zorunludur"),
  passwordconfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Şifre doğrulamak zorunludur."),
});

export const advancedSchema = yup.object().shape({
    username:yup.string().min(3,'Kullanıcı adı minimum 3 karakter olabilir').required('Kullanıcı adı belirlemelisiniz'),
    university:yup.string().oneOf(['bogaziçi','gsu','odtu','itü','Alkü'],'Lütfen üniversitenizi seçiniz').required('Bir üniversite seçmeilisiniz'),
    isAccepted: yup.boolean().oneOf([true],'Kullanım koşullarını kabul etmelisiniz'),
})

/* regex formatı nedir nasıl tanımlanır

Regex, regular expression kelimelerinin kısaltmasıdır. Düzenli ifadeler için kullanılır ve metinlerdeki belirli 
kalıpları eşleştirmek, aramak veya değiştirmek için kullanılır.

Regex, / karakterleri arasında belirtilen bir desenle tanımlanır. Desen, özel karakterler, metinler ve belirli 
işlevlerin bir kombinasyonunu içerebilir.

Örneğin, bir regex deseni, bir metindeki e-posta adreslerini bulmak için kullanılabilir. Bu desen, genellikle 
/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ şeklinde ifade edilir. Bu desenin açıklaması şu şekildedir:

^ karakteri, desenin metnin başından itibaren eşleşmesi gerektiğini belirtir.
([a-z0-9_\.-]+) ifadesi, bir kullanıcı adının eşleşmesi gerektiğini belirtir. Kullanıcı adı, küçük harf, rakam, 
alt çizgi, nokta ve kısa çizgi içerebilir ve en az bir karakterden oluşmalıdır.
@ karakteri, kullanıcı adı ve etki alanı adı arasındaki ayırıcıdır.
([\da-z\.-]+) ifadesi, etki alanı adının eşleşmesi gerektiğini belirtir. Etiki alan adı, rakam, küçük harf, nokta
 ve kısa çizgi içerebilir ve en az bir karakterden oluşmalıdır.
\. ifadesi, nokta karakterinin bir kaçış karakteri ile belirtildiğini gösterir.
([a-z\.]{2,6}) ifadesi, etki alanı adının sonuna eşleşmesi gerektiğini belirtir. Etiki alan adı, küçük harflerden
 ve noktalardan oluşan bir dizi olmalıdır ve en az 2 ve en fazla 6 karakter uzunluğunda olmalıdır.
$ karakteri, desenin metnin sonuna kadar eşleşmesi gerektiğini belirtir.
Bu şekilde, regex desenleri belirli kalıpları tanımlayarak metinleri işlemek için kullanılabilir.
 */
