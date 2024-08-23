import Footer from './Footer';
import Nav from './Nav';

function SingleProduct() {
  return (
    <div>
      <Nav />
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://cdn.flowbite.com/images/ecommerce/01.jpg"
              alt="product"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-gray-800 text-2xl font-semibold">
                Product Title
              </h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam, aliquid.
              </p>
              <div className="mt-3 flex items-center">
                <span className="text-xl font-semibold text-gray-800">
                  $24.99
                </span>
                <button className="ml-auto px-3 py-1 bg-gray-800 text-white text-sm rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
