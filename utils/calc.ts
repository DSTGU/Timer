export const calculateAverage = (times: Array<number>, num: number) => {
  if (!times || times.length < num) {
    return NaN;
  }

  const rel = times.slice(-num);  

  console.log("rel:", rel);

  return calculateMean(rel, 3);
}

export const calculateMean = (times: Array<number>, num: number) => {
  
  if (!times || times.length < num) {
    return NaN;
  }
  
  const rel = times.slice(-num);  
  return rel.reduce((a,b) => a+b)/rel.length;
}

export const formatTime = (time: number) => {
  if (Number.isNaN(time)) {
    return "--";
  }
  
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