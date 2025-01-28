// 直接在代码中定义回忆数据
const memories = [
    {
        image: 'images/11.png',
        description: ' '
    },
    {
        image: 'images/33.png',
        description: ' '
    },
    {
        image: 'images/22.png',
        description: ' '
    }
];

// 渲染回忆
const memoriesContainer = document.getElementById('memories-container');
memories.forEach(memory => {
    const memoryDiv = document.createElement('div');
    memoryDiv.classList.add('memory');

    const img = document.createElement('img');
    img.src = memory.image;
    img.alt = memory.description;

    const description = document.createElement('p');
    description.textContent = memory.description;

    memoryDiv.appendChild(img);
    memoryDiv.appendChild(description);
    memoriesContainer.appendChild(memoryDiv);
});

// 祝福功能
const getBlessingBtn = document.getElementById('get-blessing-btn');
const blessingResult = document.getElementById('blessing-result');
const blessings = [
    "去事千般皆如愿，今年万事定称心。",
    "初岁元祚，吉日惟良,愿尔祯祥，岁岁如常。",
    "希望在新的一年里，你能收获满满的健康、幸福和快乐，好运常伴左右。",
    "愿新的一年，你能勇敢追逐自己的目标，无畏前行，享受自己的生活。"
];

getBlessingBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * blessings.length);
    blessingResult.textContent = blessings[randomIndex];
});