import { Routes , Route  } from "react-router-dom";
import BundleBuilderPage from "./pages/BundleBuilderPage";

function App() {
  return ( 
    <div>
      <Routes>
        <Route path="/" element={<BundleBuilderPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;