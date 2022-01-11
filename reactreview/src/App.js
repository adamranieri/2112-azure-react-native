
// JSX is JavaScript
// Language invented by react
// when a component returns JSX you are creating code that goes to the virtual dom and builds that virtual dom structure
import ATM from "./components/atm";
import BookAdder from "./components/book-adder";
import BookViewer from "./components/book-viewer";
import Counter from "./components/counter";
import LifeCycle from "./components/life";
import MeCharacterViewer from "./components/mass-effect-charater-viewer";
import TrainerInfo from "./components/trainer-info";

// the JSX does not directly go to the web page and display on the real DOM
export default function App() { // Parent

  const adam = "Adam";
  const title = "Lead Trainer"
  

  
  return (<>
    {/* <h1>Welcome to my app the value of x </h1>
    <TrainerInfo name={adam} title={title}/> 
    <MeCharacterViewer/> */}
    {/* child  a child is any component called within the return here */}
    <ATM/>
    <LifeCycle/>
    <BookViewer/>
    <BookAdder/>
    
  </>)
}

