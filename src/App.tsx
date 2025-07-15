import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/dashboard";
import { Icons } from "./component/Icons";
import { Fonts } from "./component/fonts";
import { Colors } from "./component/colors";
import { UI } from "./component/ui";
import { Tools } from "./component/tools";
import { Logos } from "./component/logos";



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>}></Route>
      <Route path="/icons" element={<Icons></Icons>}></Route>
      <Route path="/fonts"  element={<Fonts></Fonts>}></Route>
      <Route path="/colors" element={<Colors></Colors>}></Route>
      <Route path="/ui" element={<UI></UI>}></Route>
      <Route path="/tools" element={<Tools></Tools>}></Route>
      <Route path="/logos" element={<Logos></Logos>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
