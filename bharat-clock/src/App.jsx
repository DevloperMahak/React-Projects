import './App.css'
import ClockSlogan from './components/ClockSlogan'
import ClockTime from './components/CurrentTime'
import ClockHeading from './components/clockheading'
function App() {
  console.log("print");
  return<center><div>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <ClockTime></ClockTime>
  </div>
  </center>
}

export default App;
