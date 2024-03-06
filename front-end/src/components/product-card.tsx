import { FaPlus } from "react-icons/fa";

// interface
type ProductsProps ={
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
}
const server = "";
const ProductCard =({
  productId,
  price,
  name,
  photo,
  stock,
  handler
}:ProductsProps) => {
  return (
    <>
      <div className="product-card">
        <img src={photo} alt=""  />
        <p>{name}</p>
        <span>₹ {price}</span>
        {/* this div will overlay productcard div.  */}
        <div>
            <button onClick={() => handler()}>
                <FaPlus />
            </button>
        </div>
      </div>
      
    </>
  )
}

export default ProductCard