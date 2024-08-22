import Carousel from './Carousel';
import Pagination from './Pagination';
import Products from './Products';

function Body() {
  return (
    <div>
      <Carousel />
      <hr />
      <Products />
      <Pagination />
    </div>
  );
}

export default Body;
