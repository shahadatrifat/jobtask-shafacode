import ProductPage from "../pages/ProductPage/ProductPage";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/HomePage/Home";
import { createBrowserRouter } from "react-router";
import ProductDetailPage from "../pages/ProductDetailsPage/ProductDetailPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import BlogDetailPage from "../pages/BlogPage/BlogDetailPage/BlogDetail";
import Cart from "../pages/CartPage/Cart";
import Checkout from "../pages/CheckoutPage/Checkout";
import Ty from "../pages/ThankyouPage/Ty";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products/plants",
        Component: ProductPage,
      },
      {
        path: "/product/Golden-Pothos",
        Component: ProductDetailPage,
      },
      {
        path: "blog",
        Component: BlogPage,
      },
      {
        path: "/blog/:slug",
        Component: BlogDetailPage,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "*",
        Component: Home,
      },
      {
        path: "checkout",
        Component: Checkout,
      },
      {
        path: "thankyou",
        Component: Ty,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);
