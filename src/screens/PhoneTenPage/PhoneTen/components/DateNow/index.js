import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class DateNow extends React.Component{

  getHours = (date) => {
    return (date.heure < 10 ? "0" + date.heure : date.heure) + ":" + (date.minute < 10 ? "0" + date.minute : date.minute);
  }
  getDate = (date) => {
    let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let month = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    let result = "";
    result += days[date.jour] + " ";
    result += date.numJour + " ";
    result += month[date.mois];
    return result;
  }

  render(){
    return(
      <div className="datenow">
        <span>{this.getHours(this.props.date)}</span>
        <span>{this.getDate(this.props.date)}</span>
      </div>
    );
  }
}

DateNow.contextTypes = {
  t : PropTypes.func.isRequired
}
DateNow.propTypes = {
  isWhite : PropTypes.bool,
  date : PropTypes.object.isRequired
}

export default DateNow;
