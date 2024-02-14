
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss"

export const Header = ({setVisible}) => {   
   
   return (
      <header>
         <div className={styles.header}>
            <img  src={Logo} alt="Logo Kenzie Burguer" />
            <button>
                <MdShoppingCart onClick={() => setVisible(true)} size={21} />
                <span>0</span>
            </button>
         </div>         
         {/* <div className={styles.form}>            
            <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div> */}
      </header>
   );
};
