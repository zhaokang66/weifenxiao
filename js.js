	var li=document.getElementById('lis');
	var ul1=document.getElementById('ul1');
	var lin=document.getElementById('link');
		li.onmouseover=show;
		li.onmouseout=hide;
function show() {
	ul1.style.display='block';
	lin.style.background='#D3D3D3';
}
function hide() {
	ul1.style.display='none';
	lin.style.background='white';
}