import { Home , Register, Login, Exercises, SavedExercises, Workouts, WorkoutLogs} from "./pages"
import { Navbar, Footer } from "./components";
import { GlobalStyle } from "./GlobalStyles.styles";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <header>
        <GlobalStyle />
      </header>
      <Navbar />
      <Routes >
        <Route path="/register" element={<Register />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/savedexercises" element={<SavedExercises />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workoutlogs" element={<WorkoutLogs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
