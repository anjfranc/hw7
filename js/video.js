var video= document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
video.autoplay= false;
video.loop= false;
});

document.querySelector("#play").addEventListener("click", function() {

		video.play();
		console.log("The current volume is" + video.volume);
		document.querySelector("#volume").innerHTML=video.volume*100+"%";
// document.querySelector("#volume").innerHTML= "Volume is"
});

document.querySelector("#pause").addEventListener("click", function() {
video.pause();

});

document.querySelector("#slower").addEventListener("click", function() {
	console.log(video.playbackRate);
video.playbackRate*=0.95


});

document.querySelector("#faster").addEventListener("click", function() {
	console.log(video.playbackRate);
	video.playbackRate/=0.95

});

document.querySelector("#skip").addEventListener("click", function() {

	console.log(video.currentTime);
	video.currentTime+=15;

	if (video.currentTime==video.duration){
		video.currentTime=0;}
});

document.querySelector("#mute").addEventListener("click", function() {
console.log(video.muted)
// if (video.muted==true){
// 	this.innerHTML="Mute"
// }
// else{
// 	this.innerHTML="Unmute"
// }

if (this.innerHTML=="Mute"){
	video.muted= true
	this.innerHTML="Unmute"
}

else{
	video.muted= false
	this.innerHTML="Mute"
}

});
document.querySelector("#slider").addEventListener("click", function() {
console.log( this.value)
video.volume=this.value/100;
document.querySelector("#volume").innerHTML=this.value+"%";


});

document.querySelector("#vintage").addEventListener("click", function(){
video.classList.add("oldSchool")

});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
	
	});