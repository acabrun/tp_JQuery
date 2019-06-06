let indice = 0;
$("p:gt(0)").hide();

let audio = new Audio('http://soundbible.com/grab.php?id=1817&type=mp3');

$('button').on('click', function () {
	indice++;
	if (indice <= 3) {
		$(`p:eq(${indice})`).show();
	} else {
		$('p').text('Happy Birthday');
		$('body').css('background-image', 'url("https://tikkido.com/sites/all/modules/twtevents/images/userfiles/images/lisa-frank23.jpg")')

		audio.play();
	}
});
