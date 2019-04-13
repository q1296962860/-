function change1(myid,mode)
{
	document.getElementById(myid).style.display=mode;
	if(mode == 'block')
	{
		document.getElementById(myid).style.border="1px solid #eee";
		document.getElementById(myid).style.borderTop="none";
		document.getElementById(myid).parentNode.style.backgroundColor="#fff";
		document.getElementById(myid).parentNode.style.border="1px solid #eee";
		document.getElementById(myid).parentNode.style.borderBottom="none";
	}
 else
	 {
		 document.getElementById(myid).parentNode.style.backgroundColor="";
		 document.getElementById(myid).parentNode.style.border="";
	 }
}

function change2(myid,mode)
{
	document.getElementById(myid).style.display=mode;
	if(mode == 'block')
	{
		document.getElementById(myid).style.border="1px solid #2AB9E7";
		document.getElementById(myid).style.borderTop="none";
		if(myid == "qiehuan1"){
		document.getElementById("local1_1").src="img/local-after.png";
		document.getElementById("local_title").style.color="#00A1E9";
		}
	}
 else
	 {
		 document.getElementById(myid).parentNode.style.backgroundColor="";
		 document.getElementById(myid).parentNode.style.border="";
		 if(myid == "qiehuan1"){
		 document.getElementById("local1_1").src="img/local.png";
		 document.getElementById("local_title").style.color="#6c6c6c";
		 }
	 }
}

function change_name(id)
{
	var text = document.getElementById(id).innerText;
	document.getElementById("local_title").innerText = String(text);
	document.getElementById("local_title1").innerText = String(text);
}

function qiehuan2_2(id)
{
	var text = document.getElementById(id).innerText;
	document.getElementById("local_title1").innerText = String(text);
}

function change3(myid,mode)
{
	document.getElementById(myid).style.display=mode;
	if(mode == 'block')
	{
		document.getElementById(myid).style.border="1px solid #2AB9E7";
		document.getElementById(myid).style.borderTop="none";
	}
 else
	 {
		 document.getElementById(myid).parentNode.style.backgroundColor="";
		 document.getElementById(myid).parentNode.style.border="";
	 }
}
/*
	省略的求时间函数：
	function time(){
	var tm = new Date();
	var h = tm.getHours();
	var m = tm.getHours();
	var s = tm.getSeconds();
	m = check(m);
	s = check(s);
	tm = h+":"+m+":"+s
	document.getElementById("time1_1").innerHTML = String(tm);
	}
	function check(a){
	if(a<10){
		a = "0"+a;
	}
	return a;
}
setInterval(time,1000);
*/