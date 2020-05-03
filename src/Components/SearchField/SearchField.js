import React from "react";

const SearchField = ({onSearchChanged}) => {
    return (
        <div className ="pv3">
            <input  onChange = {onSearchChanged} className ="pv2" type="search" placeholder = "search robots" ></input>
        </div>
    );

}
export default SearchField;