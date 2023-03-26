import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

let firstRender = true;
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state)=> state.cart)
  const dispatch = useDispatch();
  const notification = useSelector(state=> state.ui.notification)
  
  React.useEffect(()=> {
    if(firstRender){
      firstRender = false;
      return;
    }
    const sendRequest = async () => {
      dispatch(uiActions.showNotifications({
        open: true,
        message: "Sending Request",
        type: "warning",
      }))

      const res = await fetch("https://redux-tutorial-c2f01-default-rtdb.firebaseio.com/cartItems.json", {
        method: "PUT",
        body: JSON.stringify(cart)
      })
      const data = await res.json();
      dispatch(uiActions.showNotifications({
        open: true,
        message: "Sent Request to database successfully",
        type: "success"
      }))
    }
    sendRequest().catch(err=> {
      dispatch(uiActions.showNotifications({
        open: true,
        message: "sending request failed",
        type: "error",
      }))
    })
  }, [cart])
  
  return (
    <div className="App">
    { notification.open &&  <Notification type = {notification.type} message={notification.message} /> }
     { !isLoggedIn && <Auth />}
      { isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
