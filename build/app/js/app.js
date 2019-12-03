// Начальная функция

let active = function(){
	return document.querySelector('.active-item')
};

let modal = document.querySelector('.modal');

for(var i = 0; i < document.getElementsByClassName('information__item').length; i++) {
    document.getElementsByClassName('information__item')[i].addEventListener("click", function(){
		this.classList.add("active-item");
		modal.classList.add('active')
		addVideoSrc(this)
    })
}

let exit = document.querySelector('.modal__exit')

exit.onclick = function() {
	modal.classList.remove('active');
	video.setAttribute('src', "");
	for(let i = 0; i < document.getElementsByClassName('active-item').length; i++ ) {	
		document.getElementsByClassName('active-item')[i].classList.remove('active-item')
	}
}

let video = document.querySelector('.modal__video');
let addVideoSrc = function(el) {
	let src = el.getAttribute('id')
	video.setAttribute('src', "app/video/" + src + ".mp4")
}
