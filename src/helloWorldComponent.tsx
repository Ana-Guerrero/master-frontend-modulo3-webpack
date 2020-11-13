import * as React from 'react';
const classes = require("./helloWorldComponentStyles.scss");

export const HelloWorldComponent: React.FC = () => {
  return (
    <div className={classes.hello}>
      <span className={classes.background}>Hello World!</span>
    </div>
  );
};
