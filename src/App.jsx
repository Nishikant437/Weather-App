import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'; // adjust path if needed
import Footer from './components/Footer'; // optional
import Search from './components/Search'; // your weather search component

function App() {
  return (
    <div className=" flex flex-col min-h-screen">
      {/* Header stays at the top */}
      <Header />

      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Background_Image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          
          
        }}
      >
        <Search/>
      </div>

      {/* Main content area */}
      {/* <main className="flex-grow pt-[80px] px-4">
        <Outlet />
      </main> */}

      {/* Footer (optional) */}
      <Footer />
    </div>
  );
}

export default App;
