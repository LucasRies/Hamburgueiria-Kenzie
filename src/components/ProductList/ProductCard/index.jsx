import styles from "./style.module.scss"

export const ProductCard = ({ addItem, product, setVisible }) => {
    return(
        <li className={styles.card} tabIndex="0">
            <img src={product.img} alt={product.name} />
            <div className={styles.box}>
                <h3 className="title one">{product.name}</h3>
                <span className="title descrition">{product.category}</span>
                <span className="title price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="cardBtn" onClick={() => {addItem(product); setVisible(true);}} >Adicionar</button>
            </div>
        </li>
    )
}