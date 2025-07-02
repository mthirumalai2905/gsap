import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);
import './index.css';


const App = () => {
  return (
    <div className='flex-center'>
      Hello
    </div>
  )
}

export default App
