party.settings.debug = false;

var x = document.getElementById("audio"); 

function randomParty(e) {
	x.play();
	var elem = document.documentElement;
	elem.requestFullscreen();
	if (Math.random() > 0.5) {
		party.confetti(e, {	count: party.variation.range(20, 40) });
	} else {
		party.sparkles(e, {	count: party.variation.range(20, 40) });
	}
	
	if (Math.random() > 0.5) {
		party.confetti(party.Rect.fromScreen(), {	count: party.variation.range(20, 40) });
	} else {
		party.sparkles(party.Rect.fromScreen(), {	count: party.variation.range(20, 40) });
	}
}

document.body.addEventListener("click", function (e) {
    e.preventDefault();
    randomParty(e);
});
document.body.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    randomParty(e);
});
