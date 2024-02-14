import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss"

export const ProductList = ({addItem, productList, setVisible }) => {
   return (
      <ul>
         <div className={styles.list}>         
            {productList.map((product) => (
               <ProductCard key={product.id} addItem={addItem} product={product} setVisible={setVisible} />
            ))}
         </div>
      </ul>
   );
};
