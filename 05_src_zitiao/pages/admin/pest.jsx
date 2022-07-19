import React, { Component } from 'react';
import './index.less'

export default class pest extends Component {
  state ={
    items:[ 
    {
        "id":1,
        "name":"毒死蜱",
        "key":"/admin/pest"
    },
    {
        "id":2,
        "name":"甲萘威",
        "key":"/admin/pest/jnw"
    },
    {
        "id":3,
        "name":"乐果",
        "content":"有机磷"
    },
    {
        "id":4,
        "name":"DDT",
        "content":"有机氯"
    }]
  }
  render() {
    return (
    <div className='pestsearch'>
       <form  action="https://baike.baidu.com/item/%E6%B0%AF%E5%90%A1%E7%A1%AB%E7%A3%B7/2417082?fromtitle=%E6%AF%92%E6%AD%BB%E8%9C%B1&fromid=2592846&fr=aladdin" className="fm  has-soutu">
        <input className="pestinput"  placeholder='请输入搜索内容' />
        <input type="submit"  value="搜索" className="pestsousuo"/>
         </form> 
    </div>
    )}
}
