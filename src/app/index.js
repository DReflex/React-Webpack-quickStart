import React from 'react';
import ReactDOM from 'react-dom';

class AppComponent extends React.Component{
  constructor () {
    super();
  }
  render(){
  return(<div><h1>This is React component gl & hf</h1></div>

  )
}
}
ReactDOM.render(<AppComponent/>, document.getElementById('app.component'))
