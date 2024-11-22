import HelloPage from "./components/pages/HelloPage";
import DestinationsPage from "./components/pages/DestinationsPage";
import ExperiensesPage from "./components/pages/ExperiensesPage";
import AboutPage from "./components/pages/AboutPage";
import Footer from "./components/Footer";
import TaskPage from "./components/pages/TaskPage";

const App = () => {
  return (
    <>
      <HelloPage />
      <DestinationsPage />
      <ExperiensesPage />
      <AboutPage />

      <TaskPage />
      <Footer/>
    </>
  )
}

export default App