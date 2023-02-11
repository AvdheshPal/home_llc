import React, { useContext } from "react";
import logo from '../.././homellc-Logo.png';
import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
  const {token,uname, setToken} = useContext(AuthContext)
  return (<>
    <div>
      <div id="left" >
        <div><img src={logo} alt="" srcset="" width="200" />
        </div>
        <div >
          <p>Insights on real estate</p>
          <br />
          <hr />
          <br />
          <div style={{ textAlign: 'start', width: '186px' }} >
            <strong>NATIONAL INSIGHTS
            </strong>
            <br />
            <br />
            <strong> LOCAL INSIGHTS</strong>
            <br /><br />
            <hr />
          </div>
          <div>
            <br />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={20} height={20}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>

            </span>
          </div>
        </div>
        <div></div>
      </div>
      <div id="right" >
        <nav id="navbar" >
          <div id="inp" >
            <input type="text" name="" id="" placeholder="Search"/>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width={20} height={20}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </span>
          </div>
          <div id="logo" >
          <div id="uname" >
            {uname}
          </div>
          <div>
            <button onClick={()=>setToken()} id="logout" >Logout</button>
          </div>

          </div>
        </nav>
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt=""  />
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt=""  />
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt=""  />
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt=""  />
      </div>
    </div>
  </>)
}