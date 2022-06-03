import React from 'react'
import './Navbar.css';


function Navbar() {
    let linksArr = ["Services", "Projects", "About"];
 
    return (
       <div className="App">
          <Logo />
          <div>
             {linksArr.map(e => {
                return <Links name={e} />
             })}
          </div>
          <Button />
       </div>
    );
 }
 
 const Logo = () => {
    return <h2>LOGOBAKERY</h2>;
 }
 
 const Links = (props) => {
    return <a className="links" href="/">{props.name}</a>;
 }
 
 const Button = () => {
    return <button className="btn">Contact</button>;
 }

export default Navbar