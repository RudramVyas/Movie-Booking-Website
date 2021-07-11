function selectseat(id) {
	if(document.getElementById(id).name=='seat'){
		document.getElementById(id).style.color = '#0BF737';
		document.getElementById(id).style.borderColor = '#0BF737';
		document.getElementById(id).name = 'booked'
	}
	else{
		document.getElementById(id).style.color = '#FFFFFF';
		document.getElementById(id).style.borderColor = '#FFFFFF';
		document.getElementById(id).name = 'seat'
	}
}
function book() {
	index = ['A','B','C','D','E','F']
	count=0
	for (var i = index.length - 1; i >= 0; i--) {
		for (j=1;j<11;j++) {
			id=index[i]+j
			if(document.getElementById(id).name == 'booked'){
				/*document.getElementById(id).style.color = '#FFFFFF';
				document.getElementById(id).style.borderColor = '#FFFFFF';
				document.getElementById(id).name = 'seat'*/
				count++
			}
		}
	}
	if(count==0){
		alert("NO Seats Selected")
	}
	else{
		alert(count+" Seats Selected\nTotal Amount : "+count*200)
	}
}
function layout() {
	window.open("Layout.html","_self")
}