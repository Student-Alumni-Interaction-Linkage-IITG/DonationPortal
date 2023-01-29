import React from 'react'
import Navbar from '../../Components/HomePage/Navbar/Navbar'
import error from '../../assets/Error/Error.png'
import { useHistory } from "react-router-dom";
import './Error.css'

function Error() {

    const history = useHistory();

    const homeClick = () => {
        history.push('/');
    }

  return (
    <div>
      <Navbar />
      <div className='Error'>
        <img src={error} alt="" />
        <div className='Error2'>
          <div className='Error2a'>
            Awww.... Don't Cry
          </div>
          <div className='Error2b'>
            Its just a 404 Error!

          </div>
          <div className='Error2c'>
            This  page doesn't exist or was removed! We suggest you go back to home
          </div>
          <button className='Error2d'onClick={()=> homeClick()}>Back To Home</button>

        </div>
      </div>
    </div>
  )
}

export default Error