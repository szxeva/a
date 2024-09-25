function 燈數 (num: number, 亮度: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5 - 1)
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plotBrightness(x, y, 亮度)
}
input.onButtonPressed(Button.A, function () {
    if (run == 2) {
        if (user_list[answer] == 0) {
            user_list[answer] = 1
        } else {
            user_list[answer] = 0
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (run == 0) {
        run = 1
        score = 0
        answer = 0
    } else if (run == 2) {
        for (let index = 0; index <= 24; index++) {
            if (list[index] != user_list[index]) {
                run = 0
                basic.showNumber(score)
            }
        }
        if (run == 2) {
            run = 1
            score += 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (run == 2) {
        basic.clearScreen()
        for (let index = 0; index <= 24; index++) {
            if (user_list[index] == 1) {
                燈數(index / 1, 30)
            }
        }
        answer += 1
        if (answer > 24) {
            answer = 0
        }
        燈數(answer / 1, 255)
    }
})
let a = 0
let n = 0
let list: number[] = []
let score = 0
let answer = 0
let user_list: number[] = []
let y = 0
let x = 0
let run = 0
run = 0
basic.forever(function () {
    if (run == 1) {
        basic.clearScreen()
        list = []
        user_list = []
        for (let index = 0; index < 25; index++) {
            list.push(0)
            user_list.push(0)
        }
        n = 0
        while (n < 3) {
            a = randint(0, 24)
            if (list[a] == 0) {
                list[a] = 1
                n += 1
                燈數(a / 1, 255)
            }
        }
        basic.pause(2000)
        basic.clearScreen()
        run = 2
    }
})
