import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Search />
    </>
  )
}

export default App;
