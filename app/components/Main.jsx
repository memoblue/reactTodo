var React = require('react');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-center">React Boilerplate</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
