export function msgFormatter(message) {
    var datetime = new Date().toISOString().replace(/T/, '_').replace(/\..+/, '') 
    message = `${datetime} :: ${message}` ;
    return message
  };
  
export const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
};

