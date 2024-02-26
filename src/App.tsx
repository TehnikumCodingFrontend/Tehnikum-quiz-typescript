import "./App.css";
import StepFour from "./pages/StepFour";
import StepOne from "./pages/StepOne";
import StepThree from "./pages/StepThree";
import StepTwo from "./pages/StepTwo";
import Thanks from "./pages/Thanks";
import Welcome from "./pages/Welcome";
import { YourAnswers } from "./pages/YourAnswers";

function App() {
  return (
    <div className="App">
      <Welcome />
      <StepOne/>
      <StepTwo/>
      <StepThree/>
      <StepFour/>
      <YourAnswers/>
      <Thanks/>
    </div>
  );
}

export default App;
