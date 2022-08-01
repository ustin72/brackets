module.exports = function check(str, bracketsConfig) {
    let bracketsArray = bracketsConfig.flat(Infinity);
    let bracketsOpen = [], bracketsClose = {};
  
    let twins = '', countTwins = 0; 
    let strMod = '';
    
    let stack = [];
    
    for(let i = 0, j = 0; i < bracketsArray.length; i++) {
        bracketsOpen[j] = bracketsArray[i];
        bracketsClose[bracketsArray[i + 1]] = bracketsArray[i];
        j++;
        i++;
    };
  
    for(let key in bracketsClose)
        if(key === bracketsClose[key])
            twins = bracketsClose[key];   
  
    for(let i = 0; i < str.length; i++)
        if(str[i] !== twins) { strMod += str[i] } 
            else { countTwins++ }
    if(countTwins % 2 !== 0)
        return false;
        
    for(let i = 0; i < strMod.length; i++) {
        let symbolCurrent = strMod[i];
        
        if( bracketsOpen.includes(symbolCurrent) ) {
            stack.push(symbolCurrent);
        }
            else {
                if(stack.length === 0) return false;
                
            let symbolTop = stack[stack.length - 1];
                    
            if(bracketsClose[symbolCurrent] === symbolTop) {
                stack.pop();
            }
                else {
                    return false;
                }
           }
    } 
  
    return stack.length === 0;
              
  }
