/**  kata 7
 * credit card mask
*/
function mask(cc) {
  res = '';
  slice = cc.slice(cc.length - 4, cc.length);
  cc = cc.slice(0, cc.length - 4);
  cc = cc.replace(/\w/g, '#');
  res = cc + slice;
  return res;
}

function maskFast(cc) {
  return cc.slice(0, -4).replace(/\w/g, '#') + cc.slice(-4);
}

/**
 * kata 8
 */
// res = 0;
// arr = [0, 0, 0, 1];

function translNumberSystem(arr, system) {
  str = arr.join('');
  return parseInt(str, system)
}


function highAndLow(numbers) {
  const newNum = numbers.split(' ').map(item => Number(item))
  return `${Math.max(...newNum)} ${Math.min(...newNum)}`;
}

function nthEven(n) {
  return count = 2 * (n - 1);
}

function sum() {
  var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063,
    5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496,
    6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
    monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
      6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221,
      5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
      7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
    tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
      7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
      7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493,
      5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
    wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102,
      5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
      5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698,
      9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
    thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
      9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
      9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066,
      7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
    friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362,
      6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501,
      9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
      5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
    saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943,
      5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003,
      5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838,
      7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

  var stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

  return stairs.reduce((sum, arr) => { arr.forEach(i => sum += i); return sum }, 0)
}

function accum(str) {
  return str.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function factorial(n) {
  res = 1;
  if (n > 1) {
    res = n * factorial(n - 1);
  }
  return res;
}

function positiveSum(arr) {
  var sum = 0;
  for (i in arr) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}



function unique(arr) {
  result = [];
  arr = [1, 2, 3, 4, 3, 3, 5, 5];
  for (let i of arr) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

var questions = [
  {
    text: 'text1',
    options: ['1', '2', '3'],
    prise: 100,
    correct: 0,
    fixed: false,
    build: buildText
  },
  {
    text: 'text1',
    options: ['1', '2', '3'],
    prise: 1000,
    correct: 1,
    fixed: false,
    build: buildText
  },
  {
    text: 'text1',
    options: ['1', '2', '3'],
    prise: 5000,
    correct: 2,
    fixed: false,
    build: buildText
  },
  {
    text: 'text1',
    options: ['3', '2', '3'],
    prise: 10000,
    correct: 0,
    fixed: true,
    build: buildText
  }
]

function buildText() {
  var text = (this.fixed ? '*' : '') + '[' + this.prise + ']' + this.text;
  this.options.forEach(function (option, i) {
    text += '\n' + (i + 1) + ')' + option;
  });
}

function movie(card, ticket, perc) {
  let costToCard = card;
  let costToOneTisk = 0;
  let count = 1;
  while (Math.ceil(costToCard) >= costToOneTisk) {
    costToCard += ticket * Math.pow(perc, count);
    costToOneTisk += ticket;
    count++;
  }
  return count;
};

function conjugation(num, form1, form2, form3) {
  mod = num % 10;
  if (num % 10 === 0) { return form3 };
  if (num > 4 && num < 20) { return form3 };
  if (mod === 1) { return form1 };
  if (mod == 2) { return form2 }
  if (mod > 3 && mod < 5) { return form2 }
  return form3;
}

// function spinWords(str) {
//   for (let i = 0; i < str.length - 1 ; i++ ) {
//     var state = str[i];
//       str = str.replace(str[i], str[i + 1]);
//       str = str.replace(str[i + 1], state);
//       console.log(str)
//   }
//   return str;
// }
// res = spinWords('hello');
// console.log(res)

let arr_en = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function addLetters(...letters) {
  let sumLetters = 0;
  var arr = [...letters];
  if (arr.length === 0) {
    return 'z';
  }
  if (arr.length === 1 && arr[0] === 'z') {
    return 'z';
  }
  for (i = 0; i < arr.length; i++) {

    if (arr[i] === 'z') {
      arr_en.indexOf(arr[i]) === 0;
    }
    else {
      sumLetters += arr_en.indexOf(arr[i]);
    }
    if (sumLetters > 26) {
      sumLetters = sumLetters - 26;
    }
  }
  return arr_en[sumLetters];
}



function isPrime(num) {
  var isSimple = true;
  if (num <= 1) {
    isSimple = false
  }
  for (var j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) isSimple = false;
  }
  return isSimple;
}

function grow(x) {
  return x.reduce((mult, el) => mult *= el)
}

function findShort(s) {
  newArr = 0;
  return newArr = Math.min(...(s.split(' ').map(el => el.length)));
}

function toSixteenSystem(x) {
  if (x < 0) x = 0
  if (x > 255) x = 255;
  hex = x.toString(16);
  if (hex.length < 2) { hex = '0' + hex };
  return hex.toUpperCase();
}

function rgb(r, g, b) {
  return toSixteenSystem(r) + toSixteenSystem(g) + toSixteenSystem(b);
}

function well(x) {
  var good = 0;
  x.forEach(el => {
    if (el === 'good') good++;
  });
  return good < 1 ? 'Fail!' :
    good < 3 ? 'Publish!' : 'I smell a series!';
}

function digital_root(n) {
  sum = 0;
  numStr = n.toString().split('');
  for (var i = 0; i < numStr.length; i++) {
    sum += Number(numStr[i]);
  }
  if (sum.toString().split('').length > 1) {
    digital_root(sum);
  }
  return sum;
}

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

function orderedCount(text) {
  res = []
  count = 0;
  textArr = text.split('');
  for (var i = 0; i < textArr.length; i++) {
    count = 0;
    for (var j = 0; j < textArr.length; j++)
      if (textArr[i] == textArr[j]) {
        count++;
        res.push([textArr[i], count])
      }
  }
  return res;
}

// const orderedCount = text => [...new Set(text)].map(letter => [letter, text.split(letter).length - 1])

// function sumStrings(a,b) { 
//   num = BigInt(a) + BigInt(b); 
//   return  num.toString();
// }

// function sumStrings(a,b) {
//   res = [];
//   arrA = a.split('').reverse();
//   arrB = b.split('').reverse();
//   while (arrA.length !== arrB.length) {
//     if (arrA.length == 1 || arrB.length == 1) {
//       break;
//     }
//     if (arrA.length > arrB.length) {
//       arrB.push(0);
//     }
//     if (arrA.length < arrB.length) {
//       arrA.push(0);
//     }
//   }
//   for ( var i = 0; i < arrA.length; i++)  {
//     sum = Number(arrA[i]) + Number(arrB[i]);
//     if ( sum > 10) {
//       res.push(sum % 10);
//       arrA[i+1] = Number(arrA[i+1]) + 1;
//     }
//     else {
//       res.push(Number(arrA[i]) + Number(arrB[i]));
//     }
//   }
//   return res.reverse().join('');
// }



// function sumStrings(a, b) {
//   ArrA = a.split('').reverse();
//   ArrA.map(x => Number(x));

//   ArrB = b.split('').reverse();
//   ArrB.map(x => Number(x));

//   for (var i = 0; i < ArrA.length; i++) {


//   }

// }

// arr = ['A','D','G','B', 'ф', 'л', 'к', 'з','1','2']
// arrNew = [];
// for ( var i = 0;  i < arr.length ; i++) {
//   for ( var j = 0 ; j < arr.length; j++) {
//   if ( arr[i].charCodeAt(0) > arr[j].charCodeAt(0)) {
//     [arr[i], arr[j]] = [ arr[j], arr[i]]
//   }
//   }
// }
// arrNew = arr.filter(el => el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57).sort()
// arrNew1 = arr.filter(el => el.charCodeAt(0) >=192).sort()
// arrNew2 = arr.filter(el => el.charCodeAt(0) < 192 &&  el.charCodeAt(0) >= 57).sort();
// arrNew.push(...arrNew1,...arrNew2)
// console.log('arrNew  '+ arrNew);


// ['G','Б','1'].sort((a, b) => {
//   const getVal = (l) => {
//     const k = l.toLowerCase().charCodeAt();
//     return k > 96 && k < 123 ? k + 1e5 : k;
//   }
//   return getVal(a) - getVal(b);
// })

arr = ['A','1','2','D','B', 'ф', 'л'];
arrStr = arr.join('')
num = arr.join('').replace(/\D/g, '');
newStr = arrStr.replace(/\d/g, '') + num;
newArr = newStr.split('');
//push --force
//push --force
//push --force
