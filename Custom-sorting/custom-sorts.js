function ageSort(users) {
  // Your code here
  let ages = users.map((user) => user.age);
  ages.sort((a, b) => a - b);
  let sortedUsers = [];
  for (let i = 0; i < ages.length; i++) {
    let user = users.find((user) => user.age === ages[i]);
    sortedUsers.push(user);
  }
  return sortedUsers;
}

function oddEvenSort(arr) {
  // Your code here
  let compare = (a, b) => {
    if (a % 2 === 0 && b % 2 === 1) return 1;
    if (a % 2 === 1 && b % 2 === 0) return -1;
    return a - b;
  };
  arr.sort(compare);
  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  let arr1 = s.split("").sort();
  let arr2 = t.split("").sort();
  return arr1.join("") === arr2.join("");
}
function reverseBaseSort(arr) {
  // Your code here
  let compare = (a, b) => {
    if (a.toString().length < b.toString().length) return -1;
    if (b.toString().length < a.toString().length) return 1;
    return b - a;
  };
  return arr.sort(compare).reverse();
}

function frequencySort(arr) {
  // Your code here
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  let arr2 = Object.keys(obj).sort((a, b) => {
    if (obj[a] === obj[b]) return Number(b) - Number(a); //for same frequency, sort by number
    return obj[a] - obj[b];
  });

  let arr3 = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < obj[arr2[i]]; j++) {
      arr3.push(Number(arr2[i]));
    }
  }
  return arr3;
}
module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
