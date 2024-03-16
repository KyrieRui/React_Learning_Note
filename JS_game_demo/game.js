// 获取游戏区域的DOM元素
const gameArea = document.getElementById("gameArea");
// 获取玩家的DOM元素
const player = document.createElement("div");
player.id = "player";
gameArea.appendChild(player);

// 播放背景音乐
function playBackgroundMusic() {
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.play().catch(function (error) {
    // 如果自动播放失败，在控制台中输出错误信息
    console.error("Autoplay was prevented.");
  });
}

// 定义玩家初始位置
let playerPosition = { x: 0, y: 0 };
// 定义玩家每次移动的步数
const steps = 90;

// 创建星星
const starPositions = [
  { x: 0, y: 90 },
  { x: 90, y: 180 },
  { x: 180, y: 270 },
  { x: 270, y: 270 },
];
// 遍历星星位置，创建并添加星星元素到游戏区域
starPositions.forEach((starPos) => {
  const starElement = document.createElement("div");
  starElement.classList.add("star");
  starElement.style.left = starPos.x + "px";
  starElement.style.top = starPos.y + "px";
  gameArea.appendChild(starElement);
});

// 创建木桩元素
const stumpPositions = [
  { x: 0, y: 120 },
  { x: 90, y: 210 },
  { x: 270, y: 180 },
];

// 遍历木桩位置，创建并添加木桩元素到游戏区域
stumpPositions.forEach((stumpPos) => {
  const stumpElement = document.createElement("div");
  stumpElement.classList.add("stump");
  stumpElement.style.left = stumpPos.x + "px";
  stumpElement.style.top = stumpPos.y + "px";
  gameArea.appendChild(stumpElement);
});

// 显示分数
const scoreDisplay = document.createElement("div");
scoreDisplay.id = "scoreDisplay";
scoreDisplay.style.position = "absolute";
scoreDisplay.style.bottom = "10px";
scoreDisplay.style.left = "125%";
scoreDisplay.style.transform = "translateX(-50%)";
gameArea.appendChild(scoreDisplay);

// 初始化分数
let score = 0;
updateScoreDisplay();

// 更新分数显示
function updateScoreDisplay() {
  scoreDisplay.textContent = "Rupee: " + score;
}

// 移动玩家
function movePlayer(direction, callback) {
  let newPosition = { ...playerPosition }; // 使用新的变量存储位置，以便在定时器中使用
  switch (direction) {
    case "up":
      if (newPosition.y >= steps) {
        newPosition.y -= steps;
      }
      break;
    case "down":
      if (newPosition.y + steps <= gameArea.clientHeight - 20) {
        newPosition.y += steps;
      }
      break;
    case "left":
      if (newPosition.x >= steps) {
        newPosition.x -= steps;
      }
      break;
    case "right":
      if (newPosition.x + steps <= gameArea.clientWidth - 20) {
        newPosition.x += steps;
      }
      break;
    case "reset":
      newPosition = { x: 0, y: 0 };
      score = 0;
      updateScoreDisplay();
      // 创建星星
      const starPositions = [
        { x: 0, y: 90 },
        { x: 90, y: 180 },
        { x: 180, y: 270 },
        { x: 270, y: 270 },
      ];
      // 遍历星星位置，创建并添加星星元素到游戏区域
      starPositions.forEach((starPos) => {
        const starElement = document.createElement("div");
        starElement.classList.add("star");
        starElement.style.left = starPos.x + "px";
        starElement.style.top = starPos.y + "px";
        gameArea.appendChild(starElement);
      });

      // 创建木桩元素
      const stumpPositions = [
        { x: 0, y: 120 },
        { x: 90, y: 210 },
        { x: 270, y: 180 },
      ];

      // 遍历木桩位置，创建并添加木桩元素到游戏区域
      stumpPositions.forEach((stumpPos) => {
        const stumpElement = document.createElement("div");
        stumpElement.classList.add("stump");
        stumpElement.style.left = stumpPos.x + "px";
        stumpElement.style.top = stumpPos.y + "px";
        gameArea.appendChild(stumpElement);
      });

      break;
  }

  // 检查玩家与星星的碰撞
  for (const starPos of starPositions) {
    if (newPosition.x === starPos.x && newPosition.y === starPos.y) {
      // 碰到星星后，移除星星
      removeStar(starPos);
      // 播放星星音效
      const starSound = new Audio("star.mp3");
      starSound.play();
      // 增加得分
      setTimeout(() => {
        score++;
        updateScoreDisplay();
      }, 200);
      break; // 只处理第一个碰撞到的星星
    }
  }
  setTimeout(() => {
    movePlayerElement(newPosition);
    playerPosition = { ...newPosition }; // 更新玩家位置
    if (typeof callback === "function") {
      callback(); // 在移动完成后调用回调函数
    }
  }, 200);
}

// 更新玩家位置
function movePlayerElement(newPosition) {
  player.style.left = newPosition.x + "px";
  player.style.top = newPosition.y + "px";
  playerPosition = { ...newPosition }; // 更新玩家位置
}

// 移除星星
function removeStar(starPos) {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    const starLeft = parseInt(star.style.left);
    const starTop = parseInt(star.style.top);
    if (starLeft === starPos.x && starTop === starPos.y) {
      setTimeout(() => {
        star.remove();
      }, 200);
    }
  });
}

// 执行动作序列
function movePlayerWithSequence() {
  const action1 = document.getElementById("action1").value.toLowerCase();
  const action2 = document.getElementById("action2").value.toLowerCase();
  const repeatCount = parseInt(document.getElementById("repeatCount").value);

  let count = 0;

  function executeSequence() {
    if (count < repeatCount) {
      // 先执行动作1
      movePlayer(action1, () => {
        // 在动作1完成后执行动作2
        movePlayer(action2, () => {
          // 更新计数器，执行下一次序列
          count++;
          // 递归调用 executeSequence
          executeSequence();
        });
      });
    }
  }

  executeSequence();
}
