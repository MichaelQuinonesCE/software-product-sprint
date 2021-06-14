
async function showServletContent(){
    const responseServer = await fetch('/hello');
    const resp = await responseServer.json();
    const message = document.getElementById('message-container');
    resp.innerHTML = '';
    const random = Math.floor ((Math.random()*3)+1);

   if (random==1){
         message.innerText = 'Name: '+ resp.Name;
    }
   else if (random==2){
         message.innerText = 'Nickname: '+ resp.Nickname;
  }
   else if (random==3){
         message.innerText = 'Place: '+ resp.Place;
  }
}
   function createListElement(text) {
        const liElement = document.createElement('li');
        liElement.innerText = text;
        return liElement;
}