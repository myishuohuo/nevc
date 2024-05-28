const language = {
    zh: {
        cornerstone_investor: '基石投资者',
        cornerstone_describe: '分布式资本是中国第一家也是最大的专注于区块链项目投资的风险基金',
        cornerstone_name: '沈波',
        cornerstone_p1: '创始合伙人',
        cornerstone_p2: '分布式资本',
        cornerstone_p3: 'Blockasset Fund',

        institutional_investor: '机构投资者',

    },
    en: {
        cornerstone_investor: 'Cornerstone Investors',
        cornerstone_describe: 'Fenbushi is China’s first and largest venture capital fund focused on blockchain enabled ventures',
        cornerstone_name: 'SHEN BO',
        cornerstone_p1: 'FOUNDING PARTNER',
        cornerstone_p2: 'FENBUSHI CAPITAL',
        cornerstone_p3: 'BLOCKASSET FUND',

        institutional_investor: 'Institutional Investor',
    }

}

module.exports = language[localStorage.language] || language.zh;
