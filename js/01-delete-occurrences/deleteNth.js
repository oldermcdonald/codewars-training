// 21.6.19 - Codewars Warmup
// https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/train/javascript

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].


function deleteNth(arr, n) {
  let itemCounts = {}
  let results = []

  for (let i = 0; i < arr.length; i++) {
    var currentItem = arr[i]
    // increment itemCounts
    if (itemCounts[currentItem] === undefined) {
      itemCounts[currentItem] = 1
    } else {
      itemCounts[currentItem]++
    }
    // push if itemCounts less than n
    if (itemCounts[currentItem] <= n) {
      results.push(arr[i])
    }
  }
  return results
}

module.exports = deleteNth


// This method doesn't return duplicates at all
// function deleteNth(arr, n) {
//   var counts = {}
//   for (var i = 0; i < arr.length; i++) {
//     if (counts[arr[i]] === undefined) {
//       counts[arr[i]] = 1;
//     }
//     else {
//       counts[arr[i]] += 1;
//     }
//   }
//   let results = arr.filter(num => {
//     return counts[num] <= n
//   })
//   return results
// }


// This method only works if numbers sorted
// function deleteNth(arr, n) {
//   let results = [];
//   let previousNum = arr[0];
//   let currentNum;
//   let count = 0
//   for (var i = 0; i < arr.length; i++) {
//     currentNum = arr[i]
//     if (currentNum == previousNum) {
//       count++
//       if (count <= n) {
//         results.push(currentNum)
//       }
//     } else {
//       count = 0
//       results.push(currentNum)
//     }
//     previousNum = arr[i]
//   }
//   return results;
// }

