function moveRight () {
    if (obstacleX < 4) {
        obstacleX += 1
    }
}
function resetGame () {
    score = 0
    gameover = false
    obstacleX = Math.random() * 4
    basic.clearScreen()
    basic.showString("GO")
}
input.onButtonPressed(Button.A, function () {
    if (gameover) {
        resetGame()
    } else {
        moveLeft()
    }
})
input.onButtonPressed(Button.B, function () {
    if (gameover) {
        resetGame()
    } else {
        moveRight()
    }
})
function moveLeft () {
    if (obstacleX > 0) {
        obstacleX += 0 - 1
    }
}
let gameover = false
let score = 0
let obstacleX = 0
// 障礙物的初始位置
obstacleX = Math.random() * 4
// 顯示開始遊戲的提示
basic.showString("GO")
// 顯示開始遊戲的提示
basic.forever(function () {
    if (!(gameover)) {
        // 清空LED矩陣
        basic.clearScreen()
        // 繪製角色
        led.plot(Math.round(obstacleX), 0)
        // 障礙物移動
        obstacleX += input.acceleration(Dimension.X) / 1000
        if (obstacleX < 0) {
            obstacleX = 0
        } else if (obstacleX > 4) {
            obstacleX = 4
        }
        // 碰撞檢測
        if (led.point(Math.round(obstacleX), 0)) {
            gameover = true
        }
        // 更新分數
        score += 1
        basic.showNumber(score)
        // 遊戲速度控制
        basic.pause(200)
    } else {
        basic.showString("Score: " + score)
    }
})
