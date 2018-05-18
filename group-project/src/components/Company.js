import React, { Component } from 'react';
import '../assets/company.css'

class CompanyView extends Component {
    render() {
    console.log(this.props);
    return (
            <div>
                <section className='cmp-bn' style={{backgroundImage: this.props.match.params}}>
                    <h1>{this.props.match.params.companyName}</h1>
                </section>
            <div>
                
            </div>
            </div>
        );
    }
}

export default CompanyView;