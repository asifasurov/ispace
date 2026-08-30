import React from 'react';

function AboutStore() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-10 font-sans text-gray-700">
      <p className="text-sm md:text-base leading-relaxed mb-8">
        iSpace is an official Apple Premium Partner store in Azerbaijan, where you can buy Apple devices with a warranty and delivery in Baku and across the country. We are an international chain of premium retail stores offering a wide range of original Apple products. Our experts are always available and ready to help you choose a gadget for your needs.
      </p>

      <div className="space-y-4">
        <h2 className="text-base md:text-lg font-bold text-gray-900">
          Benefits of the Official Apple Store iSpace
        </h2>

        <p className="text-sm leading-relaxed">
          The official Apple online store in Azerbaijan follows all brand standards and requirements. Here is why buying from us is convenient:
        </p>

        
        <ul className="space-y-2 text-sm leading-relaxed pl-2">
          <li className="flex items-start gap-2">
            <span className="select-none">•</span>
            <span>
              <strong className="font-semibold text-gray-900">original devices</strong> — iSpace has the status of an official dealer and works directly with the manufacturer;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="select-none">•</span>
            <span>
              <strong className="font-semibold text-gray-900">brand warranty</strong> — you can always contact authorised iSupport service centres;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="select-none">•</span>
            <span>
              <strong className="font-semibold text-gray-900">professional consultations</strong> — all our experts have completed training according to company standards.
            </span>
          </li>
        </ul>

        
        <p className="text-sm leading-relaxed pt-2">
          Visit our retail stores in Azerbaijan if you want to buy or upgrade a device, or place an order on the website. Either way, it will take very little time.
        </p>
      </div>
    </section>
  );
}

export default AboutStore;