import './App.css';
import RightSidebar from "./component/rightsidebar/RightSidebar";
import LeftSidebar from './component/leftsidebar/LeftSidebar';
function App() {
  return (
    <div className="App" >

      <LeftSidebar/>
      <RightSidebar/>
    </div>
  );
}

export default App;

