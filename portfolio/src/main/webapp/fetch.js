
async function showServletContent(){
    const responseServer = await fetch('/hello');
    const My = await responseServer.json();
    const message = document.getElementById('message-container');
   My.innerHTML = '';
   const random = Math.floor ((Math.random()*3 )+1);
   if (random ==1){
     /*message.appendChild(
      createListElement('Name: ' + My.Name));*/
      message.innerText = 'Name: '+ My.Name;
     }
     else if (random ==2){
 /* message.appendChild(
     createListElement('Nickname: ' + My.Nickname));*/
     message.innerText = 'Name: '+ My.Nickname;
  }
  else if (random ==3){
 /* message.appendChild(
      createListElement('Place: ' + My.Place));*/
      message.innerText = 'Name: '+ My.Place;
  }
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}