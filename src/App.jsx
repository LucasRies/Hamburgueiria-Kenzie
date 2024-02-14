import "./styles/index.scss"
import { HomePage } from "./pages/HomePage"
import { CartModal } from "./components/CartModal";
import { useState } from "react";

function App() {
  
  const localCart = localStorage.getItem("@CARTLIST")
  const [isVisible, setVisible] = useState(false)
  const [cartList, setCartList] = useState(
    localCart ? JSON.parse(localCart) : []
 );
  
  
  const removeItem = (itemId) => {
    const newCart = cartList.filter((item) => item.id !== itemId)
    setCartList(newCart)
 }

  return (
    <>
      {isVisible ? <CartModal removeItem={removeItem} setVisible={setVisible} cartList={cartList} /> : null}       
      <HomePage setVisible={setVisible} />
    </>
  )
}

export default App
