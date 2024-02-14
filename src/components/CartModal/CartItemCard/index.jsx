import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss"

export const CartItemCard = ({ product, removeItem }) => {
   return (
      <li className={styles.card}>
         <div >
            <img src={product.img} alt={product.name} /> 
         </div>
         <div className={styles.name}>
            <h3 className="title one">{product.name}</h3>
            <h3 className="title price">R$ {product.price}</h3>
         </div>
         <button onClick={() => removeItem(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
