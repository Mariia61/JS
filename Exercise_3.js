let numbers = [-21, -12, -11, -9, -5, 0, 1, 6, 17, 20, 22];
let positive_nums = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positive_nums.push(numbers[i]);
    }

}
console.log(positive_nums);

