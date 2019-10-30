var cauhoi= new Map();
cauhoi.set("1",'Ai Là Người đặt tên nước ta Là vạn Xuân?');
cauhoi.set("2",'Tên Thật của Nữ Vương đầu tiên và cuối cùng nước ta?');
cauhoi.set("3",'Có bao nhiêu đời vua vào thời lý ?');
cauhoi.set("4",'Ai là tác giả của quốc âm thi tập?');
cauhoi.set("5",'Đâu là tên khác của trần quốc tuấn?');
cauhoi.set("6",'Ai là người đuổi quân Thanh ?');
cauhoi.set("7",'Bố Cái Đại Vương là ai ?');
cauhoi.set("8",'Vua đen là ai ?');
cauhoi.set("9",'Vị vua nào được coi là bù nhìn thân pháp ?');
cauhoi.set("10",'Có bao nhiêu đời vua vào thời lý ?');

var dapan1={
	A:"Lý Bạch",
	B:"Ngô Quyền",
	C:"Lý Bôn ",
	D:"Lý Công Uẩn",
	Dung:1
}
var dapan2={
	A:"Lý Phật Thiên ",
	B:"Trưng Trắc ",
	C:"Lý Phật Kim",
	D:"Trưng Nhị ",
	Dung:3
}
var dapan3={
	A:"1 ",
	B:"12 ",
	C:"8",
	D:"9 ",
	Dung:1
}
var dapan4={
	A:"Nguyễn Khuyến ",
	B:"Nguyễn Trãi ",
	C:"Quang Trung  ",
	D:"Lê Thái Tổ",
	Dung:3
}
var dapan5={
	A:"Trần Hưng Đạo ",
	B:"Trần Quốc Toản ",
	C:"Trần Khánh Dư ",
	D:"Trần Nhật Duật",
	Dung:2
}
var dapan6={
	A:"Lý Bạch",
	B:"Ngô Quyền",
	C:"Lý Bôn ",
	D:"Lý Công Uẩn",
	Dung:1
}
var dapan7={
	A:"Lý Bạch",
	B:"Ngô Quyền",
	C:"Lý Bôn ",
	D:"Lý Công Uẩn",
	Dung:4
}
var dapan8={
	A:"Lý Bạch",
	B:"Ngô Quyền",
	C:"Lý Bôn ",
	D:"Lý Công Uẩn",
	Dung:3
}
var dapan9={
	A:"Lý Bạch",
	B:"Ngô Quyền",
	C:"Lý Bôn ",
	D:"Lý Công Uẩn",
	Dung:1
}
var dapan10={
	A:"Lý Bạch",
	B:"Ngô Quyền",
	C:"Lý Bôn ",
	D:"Lý Công Uẩn",
	Dung:2
}
var mangcauhoi=["1","2","3","4","5","6","7","8","9","10"];
var mangdapan =[dapan1,dapan2,dapan3,dapan4,dapan5,dapan6,dapan7,dapan8,dapan9,dapan10];
var mydung=[];
for (var i = 0; i < mangdapan.length; i++) {
	mydung.push(mangdapan[i].Dung);
}
var container= document.getElementById("container");
var achievements=["You are Winner!!!","You are loser!!!"];
var next = 0;
var len=mangcauhoi.length;
var da=1;
var arrda =[];
function dapanlichsu(){
	document.getElementById("kq").innerHTML = cauhoi.get(mangcauhoi[next]);
	var dapanA = document.createElement("button");
 		dapanA.innerText =mangdapan[next].A;
 		dapanA.onclick=function(ar){
 			return function(){
 				da*=1/da;
 				var kqua=document.getElementById("k1").innerHTML=da;
 				document.getElementById("container").innerHTML='';
 			}
 		}(next);
 	var dapanB = document.createElement("button");
 		dapanB.innerText =mangdapan[next].B;
 		dapanB.onclick=function(ar){
 			return function(){
 				da*=2/da;
 				document.getElementById("k1").innerHTML=da;
 				document.getElementById("container").innerHTML='';
 			}
 		}(next);
 	var dapanC = document.createElement("button");
 		dapanC.innerText =mangdapan[next].C;
 		dapanC.onclick=function(ar){
 			return function(){
 				da*=3/da;
 				document.getElementById("k1").innerHTML=da;
 				document.getElementById("container").innerHTML='';
 			}
 		}(next);
 	var dapanD = document.createElement("button");
 		dapanD.innerText =mangdapan[next].D;
 		dapanD.onclick=function(ar){
 			return function(){
 				da*=4/da;
 				document.getElementById("k1").innerHTML=da;
 				document.getElementById("container").innerHTML='';
 			}
 		}(next);
 	container.className="box";
 	container.appendChild(dapanA);
 	container.appendChild(dapanB);
 	container.appendChild(dapanC);
 	container.appendChild(dapanD);
}
function cauhoilichsu() {
	document.getElementById("nextquestion").innerHTML="next";
	for (var i = 0; i < len; i++) {
		if(next==i){
			arrda.push(da);
			console.log(arrda);
			document.getElementById("manghienthi").innerHTML=arrda;
			dapanlichsu(next);
		}else if(next>len){
			document.getElementById("hienthidung").innerHTML =mydung;
			document.getElementById("kq").innerHTML="";
		}
	}
	next++;
}
var myrecord=document.getElementById("myrecord");
myrecord.className="record-right";
var myscore=0;
var scoreRecord=[];
function countScore(){
	for (var i = 0; i < mydung.length; i++) {
			if (mydung[i]==arrda[i]) {
				myscore+=10;
				console.log(myscore);
		}
	}
	console.log(myscore);
	document.getElementById("yourScore").innerHTML=myscore;
	scoreRecord.push(myscore);
	console.log(scoreRecord);
}
function addRecord(){
	var nameRecord=document.getElementById("nameofyour").value;
	var first=document.createElement("p");
	first.innerText=nameRecord;
	var score=document.createElement("p");
	score.innerText=myscore;
	myrecord.appendChild(first);
	myrecord.appendChild(score);
}
