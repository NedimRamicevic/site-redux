// about page
import React from "react";

function AboutUs() {
  return (
    <div class="py-16 bg-white">
      <div className="flex max-w-7xl m-auto mt-5 mb-14">
        <div className="w-1/2">
          <div className=" text-5xl font-bold my-5">
            Pres Makina
          </div>
          <div className=" text-red-700 mb-5">
            80 Yıllık Tecrübe
          </div>
          <p className=" leading-7 ">
            "Bugün dünden daha iyiyiz, yarın ise mükemmelliğe adanmış yeni bir gün sadece…" <br /><br />
            1940 yılında küçük bir atölyede üretime başlayan PRES MAKİNA 80. yılını doldurmanın haklı gururunu yaşıyor.
            80 yılı aşan tecrübesiyle müşterisine, çalışanına en iyiyi sunma çabasında olan ve koşulsuz müşteri memnuniyetini
            her zaman ilke edinen firmamız kuruluşunun ilk günlerindeki heyecanını kaybetmeden, gelecekte de yatırımlarını
            arttırarak, Beton Briket Tesisi ve Beton Parke Tesisi üretiminde liderliğini devam ettirecektir. <br /><br />
            PRES MAKINA olarak makina sektöründe; özgün ve kaliteli ürünlerimiz, nitelikli insan kaynağımız ve firma
            değerlerimizle yakaladığımız başarıyı gelecekte de sürdüreceğimize inanıyoruz. Özellikle son yıllarda uluslararası
            bazı dev markaların da pazara girmesiyle doğan rekabet ortamında, sahip olduğumuz üstünlükleri lehimize kullanıp,
            geçmişte olduğu gibi, önümüzdeki dönemlerde de yılmadan çalışmaya devam edeceğiz.
          </p>
        </div>
        <div className="w-1/2">
          <div className="m-auto rounded-xl border-[1px] w-2/3">
            <img className="rounded-xl" src={require('../assets/jpg/about.jpg')} />
          </div>
        </div>
      </div>
      <div>
        <iframe className="m-auto" width="560" height="315" src="https://www.youtube.com/embed/3095_w_666w" frameborder="0" allowFullScreen='true' ></iframe>
      </div>
      <div class="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div class="m-auto text-center lg:w-7/12">
          <h2 class="text-2xl text-gray-700 font-bold md:text-4xl">
            Your favorite companies are our partners.
          </h2>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <div class="p-4">
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg"
              class=""
              alt=""
            />
          </div>
          <div class="p-4">
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png"
              class="w-32 "
              alt=""
            />
          </div>
          <div class="p-4">
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png"
              class="w-32 "
              alt=""
            />
          </div>
          <div class="p-4">
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png"
              class="w-32 "
              alt=""
            />
          </div>
          <div class="p-4">
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg"
              class="w-32"
              alt=""
            />
          </div>
          <div class="p-4">
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg"
              class="w-32"
              alt=""
            />
          </div>
          <div class="p-4">
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg"
              class="w-20"
              alt=""
            />
          </div>
          <div class="p-4">
            <img
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png"
              class="w-24"
              alt=""
            />
          </div>
        </div>
      </div>
    </div >
  );
}
export default AboutUs;
