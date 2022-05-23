import './App.css';

import RightSidebar from './components/rightsidebar/RightSidebar';
import LeftSidebar from './components/leftsidebar/LeftSidebar';
import Timeline from './components/timeline/Timeline';

function App() {
  return (
    <div className="App">

<LeftSidebar/>
<Timeline/>
<RightSidebar/>
  
    </div>
  );
};

export default App;
