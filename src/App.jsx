import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:8080/api/products")
      .then((res) => setProducts(res.data.response.docs))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      {/* <Main /> */}
      <Footer />
    </>
  );
}

export default App;
