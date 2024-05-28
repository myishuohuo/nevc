const language = {
  zh: {
    test: '问答'
  },
  en: {
    test: 'FAQ'
  }

}

module.exports = language[localStorage.language] || language.zh;
