import React from "react";

const TsandcS = () => {
  return (
    <div className="justify-center items-center border-t-2 p-8 border-b-2 mb-10 rounded-2xl text-center space-y-8 w-2/3">
      <h1 className="text-2xl font-extrabold">Terms and Conditions</h1>

      <p className="text-lg">This store is a small online clothing reseller offering thrifted items for sale. We aim to provide accurate descriptions and quality products, but please read each listing carefully before purchase.</p>

      <div className="space-y-4">
        <h2 className="text-xl font-extrabold">Product Descriptions</h2>
        <p>We strive to display all items as accurately as possible. Please note:</p>
        <ul className="list-disc pl-8 text-left space-y-2">
          <li>Colours may vary slightly due to monitor settings.</li>
          <li>Pre-loved items may show signs of wear, which will be detailed in the product description.</li>
          <li>All items are sold as is, unless otherwise stated.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-extrabold">Pricing and Payment</h2>
        <p>Prices listed on the website are subject to change as per our “Steal” Policy:</p>
        <ul className="list-disc pl-8 text-left space-y-2">
          <li>If an individual “steals” an item via contacting the seller, the price initially listed now retails for AED 10 higher.</li>
          <li>There is no cap on the number of times an item can be “stolen”.</li>
          <li>Payment is accepted through physical payments.</li>
          <li>Items requested will be delivered via in-person delivery.</li>
          <li>Items are loose and unpackaged. To request packaging, please notify the seller at the point of request.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-extrabold">Intellectual Property</h2>
        <p>All content on this website (including photos, logos, and product descriptions) is the property of this store and may not be used without permission.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-extrabold">Limitation of Liability</h2>
        <p>This store is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services. We do not guarantee that our website will always be available or error-free.</p>
      </div>


    </div>
  );
};

export default TsandcS;