
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
	Dung:"Lý Bạch"
}
var dapan2={
	A:"Lý Phật Thiên ",
	B:"Trưng Trắc ",
	C:"Lý Phật Kim",
	D:"Trưng Nhị ",
	Dung:"Lý Bạch"
}
var dapan3={
	A:"1 ",
	B:"12 ",
	C:"8",
	D:"9 ",
	Dung:"1"
}
var dapan4={
	A:"Nguyễn Khuyến ",
	B:"Nguyễn Trãi ",
	C:"Quang Trung  ",
	D:"Lê Thái Tổ",
	Dung:"Lý Bạch"
}
var dapan5={
	A:"Trần Hưng Đạo ",
	B:"Trần Quốc Toản ",
	C:"Trần Khánh Dư ",
	D:"Trần Nhật Duật",
	Dung:"Lý Bạch"
}
var dapan6={
	A:"Lý Bạch",
	B:"Ngô Quyền",
	C:"Lý Bôn ",
	D:"Lý Công Uẩn",
	Dung:"Lý Bạch"
}
var dapan7={
	A:"Lý Bạch",
	B:"Ngô Quyền",
	C:"Lý Bôn ",
	D:"Lý Công Uẩn",
	Dung:"Lý Bạch"
}
var dapan8={
	A:"Lý Bạch",
	B:"Ngô Quyền",
	C:"Lý Bôn ",
	D:"Lý Công Uẩn",
	Dung:"Lý Bạch"
}
var dapan9={
	A:"Lý Bạch",
	B:"Ngô Quyền",
	C:"Lý Bôn ",
	D:"Lý Công Uẩn",
	Dung:"Lý Bạch"
}
var dapan10={
	A:"Lý Bạch",
	B:"Ngô Quyền",
	C:"Lý Bôn ",
	D:"Lý Công Uẩn",
	Dung:"Lý Bạch"
}
var mangcauhoi=["1","2","3","4","5","6","7","8","9","10"];
var mangdapan =[dapan1,dapan2,dapan3,dapan4,dapan5,dapan6,dapan7,dapan8,dapan9,dapan10];
var container= document.getElementById("container");
var next = 0;
var len=mangcauhoi.length;
console.log(len);
function cauhoilichsu() {
	document.getElementById("nextquestion").innerHTML="nextquestion";
	for (var i = 0; i < len; i++) {
		if(next==i){
			dapanlichsu();
		}else if(next>i){
			document.getElementById("kq").innerHTML =" You are Winner!!";
			winner();
		}
	}
	next++;
	document.getElementById("diem").innerHTML =(next-1)*10;
}
function dapanlichsu(){
	document.getElementById("kq").innerHTML = cauhoi.get(mangcauhoi[next]);
	var dapanA = document.createElement("button");
 		dapanA.innerText =mangdapan[next].A;
 		console.log(dapanA);
 		dapanA.onclick=function(ar){
 			return function(){
 				document.getElementById("container").innerHTML ='';
 			}
 		}(next);
 	var dapanB = document.createElement("button");
 		dapanB.innerText =mangdapan[next].B;
 		dapanB.onclick=function(ar){
 			return function(){
 				document.getElementById("container").innerHTML ='sai';
 				traloisai();
 			}
 		}(next);
 	var dapanC = document.createElement("button");
 		dapanC.innerText =mangdapan[next].C;
 		dapanC.onclick=function(ar){
 			return function(){
 				document.getElementById("container").innerHTML ="sai";
 				traloisai();
 			}
 		}(next);
 	var dapanD = document.createElement("button");
 		dapanD.innerText =mangdapan[next].D;
 		dapanD.onclick=function(ar){
 			return function(){
 				document.getElementById("container").innerHTML ="sai";
 				traloisai();
 			}
 		}(next);
 	container.className="box";
 	container.appendChild(dapanA);
 	container.appendChild(dapanB);
 	container.appendChild(dapanC);
 	container.appendChild(dapanD);
}
function traloisai(){
	var hop1= document.createElement("button");
	var hop2=document.createElement("button");
	hop1.innerText="tro ve trang chu ";
	hop1.onclick=function(){
		return function(){
			
		}
	}
	hop2.innerText="quay lại";
	container.appendChild(hop1);
	container.appendChild(hop2);
}
function winner(){
	var hop1= document.createElement("button");
	var hop2=document.createElement("button");
	var luuTen=document.createElement("button");
		luuTen.innerText="Luuten";
		luuTen.onclick=function(){
			return addRecord();
		}
	hop1.innerText="tro ve trang chu ";
	hop1.onclick=function(){
		return function(){
			
		}
	}
	hop2.innerText="Chơi Lại";
	container.appendChild(luuTen);
	container.appendChild(hop1);
	container.appendChild(hop2);
}
var myrecord=document.getElementById("myrecord");
function addRecord(){
	var nameRecord=document.getElementById("nameofyour").value;
	var first=document.createElement("p");
	first.innerText=nameRecord;
	myrecord.appendChild(first);

}
