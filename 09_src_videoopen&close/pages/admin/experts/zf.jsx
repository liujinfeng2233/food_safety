import React, { Component } from 'react';
import {Outlet}from 'react-router-dom'
import zf from '../../../assets/zf.jpg'

export default class Zf extends Component {
  render() {
    return (
    <div>
                <h1> 
                <img className='item'  src={zf} alt=''/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <h2>张峰</h2>    
                </h1>
                
                <h2>【个人简介】</h2>
                <p>
                市场监管总局食品安全抽检监测秘书处秘书长，默多克大学博导，中国检验检测学会副会长。“国家高层次人才特殊支持计划”科技创新领军人才，国家中长期发展规划编制组专家，食品安全国家标准审评委员会理化检验方法专委会副主任委员，国家食品安全风险评估专家委员会委员。团队主持国家重点研发计划项目4项，欧盟地平线2020课题1项，国家级课题14项。在国内外发表文章240余篇，主编著作6部，授权专利15件，制定国家标准9项。主持获得国家科学技术进步奖二等奖、中国分析测试协会科学技术奖一等奖等科技奖励十余项，获得茅以升科技奖、中央国家机关五四青年奖章、全国质检系统先进工作者等。团队获得全国青年文明号、全国三八红旗集体、全国食品安全工作先进集体荣誉。
                </p>
                <h2>【详细介绍】</h2>
                <p >
	            张峰，中国检验检疫科学研究院首席专家，食品安全研究所所长，默多克大学兼职教授，原国家质检总局食品安全重点实验室主任。研究生就读于中科院大连化学物理研究所分析化学专业，毕业后前往德国马普学会生物化学研究所开展蛋白组学研究。2006年学成归国后任职中国检验检疫科学研究院。
                </p>
                <p>
	            回国至今，张峰一直从事食品安全科研事业，期间主持完成了国家级、省部级科研课题30余项，在国内外杂志上发表文章100余篇，主编中英文著作6部，授权专利9件，制定国家标准6项，且在“十三五”期间，率领团队主持了“国家重点研发计划”项目3项、国家级课题10项，并主持中欧地平线2020课题。
                </p>
                <p>
	            张峰介绍，“十三五”期间，他的团队共承担了3个食品安全关键技术的研发专项。第一个是2017年主持承担的国家重点研发计划项目《进出口药食同源产品质量检测技术研究》，主要研究当前进出口量较大的如玛咖、阿胶、葛根、山银花等药食同源产品的综合评价体系。张峰说，我国对于药食同源产品的功效成分的基础研究还相对薄弱，无法对其中的功效成分进行很好的解析。此外，缺乏可靠的品级、真伪和安全评价手段，不符合欧美国家的食品安全标准，这些问题一直制约着我国药食同源产品的进出口贸易，而这个项目可以通过构建进出口药食同源产品“品级、安全、真伪”三元综合评价技术体系，形成质量评价的整体解决技术方案，实现进出口药食同源产品质量安全的可检测、可判定、可控制、可溯源，从而促进我国该类产品的进出口贸易。
                </p>
                <p>
	            张峰介绍道，食品安全检测技术有很多，包括质谱、色谱、光谱、生物、电化学、免疫学、联用等技术。这些技术各有特点，比如光谱技术，优点在于不需要前处理，但获得的结构信息少，定性困难；色谱技术可以做分离，但定性定量需要后面的检测器参与，如果采用的是通用型检测器，会有局限性；免疫技术选择性强、灵敏度高，不过由于选择性太强，反而导致通量太低。目前，应用最广的是色谱质谱联用技术，该技术通量高、灵敏度强、分辨率及稳定性也非常不错，对食品安全检测影响较大。
                </p>
                <p>
	            除此之外，张峰及其团队还攻克了多个行业技术难题，比如，针对有害物发掘技术缺失的问题，提出以“质谱裂解机理”为基础的发掘理论，开发了以“质谱裂解标志物”为核心的发掘技术；对于前处理复杂，损失较大等问题，开发了实时直接分析质谱技术，实现了食用盐和高盐食品中5种异味物质的直接分析；开发系列食品安全绿色分析技术等。
                </p>
    <Outlet/>
    </div>
    )
}
}
