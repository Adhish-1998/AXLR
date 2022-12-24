import './Header.css'

const Header = () => {
    return (
        //     <div className='Header'>
        //         <ul>
        //             <li>Home</li>
        //             <li>Menu</li>
        //         </ul>
        //         <h3>Logo</h3>
        //         <h4>Contact</h4>
        // </div>
        <div className='Header'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Home</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" id='Menu'>
                                <a className="nav-link active" aria-current="page" href="#">Menu</a>
                            </li>
                            <li className="nav-item" id='Logo'>
                                <a className="nav-link"  href="#">Logo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id='Contact' href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header