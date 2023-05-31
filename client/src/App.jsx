import { Home,
  Register,
  Login,
  Exercises,
  SavedExercises,
  Workouts,
  WorkoutLogs,
  Profile,
  NotFound
} from "./pages"
import { Navbar, Footer } from "./components";
import { GlobalStyle } from "./GlobalStyles.styles";
import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  ScrollRestoration } from "react-router-dom"




function App() {
  const RouterLayout = () => {
    return (
      <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      </>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<NotFound />} element={<RouterLayout />} >
        <Route path="/register" element={<Register />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/" index element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/savedexercises" element={<SavedExercises />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workoutlogs" element={<WorkoutLogs />} />
        <Route path="/profile/*" element={<Profile />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    )
  )


  return (
    <>
      <header>
        <GlobalStyle />
      </header>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
