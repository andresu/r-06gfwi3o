import React from 'react';

export class Welcome extends React.Component{
    render(){
        return <h1>Hola {this.props.name}</h1>
    }
}

export default Welcome;