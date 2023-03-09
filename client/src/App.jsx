import { Home , Register, Login, Exercises, YourExercises, YourWorkouts} from "./pages"
import { Navbar } from "./components";
import { GlobalStyle } from "./GlobalStyles.styles";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/yourexercises" element={<YourExercises />} />
        <Route path="/workouts" element={<YourWorkouts />} />
      </Routes>
    </>
  );
}

export default App;
