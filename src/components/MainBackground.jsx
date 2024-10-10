
// import classes from './MainBackground.module.css';
import './MainBackground.css';

function MainBackground({ children }) {
  return (
    <>
          <div className="h-screen w-full bg-cover bg-center" style={{backgroundImage: `url('src/assets/Vector 55.png')`}}>
            { children }
          </div>
    </>

  );
}

export default MainBackground;