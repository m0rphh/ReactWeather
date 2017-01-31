var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's {temp}°C in <span className="velika"><p>{location}.</p></span></h3>
  )
};

module.exports = WeatherMessage;
