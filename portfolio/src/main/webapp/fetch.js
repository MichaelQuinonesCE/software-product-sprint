
async function showServletContent(){
    const responseServer = await fetch ('/hello');
    const textResponse = await responseServer.text();

    const message = document.getElementById ('message-container');
    message.innerText = textResponse;
}