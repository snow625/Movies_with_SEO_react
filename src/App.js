import Header from "./modules/Header";
import UserRoutes from "./UserRoutes";
import {  HelmetProvider } from 'react-helmet-async';
import "./index.css";

function App() {
  return (
   < HelmetProvider>
    <div className="container">
      <Header />
      <UserRoutes />
    </div>
    </HelmetProvider>
  );
}

export default App;
