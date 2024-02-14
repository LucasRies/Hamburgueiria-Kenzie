import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { listApi } from "../../services/api"

export const HomePage = () => {

   const localCart = localStorage.getItem("@CARTLIST")
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(localCart ? JSON.parse(localCart) : []);
   const [isVisible, setVisible] = useState(false)
   const [value, setValue] = useState(""); 

   console.log(value)

   const addItem = (item) => {
      setCartList([...cartList, item])
   }

   const removeItem = (itemId) => {
      const newCart = cartList.filter((item) => item.id !== itemId)
      setCartList(newCart)
   }

   useEffect(() => {
      localStorage.setItem("@CARTLIST", JSON.stringify(cartList))

   }, [cartList])

   useEffect(() => {

      const search = async () => {
         try {
            const { data } = await listApi.get("/products", { params: { value } })
            setProductList( data )
         } catch (error) {
            console.log(error)
         }
      }
      
      search()
   }, [value])  
   
   return (
      <>
         <Header value={value} setValue={setValue} setVisible={setVisible} />
         <main>
            {isVisible ? <CartModal removeItem={removeItem} setVisible={setVisible} cartList={cartList} setCartList={setCartList}/> : null}            
            <ProductList addItem={addItem}  productList={productList} setVisible={setVisible} />                        
         </main>
      </>
   );
};
