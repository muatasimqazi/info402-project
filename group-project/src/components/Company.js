import React, { Component } from 'react';

class CompanyView extends Component {
    render() {
        return (
            <div>
                <h1>{(this.props.match.params.companyName).toUpperCase()}</h1>
            </div>
        );
    }
}

export default CompanyView;