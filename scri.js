select.innerHTML="Select Language"
selectr.innerHTML="Output Language"

translatebtn.addEventListener("click",(e)=>{
	e.preventDefault()
	var t=document.querySelectorAll('#sourcetext')[0].value;
	var s=document.querySelectorAll('#sor')[0].value;
	var r=document.querySelectorAll('#tar')[0].value;
	const url = 'https://translate281.p.rapidapi.com/';
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': config.key,
			'X-RapidAPI-Host': 'translate281.p.rapidapi.com'
		},
		body: new URLSearchParams({
			text: t,
			from: s,
			to: r
		})
	};
	lang()
	async function lang(){
		try {
			const response = await fetch(url, options);
			const result = await response.text();
			console.log(result);
			document.getElementById("targettext").value=result.response;
		} catch (error) {
			console.error(error);
		}
	}

})

function au(){
	document.getElementById("sor").value="auto";
	select.innerHTML="Auto"
}
function en(){
	document.getElementById("sor").value="en";
	select.innerHTML="English"
}
function enr(){
	document.getElementById("tar").value="en";
	selectr.innerHTML="English"
}
function hi(){
	document.getElementById("sor").value="hi";
	select.innerHTML="Hindi"
}
function hir(){
	document.getElementById("tar").value="hi";
	selectr.innerHTML="Hindi"
}
function Jp(){
	document.getElementById("sor").value="jp";
	select.innerHTML="Japanese"
}
function Jpr(){
	document.getElementById("tar").value="jp";
	selectr.innerHTML="Japanese"
}
function mr(){
	document.getElementById("sor").value="mr";
	select.innerHTML="Marathi"
}
function mrr(){
	document.getElementById("tar").value="mr";
	selectr.innerHTML="Marathi"
}
function ru(){
	document.getElementById("sor").value="ru";
	select.innerHTML="Russian"
}
function rur(){
	document.getElementById("tar").value="ru";
	selectr.innerHTML="Russian"
}
function ar(){
	document.getElementById("sor").value="ar";
	select.innerHTML="Arabic"
}
function arr(){
	document.getElementById("tar").value="ar";
	selectr.innerHTML="Arabic"
}

function ko(){
	document.getElementById("sor").value="ko";
	select.innerHTML="Korean"
}
function fr(){
	document.getElementById("sor").value="fr";
	select.innerHTML="French"
}
function de(){
	document.getElementById("sor").value="de";
	select.innerHTML="German"
}
function gu(){
	document.getElementById("sor").value="gu";
	select.innerHTML="Gujarati"
}
function it(){
	document.getElementById("sor").value="it";
	select.innerHTML="Italian"
}
function sr(){
	document.getElementById("sor").value="sr";
	select.innerHTML="Serbian"
}
function zhCN(){
	document.getElementById("sor").value="zh-CN";
	select.innerHTML="Chinese"
}
function es(){
	document.getElementById("sor").value="es";
	select.innerHTML="Spanish"
}
function vi(){
	document.getElementById("sor").value="vi";
	select.innerHTML="Veitnamese"
}


function kor(){
	document.getElementById("tar").value="ko";
	selectr.innerHTML="Korean"
}
function frr(){
	document.getElementById("tar").value="fr";
	selectr.innerHTML="French"
}
function der(){
	document.getElementById("tar").value="de";
	selectr.innerHTML="German"
}
function gur(){
	document.getElementById("tar").value="gu";
	selectr.innerHTML="Gujarati"
}
function itr(){
	document.getElementById("tar").value="it";
	selectr.innerHTML="Italian"
}
function srr(){
	document.getElementById("tar").value="sr";
	selectr.innerHTML="Serbian"
}
function zhCNr(){
	document.getElementById("tar").value="zh-CN";
	selectr.innerHTML="Chinese"
}
function esr(){
	document.getElementById("tar").value="es";
	selectr.innerHTML="Spanish"
}
function vir(){
	document.getElementById("tar").value="vi";
	selectr.innerHTML="Veitnamese"
}

// <!-- Author-Suresh Kumavat -->
// <!-- CodeClause Intern ID- CC35789 -->
// <!-- Designation- Web Development Intern -->
// <!-- Batch- Jul 2023 -->  