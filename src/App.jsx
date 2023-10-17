import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import CartState from "./utils/cartState"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Header from "./components/Header"

function App() {
  return (
    <CartState>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mycart" element={<Cart />} />
        </Routes>
      </Router>
    </CartState>
  )
}

export default App
