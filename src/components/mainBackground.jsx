
import classes from './MainBackground.module.css';


function MainBackground({ children }) {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center '>
          { children }          
    </div>
  );
}

export default MainBackground;