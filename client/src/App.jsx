import { Home , Register, Login, Exercises, SavedExercises, Workouts, WorkoutLogs, Profile} from "./pages"
import { Navbar, Footer, Notification } from "./components";
import { GlobalStyle } from "./GlobalStyles.styles";
import {BrowserRouter, Route, Routes, ScrollRestoration } from "react-router-dom"

function App() {
  return (
    <>
      <header>
        <GlobalStyle />
      </header>
      <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/register" element={<Register />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/" index element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/savedexercises" element={<SavedExercises />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workoutlogs" element={<WorkoutLogs />} />
        <Route path="/profile/*" element={<Profile />} />
        {/* <ScrollRestoration/> */}
      </Routes>
      <Footer />
      
      </BrowserRouter>
    </>
  );
}

export default App;
