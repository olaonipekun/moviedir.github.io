import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Body from './component/Body'

function App() {
  return (
    <div className="App">
      <div className='container mx-auto h-screen w-screen dark:bg-slate-800 dark:text-white grid grid-cols-1 grid-rows-1'>
        <Header />
        <Body />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
