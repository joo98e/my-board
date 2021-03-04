import React, { Component } from "react";

class error extends Component {
    render(){
        const tac = {
            textAlign : 'center'
        };

        return(
            <div>
                {/* 404 등 나눌 예정 */}
                <h1 style={tac}>error</h1>
            </div>
        )
    }
}


export default error;

