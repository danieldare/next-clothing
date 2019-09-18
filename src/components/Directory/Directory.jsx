import React, { Component } from 'react';
import DirectoryService from "../../DirectoryService";
import MenuItem from '../MenuItem/MenuItem';
import "./Directory.scss";

export default class Directory extends Component {
    state = {
        sections: DirectoryService
    }

    componentDidMount(){
        console.log("CDM")
        console.log(this.state.sections)
    }

    render() {
        console.log(this.state.sections)
        return (
            <div className="directory-menu">
                {this.state.sections.map( ({title, imageUrl, id}) => 
                        <MenuItem 
                        key={id} 
                        imageUrl={imageUrl}
                        title={title}/>)}
            </div>
        )
    }
}
