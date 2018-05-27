# 支持 Muse-UI

Muse-UI是一个在MIT授权下的开源项目。它现在允许并且永远允许免费使用。 然而, 维护核心框架和所有补充包所花费的工作量是相当繁重的。随着项目规模的增长，也需要有相应的资金支持才能持续项目的维护与开发。

你可以通过下列的方法来赞助 Muse-UI 的开发。

## 一次性赞助

<p>
  <mu-menu open-on-hover placement="right">
    <a href="javascript:;">微信支付</a>
    <img :src="WechatImg" width="273" slot="content">
  </mu-menu>
<p>
<p>
  <mu-menu open-on-hover placement="right">
    <a href="javascript:;">支付宝</a>
    <img :src="PayImg" width="273" slot="content">
  </mu-menu>
</p>

## 周期性赞助

周期性赞助可以获得额外的回报，比如你的名字 会出现在 Muse-UI 的 GitHub 仓库和现在我们的官网中。

* 通过 [Patreon](https://www.patreon.com/MuseUI) 赞助成为 backer
* 给我们发邮件联系赞助事宜: myronliu347@gmail.com


<script>
import PayImg from '../../assets/images/pay.png';
import WechatImg from '../../assets/images/wechat.png';
export default {
  data () {
    return {
      PayImg,
      WechatImg
    };
  }
}
</script>
