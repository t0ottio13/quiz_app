const questions = [
    // introduction
    'なぜジーズアカデミーに通うのか?',
    'なぜプログラミングを学習するのか？'
];


//


// 初期設定
let count = 0;
let saveItem = [];
readItem('key');
// categoryCount();


// localStorageの質問を読み込む

// テキストのlocalStorageの値を読み込む
function readItem(val) {
    if (window.localStorage.getItem(val) == null) {
        window.localStorage.setItem('key', JSON.stringify(saveItem));
    } else {
        const i = window.localStorage.getItem(val);
        saveItem = JSON.parse(i);
    }
    console.log(saveItem[count]['question']);
}

// function readItem(val) {
//     if (window.localStorage.getItem(val) == null) {
//         window.localStorage.setItem('key', JSON.stringify(saveItem));
//     } else {
//         const i = window.localStorage.getItem(val);
//         saveItem = JSON.parse(i);
//     }
// }


// テキストの値をlocalStorageに保存する。
function setSave(val) {
    console.log(saveItem);
    window.localStorage.setItem('key', JSON.stringify(saveItem));
    saveItem.push(val);
    console.log(saveItem);
    window.localStorage.setItem('key', JSON.stringify(saveItem));
}

// 保存ボタンを押した時の処理
$('#save').on('click', ()=> {
    readItem('key');

    const reasonValue = $('textarea[name="reason"]').val();
    const purposeValue = $('textarea[name="purpose"]').val();
    const actionValue = $('textarea[name="action"]').val();
    const data = {
        id: count,
        question: questions[count],
        reason: reasonValue,
        purpose: purposeValue,
        action: actionValue
    };
    setSave(data);
    alert('保存しました');
})

// 次へボタンを押した時の処理
$('#next').on('click', () => {
    count++;
    // categoryCount();
    console.log(saveItem[count]['question']);
    $('#question').text("Q." + questions[count]);
    $('textarea[name="reason"]').val("");
    $('textarea[name="purpose"]').val("");
    $('textarea[name="action"]').val("");
});

$('#back').on('click', () => {
    count = count - 1;
    console.log('back');
    $('#category').text(category[count]);
    $('#question').text(questions[count]);
    $('textarea[name="reason"]').val("");
    $('textarea[name="purpose"]').val("");
    $('textarea[name="action"]').val("");
});

