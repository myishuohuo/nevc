const language = {
    zh: {
        mailbox: '邮箱：',
        mailbox_name: 'info@themis.network',

        weChat: '微信号：',
        weChat_name: 'Themis_info',

        law: '法律条款和声明',
        remarks: '©2018 Copyright By Themis Foundation',
    },
    en: {
        mailbox: 'mailbox:',
        mailbox_name: 'info@themis.network',

        weChat: 'Wechat ID:',
        weChat_name: 'Themis_info',

        law: 'Legal Terms and Conditions',
        remarks: '©2018 Copyright By Themis Foundation',
    }

}

module.exports = language[localStorage.language] || language.zh;
