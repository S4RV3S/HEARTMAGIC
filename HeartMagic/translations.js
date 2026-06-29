const lang = navigator.language.toLowerCase();

if (lang.startsWith("id")) {

document.title = "Seseorang Sedang Memikirkanmu ❤️";

document.querySelector("meta[name='description']").content =
"Sentuh hati tiga kali untuk membuka keajaiban hari ini.";

document.querySelector("h1").innerHTML =
"❤️ Seseorang Diam-diam Memikirkanmu";

document.querySelector(".subtitle").innerHTML =
"Sentuh hati ini 3 kali untuk melihat keajaiban hari ini.";

document.getElementById("status").innerHTML =
"Menunggu sentuhanmu...";

document.getElementById("tapBtn").innerHTML =
"Sentuh Hati ❤️";

document.querySelector("#magicCard h2").innerHTML =
"✨ Keajaibanmu";

document.getElementById("crushBtn").innerHTML =
"💖 Ungkap Pengagum Rahasiaku";

document.getElementById("againBtn").innerHTML =
"❤️ Coba Lagi";

document.getElementById("shareBtn").innerHTML =
"📤 Bagikan";

}

else if (lang.startsWith("pt")) {

document.title = "Alguém Está Pensando em Você ❤️";

document.querySelector("meta[name='description']").content =
"Toque no coração três vezes para desbloquear a magia de hoje.";

document.querySelector("h1").innerHTML =
"❤️ Alguém Está Pensando em Você em Segredo";

document.querySelector(".subtitle").innerHTML =
"Toque no coração três vezes para revelar a magia de hoje.";

document.getElementById("status").innerHTML =
"Esperando seu toque...";

document.getElementById("tapBtn").innerHTML =
"Toque no Coração ❤️";

document.querySelector("#magicCard h2").innerHTML =
"✨ Sua Magia";

document.getElementById("crushBtn").innerHTML =
"💖 Revelar Meu Admirador Secreto";

document.getElementById("againBtn").innerHTML =
"❤️ Tentar Novamente";

document.getElementById("shareBtn").innerHTML =
"📤 Compartilhar";

}
