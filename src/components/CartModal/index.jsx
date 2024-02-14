import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss"


export const CartModal = ({ setCartList ,cartList, setVisible, removeItem }) => {
   
   const total = cartList.length > 0
      ? cartList.reduce((prevValue, product) => prevValue + product.price, 0)
      : 0;   

   return (
      <div className={styles.overlayBox} role="dialog">
         <div className={styles.modal}>
            <div className={styles.header}>
               <h2 className="title white" >Carrinho de compras</h2>
               <button aria-label="close" title="Fechar">
                  <MdClose onClick={() => setVisible(false)} size={21} />
               </button>
            </div>
            <div className={styles.box} >
               <div className={styles.midle}>
                  <ul>
                     {cartList.map((product) => (
                        <CartItemCard removeItem={removeItem} key={product.id} product={product} />
                     ))}
                  </ul>
               </div>
               <div className={styles.end}>
                  <div className={styles.total}>
                     <span className="title total">Total</span>
                     <span className="title total">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                  </div>
                  <button onClick={() => setCartList([])} className={styles.btn}>Remover todos</button>
               </div>
            </div>
         </div>         
      </div>
   );
};
