const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  return arr.find(record => {
    return record.result === "W";
  }).year;
}