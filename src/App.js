import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <div className="App">
   <Header/>
   <HeaderBar/>
   <div className="box">
   <Container/>
   </div>
   <Footer/>
    </div>
  );
}

export default App;
