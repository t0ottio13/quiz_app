const questions = [
    // introduction
    'なぜ自己分析をするのか?',
    '現在の自分の人生の軸は？',
    '自分の夢と向き合うことで、何を得たいのか？',
    // 幼少期
    '将来の夢は？',
    '理想の職業は？',
    '理想の人は？',
    '理想の食生活は？',
    '理想の住まいは？',
    '理想の年収は？',
    '理想のパートナーは？',
    'あなたの信念は何か？',
    // 小学生
    '将来の夢は？',
    '理想の職業は？',
    '理想の人は？',
    '理想の食生活は？',
    '理想の住まいは？',
    '理想の年収は？',
    '理想のパートナーは？',
    'あなたの信念は何か？',
    // 中学生
    '将来の夢は？',
    '理想の職業は？',
    '理想の人は？',
    '理想の食生活は？',
    '理想の住まいは？',
    '理想の年収は？',
    '理想のパートナーは？',
    'あなたの信念は何か？',
    // 高校生
    '将来の夢は？',
    '理想の職業は？',
    '理想の人は？',
    '理想の食生活は？',
    '理想の住まいは？',
    '理想の年収は？',
    '理想のパートナーは？',
    'あなたの信念は何か？',
    // 大学生
    '将来の夢は？',
    '理想の職業は？',
    '理想の人は？',
    '理想の食生活は？',
    '理想の住まいは？',
    '理想の年収は？',
    '理想のパートナーは？',
    'あなたの信念は何か？',
    // 社会人（20代）
    '将来の夢は？',
    '理想の職業は？',
    '理想の人は？',
    '理想の食生活は？',
    '理想の住まいは？',
    '理想の年収は？',
    '理想のパートナーは？',
    'あなたの信念は何か？',
    // 未来
    // 30代
    '30代になったときどんな仕事をしたいか？',
    '30代になったときの地位は？',
    '30代になったら、世の中にどんな影響を与えている？',
    '30代の年収は？',
    '何に優先的にお金を使いたいか？',
    '30代になったらどこに住みたいか？',
    '30代のライフスタイルは？',
    '30代で新たにチャレンジしたいことは？',
    '30代は、周りからどのような役割を期待されているか？',
    // 40代
    '40代になったときどんな仕事をしたいか？',
    '40代になったときの地位は？',
    '40代になったら、世の中にどんな影響を与えている？',
    '40代の年収は？',
    '何に優先的にお金を使いたいか？',
    '40代になったらどこに住みたいか？',
    '0代のライフスタイルは？',
    '40代で新たにチャレンジしたいことは？',
    '40代は、周りからどのような役割を期待されているか？',
    // 50代
    '50代になったときどんな仕事をしたいか？',
    '50代になったときの地位は？',
    '50代になったら、世の中にどんな影響を与えている？',
    '50代の年収は？',
    '何に優先的にお金を使いたいか？',
    '50代になったらどこに住みたいか？',
    '50代のライフスタイルは？',
    '50代で新たにチャレンジしたいことは？',
    '50代は、周りからどのような役割を期待されているか？',
    // その後
    '何歳まで働いていたい？',
    'そのとき、どんな地位にいたいか？',
    'そのとき、世の中にはどんな影響を与えているか？',
    'そのとき、資産はどのくらいあるか？',
    '何に優先的にお金を使いたいか？',
    'そのとき、どこに住んでいるのか？',
    'そのときのライフスタイルは？',
    '新たにチャレンジしたいことは何か？',
    '周りからどのような役割を期待されているか？',
    '死ぬまでに実現したいことは？(家族・親戚に関すること)',
    '死ぬまでに実現したいことは？(友人・知人に関すること)',
    '死ぬまでに実現したいことは？(勉強・仕事に関すること)',
    '死ぬまでに実現したいことは？(趣味に関すること)',
    '死の瞬間はどう迎えたいか',
    // 現在
    '将来の夢は？',
    '理想の職業は？',
    '理想の人は？',
    '理想の食生活は？',
    '思想の住まいは？',
    '思想の年収は？',
    '理想のパートナーは？',
    'あなたの信念は何か？'
];

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

function categoryCount() {
    if (count == 0) {
        $('#category').text(category[0]);
    } else if (count < 11) {
        $('#category').text(category[0]);
    } else if (count < 19) {
        $('#category').text(category[0]);
    } else if (count < 27) {
        $('#category').text(category[0]);
    } else if (count < 35) {
        $('#category').text(category[0]);
    } else if (count < 43) {
        $('#category').text(category[0]);
    } else if (count < 51) {
        $('#category').text(category[0]);
    } else if (count < 92) {
        $('#category').text(category[0]);
    } else if (count < 100) {
        $('#category').text(category[0]);
    } else {
    }
}


// 初期設定
let count = 0;
let saveItem = [];
$('#category').text(category[count]);
categoryCount();



// テキストのlocalStorageの値を読み込む
function readItem(val) {
    if (window.localStorage.getItem(val) == null) {
        window.localStorage.setItem('key', JSON.stringify(saveItem));
    } else {
        const i = window.localStorage.getItem(val);
        saveItem = JSON.parse(i);
    }
}


// テキストの値をlocalStorageに保存する。
function setSave(val) {
    console.log(saveItem);
    window.localStorage.setItem('key', JSON.stringify(saveItem));
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
});


