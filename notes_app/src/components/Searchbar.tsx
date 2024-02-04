import '../App.css';

const Searchbar=()=>{
    return(
        <div>
            <div className='st-nt-heading'>
                <h2>Sticky Notes</h2>
            </div>
            <div className="st-nt-searchbar">
                    <input type="Search" placeholder="Search ..."/>
                    <div>
                        <span className="material-symbols-outlined">search</span>
                    </div>
            </div>
        </div>
    );
}

export default Searchbar;