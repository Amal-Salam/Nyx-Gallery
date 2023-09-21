import React from 'react';
import { BsSearch} from 'react-icons/bs';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
      <a className='navbar-brand ms-2 pe-5 fs-3' href='/gallery'>
        Nyx Gallery
      </a>
      <div className='collapse navbar-collapse ms-5' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item text-center'>
            <div class='input-group rounded'>
              <input
                
                class='form-control rounded'
                type='text'
                placeholder='Search by tag...'
                value={searchTerm}
                onChange={handleSearch}
                
              />

              <span class='input-group-text border-0' id='search-addon'>
                <BsSearch />
              </span>
            </div>
           
          </li>
        </ul>
      </div>

     
      <a
        href='/'
        className='btn btn-outline-dark me-2'
        role='button'
        aria-pressed='true'
      >
        Logout
      </a>
    </nav>
  );
};

export default Navbar;
