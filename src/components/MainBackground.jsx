
import classes from './MainBackground.module.css';


function MainBackground({ children }) {
  return (
    <div className=' bg-gray-100'>
          { children }          
    </div>
  );
}

export default MainBackground;