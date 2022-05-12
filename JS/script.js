document.body.innerHTML = '<h1>Hello from JavaScript</h1>'
console.log('Test 432');
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin) {
      sharkSpeed /= 2;
    }
    if (pontoonDistance / youSpeed < sharkDistance / sharkSpeed) {
      return "Alive!";
    } else {
      return "Shark Bait!";
    }
  }

// Оператор if 
  function trueOrFalse(wasThatTrue) {
    if (wasThatTrue){
      return "Yes, that was true";
    }
  return "No, that was false";
  }