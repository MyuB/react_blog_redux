import FiltersCategory from "./filters-category/FiltersCategory";

const Home = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Products</h1>
        <FiltersCategory />
      </div>
    </div>
  );
};

export default Home;
