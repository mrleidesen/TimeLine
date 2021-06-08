export const timelines = [
  {
    name: 'Battlefield 6 Reveal Event',
    desc: '战地6/战地2042 发布会，公布新作最新消息。',
    time: '2021/06/09 07:00:00', // 太平洋时间
    live: 'https://www.youtube.com/c/Battlefield/featured'
  },
  {
    name: 'Summer Game Fest Kickoff Live!',
    desc: '夏日游戏节',
    time: '2021/06/10 11:00:00', // 太平洋时间
    live: 'https://www.youtube.com/watch?v=MqXeohrnoaY'
  },
  {
    name: 'Netflix Geeked Week',
    desc: 'Netflix 游戏改编影视剧宣传和预告片',
    time: '2021/06/11 09:00:00', // 太平洋时间
    live: 'https://www.twitch.tv/netflix'
  },
  {
    name: 'Koch Primetime',
    desc: '深银（Deep Silver）母公司发布会',
    time: '2021/06/11 12:00:00', // 太平洋时间
    live: 'https://www.youtube.com/channel/UCqDS7KWjAPKv-7ZSlro9OiQ'
  },
  {
    name: 'IGN Expo 2021',
    desc: '公布多款新作、实机演示和独家内容',
    time: '2021/06/11 13:00:00', // 太平洋时间
    live: 'https://www.twitch.tv/ign'
  },
  {
    name: 'Guerrilla Collective Showcase & Wholesome Direct',
    desc: '',
    time: '2021/06/12 08:00:00', // 太平洋时间
    live: 'https://www.twitch.tv/guerrillacollective'
  },
  {
    name: 'Ubisoft Forward',
    desc: '育碧发布会',
    time: '2021/06/12 12:00:00', // 太平洋时间
    live: 'https://www.twitch.tv/ubisoft'
  },
  {
    name: 'Xbox + Bethesda Games Showcase',
    desc: '微软+B社发布会',
    time: '2021/06/13 10:00:00', // 太平洋时间
    live: 'https://www.twitch.tv/Xbox'
  },
  {
    name: 'Square Enix E3 Conference',
    desc: '史克威尔艾尼克斯E3发布会',
    time: '2021/06/13 12:15:00', // 太平洋时间
    live: 'https://www.twitch.tv/squareenix'
  },
  {
    name: 'PC Gaming Show',
    desc: 'PC Gaming Show会在6月13日与Future Games Show一同举办',
    time: '2021/06/13 14:30:00', // 太平洋时间
    live: 'https://www.twitch.tv/pcgamer'
  },
  {
    name: 'Nintendo Treehouse Live',
    desc: '任天堂直面会',
    time: '2021/06/15 09:00:00', // 太平洋时间
    live: 'https://www.twitch.tv/nintendo'
  },
  {
    name: 'Bandai Namco Presentation',
    desc: '万代南梦宫发布会',
    time: '2021/06/15 14:30:00', // 太平洋时间
    live: 'https://www.twitch.tv/bandainamcous'
  },
  {
    name: 'Steam Next Fest',
    desc: 'Steam新品节',
    time: '2021/06/16 10:00:00', // 太平洋时间
    live: 'https://store.steampowered.com/sale/nextfest?utm_source=keylol&curator_clanid=9730205'
  },
  {
    name: 'EA Play Live',
    desc: 'EA发布会',
    time: '2021/07/22 00:00:00', // 太平洋时间
    live: 'https://www.twitch.tv/ea'
  },
  // {
  //   name: '',
  //   desc: '',
  //   time: '2021/06/09 07:00:00', // 太平洋时间
  //   live: ''
  // },
]

export const sortTimelines = timelines.sort((a, b) => (new Date(a.time).getTime() - new Date(b.time).getTime()))