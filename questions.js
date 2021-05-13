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

// 初期設定
let count = 0;
let saveItem = "";
readItem();
$('#category').text(category[count]);
$('#question').text(questions[count]);



// テキストのlocalStorageの値を読み込む
function readItem(val){
    try {
        const i = window.localStorage.getItem(val);
        saveItem = JSON.parse(i);

    } catch (error) {
        console.log(error);
    }
}

// テキストの値をlocalStorageに保存する。
function setSave(val) {
    console.log(saveItem);
    saveItem.push(val);
    console.log(saveItem);
    window.localStorage.setItem('key', JSON.stringify(saveItem));
}

// 次へボタンを押した時の処理
$('#next').on('click', () => {
    readItem('key');

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
    count++;
    $('#category').text(category[count]);
    $('#question').text(questions[count]);
    $('textarea[name="fact"]').val("");
    $('textarea[name="abstract"]').val("");
    $('textarea[name="divert"]').val("");
});
$('#back').on('click', () => {
    count = count - 1;
    console.log('OK');
    $('#category').text(category[count]);
    $('#question').text(questions[count]);
    $('textarea[name="fact"]').val("");
    $('textarea[name="abstract"]').val("");
    $('textarea[name="divert"]').val("");
})


