import "./App.css";
import Homepage from "./pages/homepage";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";









function App() {
  return (

    <BrowserRouter>
     
      <div>
        <Toaster position='top-center'/>
        
       
         
        <Routes path="/*">
         
          <Route path="/" element={<Homepage />} />
         
      
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;