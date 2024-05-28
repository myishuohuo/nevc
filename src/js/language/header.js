const language = {
  zh: {
    home: '首页',
    consulting: '通证化服务',
    development: '区块链产品开发',
    case: '成功案例',
    team: '团队介绍',
    news: '新闻中心',
  },
  en: {
    home: 'Home',
    resources: 'Resources',
    faq: 'FAQ',
    whitePaper: 'White Paper',
    press: 'Press',
    announcement: 'Announcement',
    developer: 'Developer',
    browsers: 'Browsers',
    DAPPS: 'DApps',
    about: 'About',
    team: 'Team',
    investors: 'Investors'
  }

}

module.exports = language[localStorage.language] || language.zh;
