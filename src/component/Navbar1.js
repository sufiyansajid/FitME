import React from 'react'


const Navbar = () => {
    return (
        <div>
            <>
            <nav className="navbar bg-body-tertiary 0 bg-secondary">
             <div className="container-fluid">
             <span className="navbar-brand navbar-dark text-light">FitMe</span>

              <form className="d-flex" role="search">
               <input className="form-control text-dark me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-light text-dark btn-outline-seconadary" type="submit">Search</button>
                </form>
             </div>
            </nav>
            </>
        </div>
    )
}

export default Navbar