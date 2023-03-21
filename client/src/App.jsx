import { Home , Register, Login, Exercises, SavedExercises, Workouts, WorkoutLogs} from "./pages"
import { Navbar, Footer } from "./components";
import { GlobalStyle } from "./GlobalStyles.styles";
import {BrowserRouter, Route, Routes } from "react-router-dom"


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
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
