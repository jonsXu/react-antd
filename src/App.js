import React from 'react';
import logo from './logo.svg';
import {Button} from 'antd';
import './App.css';
import './test.less';
class App extends React.Component{
  componentDidMount() {
    //调用此方法，可以动态修改主题
window.less.modifyVars(
    {
        '@primary-color': '#409eff',
        '@link-color': '#ee5e7b',
        '@btn-primary-bg': 'ee5e7b',
    }
)
.then(() => { 

})
.catch(error => {
    console.log(error)
});
}
  render (){
    return (
      <div className="App" style={{height:'100%'}}>
       {this.props.children}
     </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       {this.props.children}
//     </div>
//   );
// }

export default App;
