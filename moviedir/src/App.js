import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Body from './component/Body'

function App() {
  return (
    <div className="App">
      <div className=' grid grid-cols-1 mx-auto dark:bg-slate-800 dark:text-white'>
        <Header />
        <Body />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
