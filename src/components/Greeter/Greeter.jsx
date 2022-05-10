import { useEffect } from 'react';
import './greeter.css';
export default function Greeter() {
 
  const bye = () => {
    console.log('bye');
  };

  useEffect(() => {
    console.log('hi');
    return bye;
  });

  return <div className='greeter-wrap'>Greeter</div>;
}
