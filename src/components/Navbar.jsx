import React ,{createContext, useState} from 'react'
import HomePage from './HomePage'
import TimeWrapper from './TimeWrapper';
import Content from './Content';
import Converter from './Converter';
import Tools from './Tools';

// let timer = useContext(TimerContext);

// export const TimerContext = createContext();


const Navbar = () => {
  return (
    <div>
        <Link to='/homepage'>Home</Link>
        <Link to='/content'>While you wait</Link>
        <Link to='/tools'>Tools</Link>

        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/content" element={<Content />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>

    </div>
  )
}

export default Navbar