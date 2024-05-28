const language = {
    zh: {
        roadmap: '路线图',
        weChat: '微信号：',
        weChat_name: 'Themis_info',
    },
    en: {
        roadmap: 'Roadmap',
        milestone1:'Milestone 1',
        milestone2:'Milestone 2',
        milestone3:'Milestone 3',
        milestone4:'Milestone 4',
        title1:'Themis 0.5: Complete The Overall Solution Design',
        title2:'Themis 1.0: Business and Technical Logic Verification',
        title3:'Themis 2.0: Business Model Landing',
        title4:'Themis 3.0: Themis Ecosystem Building',
        info1_1:'2017.03: Set up the team;',
        info1_2:'2017.04: Fair exchange design based on group escrow protocol;',
        info1_3:'2017.06: Anonymous reputation mechanism design;',
        info1_4:'2017.07: Themis v1.0 white paper is released;',
        info2_1:'2017.12: Prototype design of the fair exchange protocol;',
        info2_2:'2018.03: Internal testing of decentralized escrow service;',
        info2_3:'2018.06: Themis test net Alpha version goes live;',
        info2_4:'2018.07: The first application of Themis ecosystem launches;',
        info2_5:'2018.09: The cryptographic component is open source and the DPOSR consensus algorithm is released;',
        info3_1:'2018.10: Themis main net  goes live;',
        info3_2:'2019.01: Themis developer platform is released;',
        info3_3:'2019.04: Realize various scenarios such as internet finance and e-commerce based on Themis;',
        info4_1:'2019.08: Modular design of the underlying service;',
        info4_2:'2019.10: Launch Themis BaaS platform for enterprise users;',
        info4_3:'2020.06: Realize the implementation of the 50+ applications and build a completed  closed-loop of Themis ecosystem.',
        news_title1:'Themis Test Net Attracted "Mysterious" Geeks, The Easter Egg Hidden in The Genesis Block Was Decrypted',
        news_title2:'Themis(GET) Reached a Strategic Partnership with ValPromise(VPP)',
        news_title3:'The Globe is Accelerating the Deployment of Crypto Asset Escrow services, Themis Empowers Institutions Enter This Field ',
        news_title4:'Themis- The Leader in The Era of Public Chain Has Already Been Listed on Huobi Hadax',
        news_title5:'Meng Hongwei - Going Forward When You Are In Passion',
        news_title6:'Why Themis Benchmarks "Alipay"?',
        trade:'Trade On',
        media:'Media ',
        partner:'Partners',

        weChat: 'WeChat ID:',
        weChat_name: 'Themis_info',

    }

};

module.exports = language[localStorage.language] || language.zh;
