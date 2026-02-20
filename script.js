// Get the section
const gallery = document.getElementById("emoji-gallery");

// Emoji decimal codes
const emojis = [
    128512, 128513, 128514, 128515,
    128516, 128517, 128518, 128519,
    128520, 128521, 128522, 128525,
    128526, 128527, 128530, 128531,
    128532, 128533
];

// Add emojis to the page
emojis.forEach((code) => {

    const card = document.createElement("div");
    card.classList.add("emoji-card");

    const emojiChar = document.createElement("span");
    emojiChar.classList.add("emoji-character");
    emojiChar.innerHTML = `&#${code};`;

    const emojiCode = document.createElement("code");
    emojiCode.textContent = code;

    card.appendChild(emojiChar);
    card.appendChild(emojiCode);
    gallery.appendChild(card);

});