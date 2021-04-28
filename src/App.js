import React from 'react';
import './App.css';
import { makeStyles, withStyles, Button } from '@material-ui/core';

const appStyles = {
  app: {
    height: '2000px',
  },
};

const useStyles = makeStyles({
  header: {
    height: '30px',
    background: 'yellow',
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawer: {
    background: 'purple',
    overflow: 'hidden',
    transitionProperty: 'height',
    transitionDuration: '1s',
  },
  circle: {
    borderRadius: '50%',
    display: 'inline-block',
    background: 'green',
    height: '30px',
    width: '30px',
  },
});

export default withStyles(appStyles)(
  class App extends React.Component {
    state = {
      isOpen: false,
    };

    handleDrawer = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.app}>
          <Header isOpen={this.state.isOpen} handleDrawer={this.handleDrawer} />
        </div>
      );
    }
  },
);

//props
// isopen
// handler
const Header = (props) => {
  const classes = useStyles();
  return (
    <div style={{ position: 'sticky', top: 0 }}>
      <div className={classes.header}>
        header
        {/* <div className={classes.circle} onClick={props.handleDrawer}></div> */}
        <Button onClick={props.handleDrawer}>click me</Button>
      </div>
      <Drawer isOpen={props.isOpen} />
    </div>
  );
};

const Drawer = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.drawer}
      style={{ height: props.isOpen ? '400px' : '0px' }}>
      <div style={{ height: '400px' }}>drawer</div>
    </div>
  );
};
