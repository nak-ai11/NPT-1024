// チャットメッセージを表示するエリアを取得
const chatMessages = document.getElementById('chat-messages');

// 入力フィールドと送信ボタンを取得
const messageInput = document.getElementById('message-input');
const sendMessageButton = document.getElementById('send-message');

// メッセージを送信する関数
function sendMessage() {
    const userMessage = messageInput.value;

    // 空のメッセージは送信しない
    if (userMessage.trim() === '') return;

    // ユーザーのメッセージを表示
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('user-message');
    userMessageDiv.textContent = `ユーザー: ${userMessage}`;
    chatMessages.appendChild(userMessageDiv);

    // ボットからの自動応答
    const botResponseDiv = document.createElement('div');
    botResponseDiv.classList.add('bot-message');
    botResponseDiv.textContent = `ボット: ${generateBotResponse(userMessage)}`;
    chatMessages.appendChild(botResponseDiv);

    // メッセージ入力フィールドをクリア
    messageInput.value = '';

    // 最新のメッセージまでスクロール
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// シンプルなボット応答を生成する関数
function generateBotResponse(userMessage) {
    // 簡単な応答例
    const responses = {
        'こんにちは': 'こんにちは！何かお手伝いできますか？',
        'ありがとう': 'どういたしまして！',
        'さようなら': 'またお会いしましょう！'
    };
    return responses[userMessage] || '申し訳ありませんが、そのメッセージには対応できません。';
}

// 送信ボタンをクリックしたときにメッセージを送信
sendMessageButton.addEventListener('click', sendMessage);

// Enterキーが押されたときにもメッセージを送信
messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
