import locale from '../locale';
import ZhInstall from '../docs/zh-CN/home/install';
import ZhTheme from '../docs/zh-CN/home/theme';
import ZhUsage from '../docs/zh-CN/home/usage';

const config = {
  'zh-CN': {
    jsfiddle: '前往 jsfiddle.net 运行此示例',
    visible: '隐藏代码',
    hidden: '显示代码',
    subtitle: '基于 Vue 2.0 优雅的 Material Design UI 组件库',
    getStart: '快速上手',
    featureTitle1: '组件丰富',
    featureContent1: 'Muse UI 拥有40多个UI 组件，用于适应不同业务环境。',
    featureTitle2: '可定制',
    featureContent2: 'Muse UI 自定义主题方式及为优雅，仅需少量代码即可完成主题样式替换。',
    featureTitle3: '基于 Vue 2.0',
    featureContent3: 'Muse UI 基于 Vue2.0 开发，Vue2.0是当下最快的前端框架之一，小巧，api友好，可用于开发的复杂单页应用',
    install: '安装',
    readInstallDoc: '查看安装文档',
    usage: '使用',
    readUsage: '查看使用文档',
    custom: '定制化样式',
    customTheme: '自定义主题',
    community: '社区',
    chat: '在线讨论',
    issue: '反馈建议',
    contributing: '如何贡献',
    components: {
      'mu-install': ZhInstall,
      'mu-theme': ZhTheme,
      'mu-usage': ZhUsage
    }
  }
};

export default config[locale];
