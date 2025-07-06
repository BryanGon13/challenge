import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/Navbar';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarSimple />
    </div>
  );
}

export default App;