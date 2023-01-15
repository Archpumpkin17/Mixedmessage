
function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const funny = {
    words: ['Archie', 'Louisa', 'Pumpkin'],
    words2:['kicked a', 'punched a', 'slapped a'],
    words3:['dog', 'cat', 'poodle']
  }
  
  // Store the 'wisdom' in an array
  let funnysentence = []
  
  // Iterate over the object
  for(let prop in funny) {
    let optionIdx = generateRandomNumber(funny[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'words':
        funnysentence.push(`Today I saw that "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'words2':
        funnysentence.push({collectiveWisdom[prop][optionIdx]})
        break
      case 'words3':
        funnysentence.push(`, How horrid "${collectiveWisdom[prop][optionIdx]}".`)
        break
      default:
        personalWisdom.push("I didn't see anything.")
    }
  }
  
  function formatHorrid(wisdom) { 
    const formatted = funnysentence.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(funnysentence);