//your JS code here. If required.
// document.getElementById("newStatus").style.display = "none";
document.getElementById("enterBtn").addEventListener('click', (event) =>{
	event.preventDefault();
	let status = document.getElementById("status");
	status.innerHTML = `
    <h1>Entered Metaverse</h1>`
	
	
	
})