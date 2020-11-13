


function getStringLength(string){
    let stringLength;
    if(string.length === 1){
      stringLength = 'La chaîne contient qu\'un seul caractère';
    } else {
      stringLength = `La chaîne contient ${string.length} caractères`;
    }
    return stringLength;
  }
  

  let getStringlength = (string) => {
      let stringLength;
      if(string.length === 1){
          stringLength = 'La chaîne contient qu\'un seul caractère';
      } else {
        stringLength = `La chaîne contient ${string.length} caractères`;
      }
      // pas sur que le return soit necessaire
      return stringLength;
  }

  console.log(getStringLength);