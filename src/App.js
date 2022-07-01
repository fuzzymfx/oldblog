import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import BlogIntro from './components/BlogIntro';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './assets/css/style.css';



function App() {
  return (
    <>
      <Header />
      <Dashboard />
      {/* <BlogIntro /> */}
      <Blog />
      <Footer />

    </>
  )
}

export default App;
