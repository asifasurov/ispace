import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "../layout/Layout"
import Index from "../components/Index"
import Services from "../components/Services"
import CategoryPage from "../components/CategoryPage"
import DetailPage from "../components/DetailPage"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="services" element={<Services />} />
          {/* Dinamik kateqoriya marşrutu */}
          <Route path="category/:categoryName" element={<CategoryPage />} />
          <Route path="product/:productDetail" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router