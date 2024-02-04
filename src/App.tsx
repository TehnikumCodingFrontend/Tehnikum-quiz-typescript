import "./App.css";
import StepFour from "./pages/StepFour";
import StepOne from "./pages/StepOne";
import StepThree from "./pages/StepThree";
import StepTwo from "./pages/StepTwo";
import Thanks from "./pages/Thanks";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <StepOne/>
      <StepTwo/>
      <StepThree/>
      <StepFour/>
      <Thanks/>
    </div>
  );
}

export default App;
