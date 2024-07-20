const number = '1488000000000000'
let res = ''

for (let i = 0; i < number.length; i++) {
    res += number[i]
    if (res.length === 4  res.length === 9  res.length === 14 ) {
        res += ' '
    }
}