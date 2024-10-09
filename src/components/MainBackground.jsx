
// import classes from './MainBackground.module.css';
import './MainBackground.css';

function MainBackground({ children }) {
  return (
    <>
      {/* <div className={classes.background}>
        <div className= 'h-screen min-h-screen flex items-center justify-center '>
              { children }          
        </div>    
      </div> */}
      <div className="h-screen min-h-screen flex-row">
        <div className="h-[60%] bg12"></div>
        <div className="h-[40%] bg-white z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <p>This component is on top of the other two divs.</p>
          
        </div>
      </div>
    </>

  );
}

export default MainBackground;