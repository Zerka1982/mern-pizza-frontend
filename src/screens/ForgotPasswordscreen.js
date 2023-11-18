import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Error from '../components/Error'
import Loading from '../components/Loading'


function ForgotPasswordscreen() {
    const [email, setEmail] = useState()
    const navigate= useNavigate()
  return (
    <div>
    <div className='row justify-content-center mt-5'>
      <div className='col-md-5 bg-secondary shadow p-3 m-5 rounded'>
        <h2 className='text-center m-5' style={{ color: 'white', fontSize: '35px' }}>Forgot Password ? <i className="fa-solid fa-lock" aria-hidden="true"></i></h2>
        {/* {loading && (<Loading />)}
        {error && (<Error error='Email does not exist in our database' />)} */}
        <div>
          <input
            type='email'
            required
            className='form-control'
            placeholder='Type your Email'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <br></br>
          <button type='submit' className='btn btn-primary my-3 d-flex align-items-start' onClick={()=>{}}>SEND</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForgotPasswordscreen