function scuberGreetingForFeet(someValue){
  let result = [
  'This one is on me!',
  'That will be twenty bucks.',
  'I will gladly take your thirty bucks.',
  'No can do.'];
  if (someValue < 400) {
    return (result[0])
  }
  else if (someValue < 2000) {
    return (result[1])
  }
  else if (someValue < 2500) {
    return (result[2])
  }
  else if (someValue > 2500) {
    return (result[3])
  }
};

function ternaryCheckCity(someValue){
  const cityMessage = someValue === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return cityMessage;
};

function switchOnCharmFromTip(someValue) {
  let message;
  switch (someValue) {
    case 'generous' :
      message = 'Thank you so much.';
      break;
    case 'not as generous' :
      message = 'Thank you.';
      break;
    case 'thanks for everything' :
      message = 'Bye.';
      break;
  }
  return message;
};