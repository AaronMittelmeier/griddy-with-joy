export function msgFormatter(message) {
    var datetime = new Date("YYYY-MM-DD_hh:mm:ss");
    message = `${datetime} :: ${message}` ;
    return message
  };
  
export const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
};

