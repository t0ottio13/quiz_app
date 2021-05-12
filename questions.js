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

let count = 0;
let saveItem = "";
let savedItem = [];
$('#category').text(category[count]);
$('#question').text(questions[count]);

function setSave(val) {
    console.log(saveItem);
    savedItem.push(val);
    window.localStorage.setItem('key', JSON.stringify(savedItem));
}

$('#next').on('click', () => {
    try {
        saveItem = window.localStorage.getItem('key');

    } catch (error) {
        console.log(error);
    }

    const factValue = $('textarea[name="fact"]').val();
    const abstractValue = $('textarea[name="abstract"]').val();
    const divertValue = $('textarea[name="divert"]').val();
    const data = {
        questionNo: count,
        fact: factValue,
        abstract: abstractValue,
        divert: divertValue
    };
    console.log(saveItem);
    setSave(data);

    count++;
    $('#category').text(category[count]);
    $('#question').text(questions[count]);
    $('textarea[name="fact"]').val("");
    $('textarea[name="abstract"]').val("");
    $('textarea[name="divert"]').val("");
});


