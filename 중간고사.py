x = 3.141592
print(int(x))

a = 17 // 4
b = 17 % 4
print(a, b)

a = int(input('숫자 입력:'))
b = 200
print(a + b)

print('Python', 'Java', sep='-', end='!!')
print('C++')

score = 85
if score >= 90:
    print('A')
elif score >= 80:
    print('B')
elif score >= 70:
    print('C')
else:
    print('F')

total = 0
for i in range(1, 6):
    if i % 2 == 0:
        continue
    total += i
    print(total)

s = 'PythonProgramming'
print(s[2:6] + s[6] + s[8] + s[6])

data = [10, 20, 30]
data.append(40)
data.insert(1, 500)
data.pop()
print(data)

student = {'name': '김철수', 'age': 20}
print(student.get('major', '컴퓨터공학'))

count = 0
n = 10
while n > 0:
    if n % 3 == 0:
        count += 1
    if n == 4:
        break
    n -= 1
print(count)

x = 15
result = 'Fail' if x >= 10 and x % 2 == 0 else 'Pass'
print(result)

text = ' Python Programming '
result = text.strip().upper().replace('PYTHON', 'AI')
print(result)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [x*2 for x in numbers if x % 2 == 0]
print(even_squares)

def func(*args, **kwargs):
    return len(args) + len(kwargs)

print(func(1, 2, 3,a=4, b=5))

g_var = 10
def update_var():
    global g_var
    g_var += 5
    return g_var

update_var()
print(g_var)

import copy
a= [[1,2], [3,4]]
b = a.copy()
b[0][0] = 99
print(a[0][0], b[0][0])

