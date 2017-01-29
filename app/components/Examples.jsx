var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are some examples to try out:</p>
      <ol>
        <li>
          <Link todo='/?Location=Belgrade'>Beograd, RS</Link>
        </li>
        <li>
          <Link todo='/?Location=Kragujevac'>Kragujevac, RS</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
