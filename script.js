//your JS code here. If required.
document.getElementById("enterBtn").addEventListener('click', (event) =>{
	event.preventDefault();
	let status = document.getElementById("status").style.display = "none";
	let newStatus = document.createElement("h1");
	newStatus.innerText = "Entered Metaverse";
	newStatus.style.display = "block";
	
	
})