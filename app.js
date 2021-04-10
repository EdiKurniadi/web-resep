
let list_resep = document.querySelectorAll(".resep-body");

let resep_btn = document.querySelectorAll(".resep-button");
for (let i=0; i<resep_btn.length; i++) {
	resep_btn[i].addEventListener('click', function(e) {
	   	if (list_resep[i].getAttribute("style") === "display:none;") {
	   		list_resep[i].removeAttribute("style");
	   		resep_btn[i].innerHTML = "tutup resep";
	   		return;
	   	}
	   	else {
	   		list_resep[i].setAttribute("style","display:none;");
	   		resep_btn[i].innerHTML = "baca resep";
	   		return;
	   	};
	});
};


