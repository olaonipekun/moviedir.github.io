import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Body from './component/Body'

function App() {
  return (
    <div className="App">
      <div className='min-h-screen flex bg-blue-500'>
        <div className='grid grid-rows-3 grid-cols-3'>
          <Header />
          <Body />
          <Footer />
        </div>
      </div>     
    </div>
  );
}

export default App;
