import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import CheckoutUser from "./checkOutUser";
import CheckoutNonUser from "./CheckoutNonuser";

const Checkout= () => {
  const { user } = useContext(AuthContext);

  
  return user ? <CheckoutUser></CheckoutUser> :<CheckoutNonUser></CheckoutNonUser>;
}

export default Checkout