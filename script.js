document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = encryptText(inputText);
    toggleOutputVisibility(encryptedText);
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = decryptText(inputText);
    toggleOutputVisibility(decryptedText);
    document.getElementById('output-text').value = decryptedText;
});

function toggleOutputVisibility(text) {
    if (text.trim() === '') {
        document.getElementById('empty-message').style.display = 'flex';
        document.getElementById('output-text').style.display = 'none';
    } else {
        document.getElementById('empty-message').style.display = 'none';
        document.getElementById('output-text').style.display = 'block';
    }
}

function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

