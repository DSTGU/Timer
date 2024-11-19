export const calculateAverage = (times: [number], num: number) => {

}

export const calculateMean = (times: Array<number>, num: number) => {
  
  if (times.length == 0) {
    return NaN;
  }
  
  const rel = times.slice(-num);  
  return rel.reduce((a,b) => a+b)/rel.length;
}

export const formatTime = (time: number) => {
  let str = "";
  
  if (time > 60000) {
    //minutes
    str += Math.floor(time / 60000) + ":";
  }
  
  str +=
    zeroPad(Math.floor((time % 60000) / 1000), 2) +
    "." +
    zeroPad(Math.floor((time % 1000) / 10), 2);
  
  return str;
};


  const zeroPad = (num: number, length: number) => {
    let str = num.toString();
  
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  };