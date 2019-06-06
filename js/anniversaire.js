/*chargement du son*/
let audio = new Audio('http://soundbible.com/grab.php?id=1817&type=mp3');

/*on cache les 3 derniers paragraphes*/
$("p:gt(0)").hide();

/*Ajout des différents évènements*/
$('button').on('click', function () {
	$('p:eq(1)').show();
	$('button').remove();
});

$('p:eq(1)').on('click', function () {
	$('p:eq(2)').show();
});

$('p:eq(2)').on('click', function () {
	$('p:eq(3)').show();
});

$('p:eq(3)').on('click', function () {
	$('p').text('Happy Birthday');
	$('p').css('background-color', 'pink');
	$('p').css('color', 'white');
	$('p').css('text-shadow', '1px 1px 1px black');
	$('body').css('background-image', 'url("https://tikkido.com/sites/all/modules/twtevents/images/userfiles/images/lisa-frank23.jpg")')

	audio.play();
});

