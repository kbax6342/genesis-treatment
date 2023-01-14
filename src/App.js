import logo from './logo.svg';
import './App.css';
import Hero from './componets/Hero';
import Nav from './componets/Nav';
import Footer from './componets/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='relative object-cover w-full mx-auto h-max'>
        <Hero className="absolute top-5 right-5 z-10" />
        <img src={`https://images.pexels.com/photos/1330219/pexels-photo-1330219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} alt="" className='object-cover w-full  h-full min-h-screen' />
      </div>
      <Footer />

    </div>
  );
}

export default App;
