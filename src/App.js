import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Instructors from "./pages/Instructors"
import NotFound from "./pages/NotFound"
import InstructorDetail from "./pages/InstructorDetail"
import About from "./components/About"
import Courses from "./components/Courses"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />}>
            <Route index element={<About />} />
            <Route path="courses" element={<Courses />} />
          </Route>
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/:id" element={<InstructorDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
