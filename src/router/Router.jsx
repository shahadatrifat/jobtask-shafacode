import ProductPage from "../pages/ProductPage/ProductPage";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/HomePage/Home";
import { createBrowserRouter } from "react-router";
import ProductDetailPage from "../pages/ProductDetailsPage/ProductDetailPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import BlogDetailPage from "../pages/BlogPage/BlogDetailPage/BlogDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children: [ 
      {
        index:true,
        Component:Home,
      },
      {
        path:"/products/plants",
        Component:ProductPage
      },
      {
        path:"/product/Golden-Pothos",
        Component:ProductDetailPage
      },
      {
        path:"blog",
        Component:BlogPage
      },{
        path:"/blog/:slug",
        Component:BlogDetailPage
      }
    ],
  },
]);