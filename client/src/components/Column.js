import React, { Component } from "react";
import { TableRow, TableCell, Checkbox, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    color: {
        color: "#636363"
    },
    wth: {
        width: '100%'
    }
});

class Column extends Component {
    
    render() {
        let selectIdArr = new Array();

        const { classes } = this.props;
        return (
            <TableRow>
                <TableCell>
                    <Checkbox
                        onChange={e => {
                            // selectIdArr.push(this.props.writeNum));
                            console.log(selectIdArr);
                            selectIdArr.push('1');
                        }}
                    >

                    </Checkbox>
                </TableCell>
                <TableCell className={classes.color} ><Typography align="center">{this.props.writeNum}</Typography></TableCell>
                <TableCell className={classes.color} ><Typography align="center">{this.props.title}</Typography></TableCell>
                <TableCell className={classes.color} ><Typography align="center">{this.props.writer}</Typography></TableCell>
            </TableRow>
        )
    }

}

export default withStyles(styles)(Column);