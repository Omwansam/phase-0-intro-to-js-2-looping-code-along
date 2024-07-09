// Code your solutions in this file
  const names = ['Guadalupe', 'Ollie', 'Aki'];
  const eventName = 'surprise';
  
function writeCards(names,eventName){
    let new_arr=[]
    for (let i=0; i < names.length; i++){
        new_arr.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }

    return new_arr
}

function countDown(num){
    while (num >= 0) {
        console.log(num)
        num--
    }   
}
