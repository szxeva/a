def 燈數(num: number, 亮度: number):
    global x, y
    if num % 5 == 0:
        x = 4
        y = Math.floor(num / 5 - 1)
    else:
        x = num % 5 - 1
        y = Math.floor(num / 5)
    led.plot_brightness(x, y, 亮度)

def on_button_pressed_a():
    if run == 2:
        if user_list[answer] == 0:
            user_list[answer] = 1
        else:
            user_list[answer] = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global run, score, answer
    if run == 0:
        run = 1
        score = 0
        answer = 0
    elif run == 2:
        for index in range(25):
            if list2[index] != user_list[index]:
                run = 0
                basic.show_number(score)
        if run == 2:
            run = 1
            score += 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global answer
    if run == 2:
        basic.clear_screen()
        for index2 in range(25):
            if user_list[index2] == 1:
                燈數(index2 / 1, 30)
        answer += 1
        if answer > 24:
            answer = 0
        燈數(answer / 1, 255)
input.on_button_pressed(Button.B, on_button_pressed_b)

a = 0
n = 0
list2: List[number] = []
score = 0
answer = 0
user_list: List[number] = []
y = 0
x = 0
run = 0
run = 0

def on_forever():
    global list2, user_list, n, a, run
    if run == 1:
        basic.clear_screen()
        list2 = []
        user_list = []
        for index3 in range(25):
            list2.append(0)
            user_list.append(0)
        n = 0
        while n < 3:
            a = randint(0, 24)
            if list2[a] == 0:
                list2[a] = 1
                n += 1
                燈數(a / 1, 255)
        basic.pause(2000)
        basic.clear_screen()
        run = 2
basic.forever(on_forever)
