import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Work from "./components/work/Work";
import Projects from "./components/projects/Projects";
import Features from "./components/features/Features";
import Clients from "./components/clients/Clients";
import Info from "./components/info/Info";
import Form from "./components/form/Form";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Copyright from "./components/copyright/Copyright";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Work />
      <Projects />
      <Features />
      <Clients />
      <Info />
      <Form />
      <Blog />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
