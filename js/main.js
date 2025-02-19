document.querySelector('button').addEventListener('click', result)
const h1 = document.querySelector('h1')

function mode(array){
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++){
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

function result(){
  let one = document.querySelector('input[name=qOne]:checked').value
  let two = document.querySelector('input[name=qTwo]:checked').value
  let three = document.querySelector('input[name=qThree]:checked').value
  let four = document.querySelector('input[name=qFour]:checked').value
  let five = document.querySelector('input[name=qFive]:checked').value
  let choices = [one, two, three, four, five]
  let maxElement = mode(choices)
  console.log(maxElement)
  console.log(choices)
  
  if(maxElement === 'a'){
    const adjectiveOne = ['Goofy', 'Brave', 'Mystic', 'Enraged', 'Chaotic']
    const nounOne = ['Kokiri', 'Keyblade', 'Avacado', 'Windjammer', 'Hylian']
    const wordsOne = { adjectiveOne, nounOne }
    const orderOne = ['adjectiveOne', 'nounOne']
    const selectedOne = orderOne.map((partOfSpeech) => {
      const choices = wordsOne[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsOne = selectedOne.join(' ')
    h1.innerText = `${resultsOne}`
    
  } else if (maxElement === 'b'){
    const adjectiveTwo = ['Holy', 'Stealthy', 'Legendary', 'Stinky', '420']
    const nounTwo = ['SasukeBowser', 'Bakugo', 'Moogle', 'Kirby', 'Spartan']
    const wordsTwo = { adjectiveTwo, nounTwo }
    const orderTwo = ['adjectiveTwo', 'nounTwo']
    const selectedTwo = orderTwo.map((partOfSpeech) => {
      const choices = wordsTwo[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsTwo = selectedTwo.join(' ')
    h1.innerText = `${resultsTwo}`

  } else if (maxElement === 'c'){
    const adjectiveThree = ['Tryhard', 'Sissy', 'StrongArm', 'Ridley', 'Robotnik'] 
    const nounThree = ['Cloud', 'SephirothFan', 'Maverick', 'DOnger', 'Blade']
    const wordsThree = { adjectiveThree, nounThree }
    const orderThree = ['adjectiveThree', 'nounThree']
    const selectedThree = orderThree.map((partOfSpeech) => {
      const choices = wordsThree[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsThree = selectedThree.join(' ')
    h1.innerText = `${resultsThree}`

  } else if (maxElement === 'd'){
    const adjectiveFour = ['Exalted', 'Sweaty', 'Galactic', 'Addicted', 'Intrigued'] 
    const nounFour = ['Raider', 'Hunter', 'Slayer', 'Marksman', 'Explorer']
    const wordsFour = { adjectiveFour, nounFour }
    const orderFour = ['adjectiveFour', 'nounFour']
    const selectedFour = orderFour.map((partOfSpeech) => {
      const choices = wordsFour[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsFour = selectedFour.join(' ')
    h1.innerText = `${resultsFour}`

  } else if (maxElement === 'e'){
    const adjectiveFive = ['Wacky', 'Angelic', 'Bionic', 'Tame', 'Unhinged']
    const nounFive = ['NINJA', 'Asura', 'Monado', 'Cyb0rg', 'xNeanderthalx']
    const wordsFive = { adjectiveFive, nounFive }
    const orderFive = ['adjectiveFive', 'nounFive']
    const selectedFive = orderFive.map((partOfSpeech) => {
      const choices = wordsFive[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsFive = selectedFive.join(' ')
    h1.innerText = `${resultsFive}`
  }
  let stopAnimation = document.querySelector('.submit')
  stopAnimation.classList.add('noAnimation')
}