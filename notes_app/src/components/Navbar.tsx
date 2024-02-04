import '../App.css';

const Navbar=()=>{
    return(
        <nav>
            <div className="st-nt-nav">
                <div className='st-nt-nav-add'>
                    <h3>
                        <span className="material-symbols-outlined">add</span>
                    </h3>
                </div>
                <div className='st-nt-nav-setting'>
                    <h3>
                        <span className="material-symbols-outlined">settings</span>
                    </h3>
                </div>
            </div>    
        </nav>
    );
}

export default Navbar;