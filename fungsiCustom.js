// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const fs = require('fs');
const bacaData = (fnCallback) => {
  let arrayOfString = [];

  fs.readFile(file1, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const json = JSON.parse(data);
    arrayOfString.push(json.message.split(' ')[1]);
  });

  fs.readFile(file2, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const json = JSON.parse(data);
    arrayOfString.push(json[0].message.split(' ')[1]);
  });

  fs.readFile(file3, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const json = JSON.parse(data);
    arrayOfString.push(json[0].data.message.split(' ')[1]);

    fnCallback(err, arrayOfString);
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
