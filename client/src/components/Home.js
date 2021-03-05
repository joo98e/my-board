import React, { Component } from "react";

class Login extends Component {

    // props는 변경될 수 없는 데이터 처리
    // state는 변경될 수 있는 데이터 처리

    state = {
        names: ""
    }

    // API 서버에 접속하여 데이터를 받아오는 역할(모든 컴포넌트가 마운트가 완료되면 실행됨)
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({names : res}));
            // .catch(err => console.log(err));
    }

    // async 비동기식(동시에 일어나지 않음)
    callApi = async () => {
        const response = await fetch('/board');
        const names = await response.json();
        return names;
    }

    render() {
        const tac = {
            textAlign: 'center'
        };

        return (
            <div>
                <h1 style={tac}>Home</h1>
                {this.state.names ? this.state.names.map((c) => {return <h2>{c}</h2>}) : ""}
            </div>

        )
    }
}


export default Login;

