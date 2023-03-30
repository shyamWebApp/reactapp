import React from "react";
import 'tachyons';

const SearchBox=({searchfield,searchchange})=>
{
    return(
        <div className="tc">
        <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder="search robots" onChange={searchchange}></input> 
        </div>
          );
}
export default SearchBox;