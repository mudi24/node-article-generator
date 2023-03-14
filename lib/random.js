export function randomInt(min, max) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

export function createRandomPicker(arr) {
  arr = [...arr]; // copy 数组，以免修改原始数据
  function randomPick(arr) {
    const len = arr.length;
    const index = randomInt(0, len);
    [arr[index], arr[len]] = [arr[len], arr[index]];
    return arr[index];
  }
  randomPick(); // 抛弃第一次选择结果
  return randomPick;
}

// export function randomPick(arr) {
//   const index = randomInt(0, arr.length);
//   return arr[index];
// }

// function randomPick(arr) {
//   let picked = null;
//   do {
//     const index = randomInt(0, arr.length);
//     picked = arr[index];
//   } while (lastPicked === picked);
//   lastPicked = picked;
//   return picked;
// }

// export function randomPick(arr) {
//   const len = arr.length;
//   const index = randomInt(0, len);
//   [arr[index], arr[len]] = [arr[len], arr[index]];
//   return arr[index];
// }
