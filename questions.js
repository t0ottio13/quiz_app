let count = 0;

const category = [
    'introduction',
    '幼少期',
    '小学生',
    '中学生',
    '高校生',
    '大学生',
    '社会人（２０代）',
    '未来',
    '現在'
];

const questions = [
    'なぜ自己分析をするのか?',
    '現在の自分の人生の軸は？',
    '自分の夢と向き合うことで、何を得たいのか？'
];

$('#category').text(category[count]);
$('#question').text(questions[count]);

function setSave(val) {
    window.localStorage.setItem('key', JSON.stringify(val)
    );
}

setSave([]);

$('#next').on('click', () => {
    const factValue = $('textarea[name="fact"]').val();
    const abstractValue = $('textarea[name="abstract"]').val();
    const divertValue = $('textarea[name="divert"]').val();

    const data = {
        questionNo: count,
        fact: factValue,
        abstract: abstractValue,
        divert: divertValue
    };

    setSave(data);

});

