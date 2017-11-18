$(function () {
  var data = [
    {
        "id": "01",
        "img": "../img/01.png",
        "name": "程瑶",
        "age": "18岁",
        "birth": "08月10日",
        "hobby": "篮球、街舞、玩游戏",
        "saying": "没有梦想，何必远方"
    },
    {
        "id": "02",
        "img": "../img/02.png",
        "name": "冯晨",
        "age": "19岁",
        "birth": "6月18日",
        "hobby": "听音乐看书",
        "saying": "不要轻易怕输，一切都要靠自己"
    },
    {
        "id": "03",
        "img": "../img/03.png",
        "name": "黄聪聪 ",
        "age": "19岁",
        "birth": "5月6日",
        "hobby": "画画；乒乓球；羽毛球；春、夏、秋、冬游",
        "saying": "想说就说，不想说就保持沉默"
    },
    {
        "id": "04",
        "img": "../img/04.jpg",
        "name": "黄晓茉",
        "age": "19岁",
        "birth": "9月21日",
        "hobby": "听歌、看书",
        "saying": "鸢飞戾天、鱼跃于渊"
    },
    {
        "id": "05",
        "img": "../img/05.png",
        "name": "黄亚",
        "age": "18岁",
        "birth": "2月11日",
        "hobby": "做手账，看书",
        "saying": "不要原谅自己碌碌无为还说平凡可贵"
    },
    {
        "id": "06",
        "img": "../img/06.png",
        "name": "黄玉淑",
        "age": "19岁",
        "birth": "6月1日",
        "hobby": "画画、吃饭",
        "saying": "非咸鱼，不人生"
    },
    {
        "id": "07",
        "img": "../img/07.jpg",
        "name": "雷俊瑞",
        "age": "18岁",
        "birth": "6月26日",
        "hobby": "代码、睡觉、听歌",
        "saying": "念念不忘，必有回响"
    },
    {
        "id": "08",
        "img": "../img/08.png",
        "name": "马若轩",
        "age": "19岁",
        "birth": "二月二（龙抬头）",
        "hobby": "唱歌，文艺电影，日漫，《盗墓笔记》",
        "saying": "从不依靠，从不寻找;非常沉默，非常骄傲"
    },
    {
        "id": "09",
        "img": "../img/09.jpg",
        "name": "王靖仪",
        "age": "18岁",
        "birth": "4月27日",
        "hobby": "绘画、嗨歌、电影、神游、特摄",
        "saying": "只要心还透明，就能折射希望"
    },
    {
        "id": "10",
        "img": "../img/10.jpg",
        "name": "伍翊",
        "age": "17岁",
        "birth": "11月11日",
        "hobby": "学习、摄影、新闻",
        "saying": "学习使我快乐"
    },
    {
        "id": "11",
        "img": "../img/11.png",
        "name": "薛星雨",
        "age": "18岁",
        "birth": "8月1日",
        "hobby": "横笛、听音乐、运动、看电影、阅读",
        "saying": "得之坦然，失之淡然，顺其自然，争其必然。"
    },
    {
        "id": "12",
        "img": "../img/12.jpg",
        "name": "曾小雪",
        "age": "18岁",
        "birth": "11月8日",
        "hobby": "Dance、听歌、看书、电影、美食",
        "saying": "世界对于我来说没有什么不可能。"
    },
    {
        "id": "13",
        "img": "../img/13.png",
        "name": "赵婉雯",
        "age": "18岁",
        "birth": "9月1日",
        "hobby": "外语，写作，戏剧，化妆",
        "saying": "The things，which are soul-crushingly hard at the moment,might turn out to be the source of tremendous pride in retrospect."
    },
    {
        "id": "14",
        "img": "../img/14.png",
        "name": "陈嘉成",
        "age": "18岁",
        "birth": "12月22日",
        "hobby": "音乐,动漫,视频制作",
        "saying": "love forever or never"
    },
    {
        "id": "15",
        "img": "../img/15.png",
        "name": "陈鑫灿",
        "age": "20岁",
        "birth": "1月10日",
        "hobby": "排球，游戏",
        "saying": "人之所以能，是相信能"
    },
    {
        "id": "17",
        "img": "../img/17.png",
        "name": "何仰峰",
        "age": "18岁",
        "birth": "4月8日",
        "hobby": "吉他，葫芦丝，唱歌",
        "saying": "生命不息，奋斗不止。"
    },
    {
        "id": "18",
        "img": "../img/18.png",
        "name": "姜旭龙",
        "age": "18岁",
        "birth": "6月20日",
        "hobby": "运动，绘画 ",
        "saying": "既来之，则安之"
    },
    {
        "id": "19",
        "img": "../img/19.png",
        "name": "江海洋",
        "age": "18岁",
        "birth": "2月8日",
        "hobby": "篮球，吉他",
        "saying": "随遇而安"
    },
    {
        "id": "20",
        "img": "../img/20.png",
        "name": "李超杰",
        "age": "18岁",
        "birth": "8月14日",
        "hobby": "英雄联盟",
        "saying": "好好学习，天天向上！"
    },
    {
        "id": "21",
        "img": "../img/21.png",
        "name": "林浩晖",
        "age": "18岁",
        "birth": "4月8日",
        "hobby": "唱歌，排球，围棋",
        "saying": "活出自由，活出自己"
    },
    {
        "id": "22",
        "img": "../img/22.png",
        "name": "林洁",
        "age": "19岁",
        "birth": "1月7日",
        "hobby": "羽毛球",
        "saying": "高兴就好"
    },
    {
        "id": "23",
        "img": "../img/23.jpg",
        "name": "刘成洋",
        "age": "18岁",
        "birth": "2月4日",
        "hobby": "唱歌，篮球",
        "saying": "天道酬勤"
    },
    {
        "id": "24",
        "img": "../img/24.jpg",
        "name": "马靖皓",
        "age": "19岁",
        "birth": "11月5日",
        "hobby": "足球、音乐、动漫",
        "saying": "Where there's a will, there's a way;"
    },
    {
        "id": "25",
        "img": "../img/25.jpg",
        "name": "钱星州",
        "age": "18岁",
        "birth": "10月11日",
        "hobby": "女",
        "saying": "无"
    },
    {
        "id": "26",
        "img": "../img/26.png",
        "name": "王柏楷",
        "age": "18岁",
        "birth": "3月9日",
        "hobby": "绝地求生，VC，电脑游戏；",
        "saying": "水能载舟，亦可赛艇！"
    },
    {
        "id": "27",
        "img": "../img/27.png",
        "name": "王楚元",
        "age": "18岁",
        "birth": "3月15日",
        "hobby": "绝地求生，VC，300英雄",
        "saying": "能力至上！"
    },
    {
        "id": "28",
        "img": "../img/28.jpg",
        "name": "吴广豪",
        "age": "17岁",
        "birth": "3月22日",
        "hobby": "电子游戏、乒乓球、看书",
        "saying": "作我想作"
    },
    {
        "id": "29",
        "img": "../img/29.png",
        "name": "吴廉川",
        "age": "19岁",
        "birth": "1月15日",
        "hobby": "玩",
        "saying": "命运负责洗牌，但玩牌的是我们自己！"
    },
    {
        "id": "30",
        "img": "../img/30.png",
        "name": "夏诗淇 ",
        "age": "18岁",
        "birth": "10月15日",
        "hobby": "音乐",
        "saying": "随心随行"
    },
    {
        "id": "31",
        "img": "../img/31.jpg",
        "name": "辛赜兮",
        "age": "18岁",
        "birth": "3月14日",
        "hobby": "篮球、钢音乐、电影",
        "saying": "不忘初心，野蛮生长"
    },
    {
        "id": "32",
        "img": "../img/32.jpg",
        "name": "徐治伟",
        "age": "18岁",
        "birth": "5月12日",
        "hobby": "书",
        "saying": "遇到对的人"
    },
    {
        "id": "33",
        "img": "../img/33.jpg",
        "name": "徐子凯",
        "age": "18岁",
        "birth": "6月11日",
        "hobby": "摄影",
        "saying": "没有什么不可能"
    },
    {
        "id": "34",
        "img": "../img/34.jpg",
        "name": "杨子豪",
        "age": "18岁",
        "birth": "6月18日",
        "hobby": "滑雪",
        "saying": "少吃饭、多睡觉"
    },
    {
        "id": "35",
        "img": "../img/35.jpg",
        "name": "张博林",
        "age": "18岁",
        "birth": "10月18日",
        "hobby": "学习等",
        "saying": "不是我找HipHop，是它找我"
    },
    {
        "id": "36",
        "img": "../img/36.png",
        "name": "张奋进",
        "age": "18岁",
        "birth": "9月30日",
        "hobby": "乒乓球，看电影  ",
        "saying": "充钱，变强"
    },
    {
        "id": "37",
        "img": "../img/37.jpg",
        "name": "张家宁",
        "age": "19岁",
        "birth": "10月8日",
        "hobby": "睡觉",
        "saying": "我不为HipHop生，但我为它死"
    },
    {
        "id": "38",
        "img": "../img/38.jpg",
        "name": "朱启龙",
        "age": "18岁",
        "birth": "4月5日",
        "hobby": "打游戏、画画、球类运动等",
        "saying": "吃好喝好睡好玩好。"
    },
    {
        "id": "39",
        "img": "../img/39.png",
        "name": "朱彦斌",
        "age": "18岁",
        "birth": "2月1日",
        "hobby": "乒乓球，看电影 ",
        "saying": "充钱，变强"
    }
]
  // var data = {
  //   'dataImg': [{
  //     'img': '1.jpg'
  //   }, {
  //     'img': '2.jpg'
  //   }, {
  //     'img': '3.jpg'
  //   }, {
  //     'img': '4.jpg'
  //   }, {
  //     'img': '5.jpg'
  //   }, {
  //     'img': '6.jpg'
  //   }, {
  //     'img': '7.jpg'
  //   }, {
  //     'img': '8.jpg'
  //   }, {
  //     'img': '9.jpg'
  //   }, {
  //     'img': '10.jpg'
  //   }, {
  //     'img': '11.jpg'
  //   }, {
  //     'img': '12.jpg'
  //   }, {
  //     'img': '13.jpg'
  //   }, {
  //     'img': '14.jpg'
  //   }, {
  //     'img': '15.jpg'
  //   }, {
  //     'img': '16.jpg'
  //   }, {
  //     'img': '17.jpg'
  //   }, {
  //     'img': '18.jpg'
  //   }, {
  //     'img': '19.jpg'
  //   }, {
  //     'img': '20.jpg'
  //   }, {
  //     'img': '21.jpg'
  //   }, {
  //     'img': '22.jpg'
  //   }, {
  //     'img': '23.jpg'
  //   }, {
  //     'img': '24.jpg'
  //   }, {
  //     'img': '25.jpg'
  //   }, {
  //     'img': '26.jpg'
  //   }, {
  //     'img': '27.jpg'
  //   }, {
  //     'img': '28.jpg'
  //   }, {
  //     'img': '29.jpg'
  //   }, {
  //     'img': '30.jpg'
  //   }]

  // };

        //   $ .getJSON("data.json",function(data)
        // {
        //     $.each(data, function (i,item) {
        //       var newBox = $('<div>').addClass('box').appendTo($('#masonry'));
        //       $('<img>').attr('src', 'img/' + item.img).appendTo($(newBox));
        //         $("<div>").text("姓名："+item.name).appendTo($(newBox));
        //         $("<div>").text("年龄："+item.age).appendTo($(newBox));
        //         $("<div>").text("生日："+item.birth).appendTo($(newBox));
        //         $("<div>").text("兴趣爱好："+item.hobby).appendTo($(newBox));
        //         $("<div>").text("人生格言："+item.saying).appendTo($(newBox));
        //     })
        // });
            $.each(data, function (index, value) {
              var newBox = $('<div>').addClass('box').appendTo($('#masonry'));
              $('<img>').attr('src', 'img/' + data[index].img).appendTo($(newBox));
                $("<div>").text("姓名："+data[index].name).appendTo($(newBox));
                $("<div>").text("年龄："+data[index].age).appendTo($(newBox));
                $("<div>").text("生日："+data[index].birth).appendTo($(newBox));
                $("<div>").text("兴趣爱好："+data[index].hobby).appendTo($(newBox));
                $("<div>").text("人生格言："+data[index].saying).appendTo($(newBox));
            })

  var $container = $('#masonry');
  $container.imagesLoaded(function () {
    $container.masonry({
      itemSelector: '.box',
      gutter: 20,
      isAnimated: true,
    });
  });
});