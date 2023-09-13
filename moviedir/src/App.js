import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <div className="App dark:bg-slate-800 dark:text-white grid grid-cols-1 grid-rows-1">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
