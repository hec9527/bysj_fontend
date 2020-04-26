const message = [
    '萝莉控是什么呀',
    '你看到我的小熊了吗?',
    '110吗，这里有个变态一直在摸我(ó﹏ò｡)',
    '我要生气哟(ー`´ー)',
    '哼! 你会后悔的!!',
    '想知道我的一切么？',
    '保持微笑就好',
    '喜欢换装play?',
    '干嘛呢你，快把手拿开',
    '别过来,变态!'
];

export default {
    mouseover: [
        {
            selector: ['.live2d'],
            message: message.concat(['鼠…鼠标放错地方了！', '是…是不小心碰到了吧', '再摸的话我可要报警了！⌇●﹏●⌇'])
        }
    ],
    click: [
        {
            selector: ['.live2d'],
            message
        }
    ]
};
