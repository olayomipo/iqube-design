
import { Outlet } from 'react-router-dom';
import MainBackground from '../components/MainBackground';

function RootLayout(){
    return(
        <>
            <MainBackground>
                <Outlet />
            </MainBackground>
        </>
    )
}

export default RootLayout;