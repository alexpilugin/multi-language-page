import React from 'react';

class TopLine extends React.Component {
    render() {
        return (
            <div className="TopLine row">
                {this.props.children}
            </div>
        )
    }
}

export default TopLine;