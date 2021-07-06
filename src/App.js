import './App.css';
import Header from './components/headerComponent';
import Footer from './components/footerComponent';
import SearchBox from './components/searchBox';
import BusList from './components/busList';
import Example from './components/bus';
import {busData} from './shared/busData'
function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBox/>
      <Example/>
      <BusList buses={busData}/>
      <Footer/>
    </div>
  );
}

export default App;
