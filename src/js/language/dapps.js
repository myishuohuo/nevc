const language = {
    zh: {
      title: 'Themis OTC',
      content: 'Themis OTC是首个基于Themis公有链的场外交易平台，依托公平交换协议让交易双方的支付和交付能够同时达成，有效避免了欺诈问题。',
      coming_soon: '敬请期待!',
      future: '未来'
    },
    en: {
      title: 'Themis OTC',
      content: "Themis OTC is the first over-the-counter trading platform based on Themis's public chain. It relies on a fair exchange protocol to enable both parties to pay and deliver at the same time, effectively avoiding fraud problems.",
      coming_soon: 'COMING SOON!',
      future: 'FUTURE',
    }
  
  }
  
  module.exports = language[localStorage.language] || language.zh;
  