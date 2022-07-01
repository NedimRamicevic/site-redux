// about page
import React from "react";

function AboutUs() {
  return (
    <div class="py-16 bg-white">
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
    </div>
  );
}
export default AboutUs;
