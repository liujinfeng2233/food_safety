import React, { Component } from 'react';
import shian from '../../assets/shian.jpg'
import search from '../../assets/search.png'


export default class Dylz extends Component {
  render() {
    
    
    return (
    <div>
      <div className="logo"><a href="http://www.chinafst.cn/"><img src={shian} width="194" height="63" alt="食安科技"/></a></div>
      <div className="guanzhu"><font color="#FF0000">股票代码：430437<br/>股票简称：食安科技 </font></div>
      <form className="sass"action="http://www.chinafst.cn/CH/search.php" method="get" name="adds" onsubmit="return checks()">  
      <input type="text" name="input_name" id="input_name" placeholder=" 农药残留快速测试仪" />     
      &nbsp;&nbsp;&nbsp;<input type="image"  src={search} width="20" height="20"/>
     </form>
   </div>
    )}
}
