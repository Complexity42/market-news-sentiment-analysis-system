import { BrowserRouter } from "react-router-dom";  
import Routes from "./routes/Routes"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
