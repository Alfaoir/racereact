import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';








let name = "Harry";

function App() {
 return (



  <>
   
   {/* <Navbar/> */}
   <Navbar title="Text Utils 2 "/>
   <div className="container my-3">
   <TextForm heading="Enter the text to analyze !"/>


   </div>
   
  </>




  
 );
}
export default App;
