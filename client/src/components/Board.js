import React, { Component } from "react";
import Column from "./Column";

import CircularProgress from '@material-ui/core/CircularProgress';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2
    }
});


class Board extends Component {
    // 이 부분부터 24번줄 참고해서 스타일 추가하고, 클래시즈를 circular에 추가하고 해보기
    // const styles
    // props는 변경될 수 없는 데이터 처리
    // state는 변경될 수 있는 데이터 처리

    state = {
        names: "",
        completed: 0
    }

    // API 서버에 접속하여 데이터를 받아오는 역할(모든 컴포넌트가 마운트가 완료되면 실행됨)
    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
        // 서버로부터 받아오는 시간이 짧음
        this.callApi()
            .then(res => this.setState({ names: res }))
            .catch(err => console.log(err));
    }

    // async 비동기식(동시에 일어나지 않음)
    callApi = async () => {
        const response = await fetch('/board');
        const names = await response.json();
        return names;
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    }

    render() {

        return (
            <div>
                {/* TABLE */}
                <Table style={{ width: '70vw', margin: '10vh auto 10vh auto', 'border': '1px solid #000' }}>

                    <TableRow>
                        <TableCell align="center"></TableCell>
                        <TableCell style={{width:'15%'}} align="center">번호</TableCell>
                        <TableCell style={{width:'70%'}} align="center">글제목</TableCell>
                        <TableCell style={{width:'15%'}} align="center">글쓴이</TableCell>
                    </TableRow>

                    {/* TABLEBODY */}
                    <TableBody>

                        {/* Column */}
                        {this.state.names ?
                            this.state.names.map((c) => {
                                return <Column writeNum={c.writeNum} writer={c.writer} title={c.title} content={c.content} />;
                            })
                            :
                            <div align="center"><CircularProgress className={styles.progress} variant="determinate" value={this.state.completed} ></CircularProgress></div>
                        }

                    </TableBody>
                </Table>




            </div>

        )
    }
}


export default Board;

