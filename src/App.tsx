import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Project from './pages/Project';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <div className="container">
      <nav className="navbar sticky-top navbar-light bg-dark">
        <span className="navbar-brand text-light px-3 h1">Arturo López</span>
        <span className="d-flex text-light px-3">Perfil profesional</span>
      </nav>

      <Header />
      <Routes>
        <Route path="/" element={<Profile username="lgzarturo" />} />
        <Route path="/projects" element={<Projects username="lgzarturo" />} />
        <Route
          path="/projects/:name"
          element={<Project username="lgzarturo" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <List />
      <Footer />
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
