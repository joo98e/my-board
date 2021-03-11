import React, { Component } from "react";

class Home extends Component {
    // 이 부분부터 24번줄 참고해서 스타일 추가하고, 클래시즈를 circular에 추가하고 해보기
    // const styles
    // props는 변경될 수 없는 데이터 처리
    // state는 변경될 수 있는 데이터 처리

    state = {
        names: "",
        completed : 0
    }

    // API 서버에 접속하여 데이터를 받아오는 역할(모든 컴포넌트가 마운트가 완료되면 실행됨)
    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
        // 서버로부터 받아오는 시간이 짧음
        this.callApi()
            .then(res => this.setState({names : res}))
            .catch(err => console.log(err));
    }

    // async 비동기식(동시에 일어나지 않음)
    callApi = async () => {
        const response = await fetch('/test');
        const names = await response.json();
        return names;
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({completed : completed >= 100 ? 0 : completed + 1});
    }

    render() {

        return (
            <div>
                
            </div>

        )
    }
}


export default Home;

