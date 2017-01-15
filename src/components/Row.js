import React from 'react';

class Row extends React.Component {
    render() {
        return(
            <div className="row flex-row">
                {this.props.columns}
            </div>            
        )
    }
}
export default Row;