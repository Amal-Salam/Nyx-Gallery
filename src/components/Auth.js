import { auth } from '../config/firebase.js';
import {
  signInWithEmailAndPassword
} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import camera from "../images/camera.jpg";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [err, setError] = useState(false);
  
 
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
       navigate ('/Gallery');
    } catch (err) {
      setError(true)
      console.error(err.message);
    }
  };
  
  
  return (
   
      
      <div>
        <section className='vh-100'>
          <div className='container py-5 h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
              <div className='col col-xl-10'>
                <div className='card' style={{ borderRadius: '1rem' }}>
                  <div className='row g-0'>
                    <div className='col-md-6 col-lg-5 d-none d-md-block'>
                      <img
                        src={camera}
                        alt='login form'
                        className='img-fluid'
                        style={{ borderRadius: '1rem 0 0 1rem' }}
                      />
                    </div>
                    <div className='col-md-6 col-lg-7 d-flex align-items-center'>
                      <div className='card-body p-4 p-lg-5 text-black'>
                        <form>
                          <div className='d-flex align-items-center mb-3 pb-1'>
                            <i
                              className='fas fa-cubes fa-2x me-3'
                              style={{ color: '#ff6219' }}
                            ></i>
                            <span className='h1 fw-bold mb-0'>Nyx Gallery</span>
                          </div>
                          <h5
                            className='fw-normal mb-3 pb-3 text-center'
                            style={{ letterSpacing: '1px' }}
                          >
                            Sign In
                          </h5>
                          <div className='form-outline mb-4'>
                            <input
                              type='email'
                              placeholder='Username '
                              className='form-control form-control-lg'
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className='form-outline mb-4'>
                            <input
                              type='password'
                              placeholder='Password'
                              className='form-control form-control-lg'
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div className='pt-1 mb-4 text-center'>
                            {err && (
                              <p className='fs-2 mb-3'>
                                Incorrect Email or Password!
                              </p>
                            )}
                            <button
                              className='btn btn-dark btn-lg btn-block '
                              type='button'
                              onClick={signIn}
                            >
                              Sign In
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
  );
};

export default Auth;