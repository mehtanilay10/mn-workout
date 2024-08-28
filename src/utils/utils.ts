export const speak = (message: string) => {
	var msg = new SpeechSynthesisUtterance(message);

	const voice = window.speechSynthesis.getVoices().filter((x) => x.name.indexOf("Microsoft Susan") > -1);
	if (voice.length > 0) {
		msg.rate = 1.4;
		msg.pitch = 0.7;
		msg.voice = voice[0];
	}

	window.speechSynthesis.speak(msg);
};
