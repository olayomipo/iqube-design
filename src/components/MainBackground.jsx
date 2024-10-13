
import classes from './MainBackground.module.css';
// import './MainBackground.css';

function MainBackground({ children }) {
  return (
    <>
          <div className={classes.main}>
            { children }
          </div>
    </>

  );
}

export default MainBackground;