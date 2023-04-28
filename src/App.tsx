import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';

function AppContainer() {
  return (
    <div className="bg-black text-white min-h-screen max-w-full">
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
};

export default App;
