import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/dashboard";
import { WobbleCardDemo } from "./component/Icons";



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>}></Route>
      <Route path="/icons" element={<WobbleCardDemo></WobbleCardDemo>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
