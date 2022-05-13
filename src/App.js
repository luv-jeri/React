import './App.css';
import Page from './pages/Page';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  const page = [
    'Home',
    'About',
    'Contact',
    'Portfolio',
    'Blog',
    'Shop',
    'Login',
    'Register',
  ];
  return (
    <div className='container'>
      <HashRouter>
        <nav>
          {page.map((item, index) => {
            return (
              <div className='link' key={index}>
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </div>
            );
          })}
        </nav>

        <Routes>
          {page.map((item) => {
            return (
              <Route path={`/${item.toLowerCase()}`} element={<Page>{item}</Page>} />
            );
          })}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
