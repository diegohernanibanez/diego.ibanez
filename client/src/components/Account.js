import React from 'react';

function Account() {
  return (
    <div className="Account" className="font-weight-bold" >
        <p className="text-center">Want to build your own MYtinerary?</p>
      <ul className="nav  justify-content-center">
        <li>
          <a className="link" className="nav-item" className="col" href="/LogIn">Log In</a>
        </li>
        <li>
          <a className="link" className="nav-item" className="col" href="/CreateAccount" className="">Create Account</a>
        </li>
      </ul>
    </div>
  )
}

export default Account;

////style="margin:0,20px"