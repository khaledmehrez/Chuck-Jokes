import '../style/navbar.scss'

function NavBar() {
    return (

        <div className="navbar">
           <ul>
               <li>
                   SO FUNKTIONIERT'S
               </li>
               <li>
                  SONDERANGEBOT
               </li>
               <div className="dropdown">
               <li className="dropbtn">
                   MEIN BEREICH
               </li>
                   <div className="dropdown-content">
                       <a href="#">Link 1</a>
                       <a href="#">Link 2</a>
                       <a href="#">Link 3</a>
                   </div>
               </div>
           </ul>
        </div>
    );
}

export default NavBar;
