import React, { Component } from 'react';
import DirectoryService from "../../DirectoryService";
import MenuItem from '../MenuItem/MenuItem';
import "./Directory.scss";

class Directory extends Component {
    state = {
        sections: DirectoryService
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id , ...otherProps}) => 
                        <MenuItem key={id} {...otherProps}/>
                        )}
            </div>
        )
    }
}

export default Directory;