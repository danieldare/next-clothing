import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import "./Directory.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from '../../redux/DIrectory/DirectorySelector';
import { createStructuredSelector } from "reselect";


function Directory({sections}) {

        return (
            <div className="directory-menu">
                {sections.map(({ id , ...otherProps}) => 
                        <MenuItem key={id} {...otherProps}/>
                        )}
            </div>
        )
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);