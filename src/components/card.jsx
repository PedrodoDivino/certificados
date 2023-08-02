import{ useState, useEffect } from "react";
import certificates from "../assets/data/certificates.json"
import Pagination from "./pagination";

export default function Card() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(4);

  const pages = Math.ceil(items.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  useEffect(() => {
   setItems(certificates)
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Meus certificados de estudo com Alura</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentItems.map((certificate) => (
            <div key={certificate.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                <img src={certificate.imageSrc} alt={certificate.imageAlt} className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={certificate.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {certificate.name}
                    </a>
                  </h3>
                      </div>
              </div>
            </div>
          ))}
              </div>
                  <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}  />
          </div>
    </div>
  );
}
