import React from 'react'; 

function SearchBox(){ 
    return( 
        <div>
            <div className="searchbox"> 
                <h3> 
                    search for a book 
                </h3>
                <input type="search"/>
                <button type="button" class="btn btn-secondary">search</button>
            </div>
        </div>
    )
};

export default SearchBox;