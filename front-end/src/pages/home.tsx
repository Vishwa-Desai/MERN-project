import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

function Home() {
  const addToCartHandler = ()=> {}
  return (
    <div className="home">
      <section>

      </section>

      <h1>Latest Products
        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>
        <ProductCard 
        productId="abbdg" 
        name="macbook" 
        price={1000}
        stock={10} 
        handler={addToCartHandler} 
        photo="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg" />
      </main>
    </div>
  )
}

export default Home