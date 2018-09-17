import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Questions.css';

const styles = theme => ({
  root: {
    width: '100%',
    color: 'red',
    backgroundcolor: 'white',
  },
  numberflex: {
    fontSize: theme.typography.pxToRem(80),
    flexBasis: '20%',
    fontFamily: 'futura'
  },
  question: {
    fontSize: theme.typography.pxToRem(80),
    color: 'red',
    fontFamily: 'futura'
  },
  response: {
    fontSize: theme.typography.pxToRem(30),
    color: 'red',
    fontFamily: 'futura',
    marginLeft: '400px',
    marginRight: '50px',
  },

});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root} >
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} elevation={0} >
          <ExpansionPanelSummary elevation={0}> 
            <div className="x-rotate">
            <Typography className={classes.numberflex} ><span className="toggle-icon" >1</span></Typography>
            <Typography className={classes.question}><span className="question" >Who got married?</span></Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails >
            <Typography className={classes.response}  >
            Rachel Meghan Markle, a.k.a. Meghan Markle, an American actress best known for playing Rachel Zane in the long-running legal-intrigue drama “Suits,” married Prince Henry Charles Albert David of Wales, a.k.a. Prince Harry. See all our royal wedding coverage here.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} elevation={0} >
          <ExpansionPanelSummary elevation={0}>
          <div className="x-rotate">
          <Typography className={classes.numberflex} ><span className="toggle-icon">2</span></Typography>
            <Typography className={classes.question}>
            When, exactly?
            </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.response}>
            Saturday, May 19, 2018. The ceremony happened at noon local time (7 a.m. Eastern time) and lasted about an hour.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);