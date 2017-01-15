import React from 'react';
import Row from './Row';

class Content extends React.Component {
    /* Generate a short UID (4 chars)
    * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
    */
    shortUID() {
        return ( '0000' + ( Math.random() * Math.pow( 36, 4 ) << 0 ).toString( 36 ) ).slice( -4 );
    }
    render() {
        const columns = [];
        Object.keys(this.props.content).forEach((key) => {
            const value = this.props.content[key];
            const col_width = columns.length < 4 ? "col-xs-6 col-sm-3 col-md-offset-0" : "col-sm-4 col-md-offset-0";
            columns.push(
                <div key={this.shortUID()} className={key +" "+ col_width + " thought"}>               
                    <h2 className="title"><span className={key + " pic"}></span>{value.title}</h2>
                    <p>{value.text}</p>
                    <div className="bottomBorder"></div>
                </div>
            )    
        });
        return (
            <div className="content-wrapper">
                { /* JSON.stringify(this.props.content) */}
                <Row columns={columns.slice(0,4)} />
                <Row columns={columns.slice(4)} />
            </div>
        )
    }
}

export default Content;