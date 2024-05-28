const language = {
    zh: {
      test: '申请测试权限',
      test_content: '如果你正在创建Themis生态的项目，需要使用Themis测试网络，请填写下面的表单进行申请，申请通过后会收到邮件通知。',
      test_btn: '申请测试权限',
      text_doc: '技术文档',
    },
    en: {
      test: 'Apply Testnet Permission',
      test_content: 'If you are building Themis ecosystem projects, and you need the permission to use Themis testnet, please fill in the form below to apply,and you will receive an email notification after the application is approved.',
      test_btn: 'Apply Testnet Permission',
      text_doc: 'Technical Documents',
    }
  
  }
  
  module.exports = language[localStorage.language] || language.zh;
  