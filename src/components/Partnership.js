/* This example requires Tailwind CSS v2.0+ */
export default function Partnership() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Partners with over 7 well known companies
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <a href="https://www.vian.gr/el/" target="_blank" rel="noreferrer">
              <img
                className="max-h-12"
                src="../../images/partnership/vian.png"
                alt="Vian"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <a
              href="https://www.vianex.gr/intro"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="max-h-12"
                src="../../images/partnership/vianex.png"
                alt="Vianex"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <a href="https://superfoods.eu/" target="_blank" rel="noreferrer">
              <img
                className="max-h-12"
                src="../../images/partnership/superfoods-logo.png"
                alt="SuperFoods"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <a
              href="https://pharmalead.gr/?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="max-h-12"
                src="../../images/partnership/pharmalead.webp"
                alt="Pharmalead"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <a
              href=" https://www.pharmacylaboratories.eu/pl/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="max-h-12"
                src="../../images/partnership/pharmacy-laboratories.png"
                alt="Pharmacy Laboratories"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <a
              href="https://italianprivatelabel.com/companies/dili-international-srl"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="max-h-12"
                src="../../images/partnership/dili.jpg"
                alt="Dili International"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <a href="https://vitorgan.gr/" target="_blank" rel="noreferrer">
              <img
                className="max-h-12"
                src="../../images/partnership/vitorgan.jpeg"
                alt="Vitorgan"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"></div>
        </div>
      </div>
    </div>
  );
}
