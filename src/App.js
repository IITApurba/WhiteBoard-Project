import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider  from "./store/ToolboxProvider";
import Toolbox from "./components/Toolbox";
function App() {
  return (
   <BoardProvider>
    <ToolboxProvider>
      <Toolbar/>
      <Toolbox/>
      <Board/>
     </ToolboxProvider>
    </BoardProvider>
  );
}

export default App;