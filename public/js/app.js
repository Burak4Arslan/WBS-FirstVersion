
let selectedC1="";
let selectedContent ="";
let isAnyInputOpen = 0;

let myDivisionCounter = 0;

let myx = Symbol('a');
let myy = Symbol('a');

let arr = [];
arr[myx] = 0;
arr[myy] = 'messi';

canvasFunction();

function canvasFunction() {
	
	const straLineCanvas = document.getElementById("straLineCanvas_id");
	straLineCanvas.setAttribute('width',document.getElementById("divForDivisions_id").offsetWidth-100);
	
	if(straLineCanvas.offsetWidth ===300) {
		
		straLineCanvas.setAttribute('width','0');
		
	}
	straLineCanvas.setAttribute('height','10px');

	let stractx = straLineCanvas.getContext("2d");
	stractx.beginPath();
	stractx.moveTo(0, 0);
	stractx.lineTo(straLineCanvas.offsetWidth, 0);
	
	stractx.strokeStyle = "#333";
	stractx.lineWidth = 3;
	stractx.stroke();
	
	
}


window.onmouseover = function(e) {
	
	if(e.target.className == 'contentDiv') {
		
		e.target.querySelector('.deleteContentButton').style.display = 'initial';
		
	}
	
	else if(e.target.className == 'spanForContent' || e.target.className == 'deleteContentButton')  {
		
		e.target.parentElement.querySelector('.deleteContentButton').style.display = 'initial';
		
		
	}
	
	if(e.target.className == 'divForHeadings') {
		
		e.target.querySelector('.deleteHeadingButton').style.display = 'initial';
		e.target.querySelector('.addContentButton').style.display = 'initial';
	}
	
	else if(e.target.className == 'spanForHeadings' || e.target.className == 'deleteHeadingButton' || e.target.className == 'addContentButton')  {
		
		e.target.parentElement.querySelector('.deleteHeadingButton').style.display = 'initial';
		e.target.parentElement.querySelector('.addContentButton').style.display = 'initial';
		
	}
	
	
}


window.onmouseout = function(e) {
	
	if(e.target.className == 'contentDiv') {
		
		e.target.querySelector('.deleteContentButton').style.display = 'none';
		
	}
	
	else if(e.target.className == 'deleteContentButton') {
		
		e.target.style.display = 'none';
		
	}
	
	else if(e.target.className == 'divForHeadings') {
		
		e.target.querySelector('.deleteHeadingButton').style.display = 'none';
		e.target.parentElement.querySelector('.addContentButton').style.display = 'none';
	}
	
	else if(e.target.className == 'deleteHeadingButton' || e.target.className == 'addContentButton' || e.target.className == 'openAndCloseButton') {
		
		let x = e.target.parentElement;
		x.querySelector('.deleteHeadingButton').style.display = 'none';
		x.parentElement.querySelector('.addContentButton').style.display = 'none';
		
	}
	
}


window.onmousedown = function(e) {
	
	if(e.target.className=='contentDiv') {
		e.target.style.border = '4px solid #FAA';
		selectedC1 = e.target;
		selectedContent = e.target.parentElement;
		
	}
	
	
}


window.onmouseup = function(e) {
	
	if(selectedContent.className == 'divForContentAndCanvas'  && e.target.className != "myBody" && e.target.className != "divForDivisions"
	&& e.target.className != "spanForPN" && e.target.className !="projectNameLocation" && e.target.className != "bigProjectNameDiv" 
	&& e.target.className != "addHeadingButton" && e.target.className != "myHtml" && e.target.className != "myBody") {
		
		let myElement = e.target;
		if(myElement.parentElement !== null) { 
			while(myElement.parentElement.className !== 'divForDivisions' ) {
			
				myElement = myElement.parentElement;
				
				if(myElement.className === 'myHtml') {
					selectedC1.style.border='none';
					selectedContent.id = selectedContent.parentElement.id; 
					selectedC1="";
					selectedContent="";
					return;
				}
				
			}
			// aynı heading'e takmaya çalışırsa
			if(myElement == selectedContent.parentElement.parentElement) {
				
				if(selectedC1!="") {
					selectedC1.style.border='none';
					selectedContent.id = selectedContent.parentElement.id; 
				}
				selectedC1="";
				selectedContent="";
				
				return;
				
			}
			
			myElement = myElement.querySelector('.collapse');
			
			
		}
		let selectedContentPreviousParent = selectedContent.parentElement;
		myElement.appendChild(selectedContent);
		myElement.className='collapse in';
		selectedContentPreviousParent = selectedContentPreviousParent.parentElement;
		if(selectedContentPreviousParent.querySelector('.collapse').querySelector('.divForContentAndCanvas') === null) {
			
			selectedContentPreviousParent.querySelector('.divForHeadings').querySelector('.openAndCloseButton').style.display = 'none';
			
		}
		
		myElement.parentElement.querySelector('.divForHeadings').querySelector('.openAndCloseButton').style.display = 'initial';
		
		if(myElement.parentElement.querySelector('.divForHeadings').querySelector('.openAndCloseButton').innerText == "↓") {
			
			myElement.parentElement.querySelector('.divForHeadings').querySelector('.openAndCloseButton').innerText = "↑";
			
		}
		
	}
	
	if(selectedC1!="") {
		selectedC1.style.border='none';
		selectedContent.id = selectedContent.parentElement.id; 
	}
	
	
	
	selectedC1="";
	selectedContent="";
}


window.onkeydown = function(e) {
	
	
	
	if(e.keyCode==27 && isAnyInputOpen==1) {
		
		let x = document.querySelector('.inputForNewName').parentElement;
		
		x.querySelector('span').style.display = 'initial';
		
		document.querySelector('.inputForNewName').remove();
		
		isAnyInputOpen = 0;
		
	}
	
	else if(e.keyCode == 13 && isAnyInputOpen==1) {
		
		let string = document.querySelector('.inputForNewName').value;
		
		string = string.trim();
		
		let x = document.querySelector('.inputForNewName').parentElement;
		x = x.querySelector('span');
		
		if(string!="") {
			
			x.style.display = 'initial';
			x.innerText = string;
			
			document.querySelector('.inputForNewName').remove();
			isAnyInputOpen = 0;
			
		}
		
		else {
			
			x.style.display = 'initial';
			document.querySelector('.inputForNewName').remove();
			isAnyInputOpen = 0;
			
		}
		
	}
	
	
	canvasFunction();
	
}


window.ondblclick = function(e){ 
	//Eğer hiçbir input yeri açık değilse
	if(isAnyInputOpen==0) {
		//contentDiv e tıklandıysa
		if(e.target.className=='contentDiv') {
			
			let myDiv = e.target;
			
			creatingNameSpace(myDiv);
			
			
		}
		//content span a tıklandıysa
		else if( e.target.className=='spanForContent' ) {
			
			let myDiv = e.target;
			myDiv = myDiv.parentElement;
			
			creatingNameSpace(myDiv);
			
		}
		//divForHeadings e tıklandıysa
		else if(e.target.className=='divForHeadings') {
			
			let myDiv = e.target;
			
			creatingNameSpace(myDiv);
			
			
		}
		//heading span a tıklandıysa
		else if( e.target.className=='spanForHeadings' ) {
			
			let myDiv = e.target;
			myDiv = myDiv.parentElement;
			
			creatingNameSpace(myDiv);
			
		}
		//contentDiv e tıklandıysa
		else if(e.target.className=='projectNameLocation') {
			
			let myDiv = e.target;
			
			creatingNameSpace(myDiv);
			
			
		}
		//content span a tıklandıysa
		else if( e.target.className=='spanForPN' ) {
			
			let myDiv = e.target;
			myDiv = myDiv.parentElement;
			
			creatingNameSpace(myDiv);
			
		}
	}
	//Eğer bir input yeri açık ise
	if(isAnyInputOpen==1) {
		//contentDiv e tıklandıysa
		if(e.target.className=='contentDiv') {
			
			
			let x = document.querySelector('.inputForNewName').parentElement;
		
			x.querySelector('span').style.display = 'initial';
		
			document.querySelector('.inputForNewName').remove();
			
			let myDiv = e.target;
			
			creatingNameSpace(myDiv);
			
			
		}
		//span a tıklandıysa
		else if( e.target.className=='spanForContent' ) {
			
			let x = document.querySelector('.inputForNewName').parentElement;
		
			x.querySelector('span').style.display = 'initial';
		
			document.querySelector('.inputForNewName').remove();
			
			
			let myDiv = e.target;
			myDiv = myDiv.parentElement;
			
			creatingNameSpace(myDiv);
			
		}
		//divForHeadings e tıklandıysa
		else if(e.target.className=='divForHeadings') {
			
			let x = document.querySelector('.inputForNewName').parentElement;
		
			x.querySelector('span').style.display = 'initial';
		
			document.querySelector('.inputForNewName').remove();
			
			let myDiv = e.target;
			
			creatingNameSpace(myDiv);
			
			
		}
		//heading span a tıklandıysa
		else if( e.target.className=='spanForHeadings' ) {
			
			let x = document.querySelector('.inputForNewName').parentElement;
		
			x.querySelector('span').style.display = 'initial';
		
			document.querySelector('.inputForNewName').remove();
			
			let myDiv = e.target;
			myDiv = myDiv.parentElement;
			
			creatingNameSpace(myDiv);
			
		}
		//contentDiv e tıklandıysa
		else if(e.target.className=='projectNameLocation') {
			
			let x = document.querySelector('.inputForNewName').parentElement;
		
			x.querySelector('span').style.display = 'initial';
		
			document.querySelector('.inputForNewName').remove();
			
			let myDiv = e.target;
			
			creatingNameSpace(myDiv);
			
			
		}
		//content span a tıklandıysa
		else if( e.target.className=='spanForPN' ) {
			
			let x = document.querySelector('.inputForNewName').parentElement;
		
			x.querySelector('span').style.display = 'initial';
		
			document.querySelector('.inputForNewName').remove();
			
			let myDiv = e.target;
			myDiv = myDiv.parentElement;
			
			creatingNameSpace(myDiv);
			
		}
		
	}

}


function addHeading() {
	
	const newDivision = document.createElement('div');
	const newDivForHeading = document.createElement('div');
	const newSpanForHeading = document.createElement('span');
	const newAddContentButton = document.createElement('button');
	const newDeleteHeadingButton = document.createElement('button');
	const newDivForContents = document.createElement('div');
	const newOpenCloseButton = document.createElement('button');
	
	newDivision.className = 'divisions';
	
	newDivForHeading.className = 'divForHeadings';
	
	newSpanForHeading.className = 'spanForHeadings';
	newSpanForHeading.innerText = 'New Heading';
	newSpanForHeading.setAttribute('draggable','true');
	
	newAddContentButton.className = 'addContentButton';
	newAddContentButton.innerText = '+';
	newAddContentButton.setAttribute('draggable','true');
	
	newDeleteHeadingButton.className = 'deleteHeadingButton';
	newDeleteHeadingButton.innerText = '-';
	newDeleteHeadingButton.setAttribute('draggable','true');
	newDeleteHeadingButton.addEventListener("click", function(){ 

		delete_item(newDivision);

	});
	myDivisionCounter++;
	newDivForContents.className = 'divForContents';
	newDivForContents.id = 'newDivForContentsid'+myDivisionCounter;
	
	
	newOpenCloseButton.className = "openAndCloseButton";
	newOpenCloseButton.innerText = "↑";
	
	newOpenCloseButton.addEventListener("click", function(){ 

		if(newOpenCloseButton.innerText == "↑") {
			
			newOpenCloseButton.innerText = "↓";
		}
		else {
			
			newOpenCloseButton.innerText = "↑";
		}
		
		
		setTimeout(function(){ 
			
			newOpenCloseButton.disabled = true;
		
		},10);
		
		setTimeout(function(){ 
		
			newOpenCloseButton.disabled = false;
			
		},300);
		
		/*newOpenCloseButton.style.display = 'none';
		setTimeout(function(){ 
		newOpenCloseButton.style.display = 'initial';	
		}, 300);*/
		

	});
	
	newOpenCloseButton.setAttribute('draggable','true');
	newDivForContents.className="collapse in";
	newOpenCloseButton.setAttribute('data-toggle','collapse');
	newOpenCloseButton.setAttribute('data-target','#'+newDivForContents.id);
	newAddContentButton.setAttribute('data-target','#'+newDivForContents.id);
	newOpenCloseButton.style.display = 'none';
	
	newAddContentButton.addEventListener("click", function(){ 
		
	if(newDivForContents.className == 'collapse') {
		newAddContentButton.setAttribute('data-toggle','collapse');
		newOpenCloseButton.innerText = "↑";
		isClicked = 0;
	}
	else {
		newAddContentButton.setAttribute('data-toggle','');
	}
		
		addContent(newDivForContents);

	});
	//data-toggle="collapse" href="#collapseExample"
	
	
	document.getElementById('divForDivisions_id').appendChild(newDivision);
	newDivision.appendChild(newDivForHeading);
	newDivision.appendChild(newDivForContents);
	newDivForHeading.appendChild(newSpanForHeading);
	newDivForHeading.appendChild(newAddContentButton);
	newDivForHeading.appendChild(newDeleteHeadingButton);
	newDivForHeading.appendChild(newOpenCloseButton);
	
	
	canvasFunction()
	
}


function addContent(myDivForContents) {
	
	const newCollapsingDiv = document.createElement('div');
	const newContentDiv = document.createElement('div');
	const newSpanForContent = document.createElement('span');
	const newContentCanvas = document.createElement('canvas');
	const newDeleteContentButton = document.createElement('button');
	const newDivForContentAndCanvas = document.createElement('div');
	
	myDivForContents.parentElement.querySelector('.divForHeadings').querySelector('.openAndCloseButton').style.display = 'initial';
	
	newContentDiv.className = 'contentDiv';
	
	newContentCanvas.setAttribute('width','50px');
	newContentCanvas.setAttribute('height','80px');
	
	newDivForContentAndCanvas.className = 'divForContentAndCanvas';
	
	newSpanForContent.className = 'spanForContent';
	newSpanForContent.innerText = 'New Content';
	newSpanForContent.setAttribute('draggable','true');
	newSpanForContent.disabled = true ;
	
	newDeleteContentButton.className = 'deleteContentButton';
	newDeleteContentButton.innerText = '-';
	newDeleteContentButton.setAttribute('draggable','true');
	newDeleteContentButton.addEventListener("click", function(){ 

		delete_item(newContentDiv);

	});
	
	myDivForContents.appendChild(newDivForContentAndCanvas);
	newDivForContentAndCanvas.appendChild(newContentCanvas);
	newDivForContentAndCanvas.appendChild(newContentDiv);
	newContentDiv.appendChild(newSpanForContent);
	newContentDiv.appendChild(newDeleteContentButton);
	
	var ctx = newContentCanvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(15, 0);
	ctx.lineTo(15, 44);
	ctx.lineTo(400,44);
	ctx.lineTo(15,44);
	ctx.lineTo(15,150);
	ctx.strokeStyle = "#333";
	ctx.lineWidth = 1;
	ctx.stroke();
	
}


function delete_item(myDiv) {
	
	let myDivision = myDiv.parentElement.parentElement.parentElement;
	
	if(myDiv.className == 'contentDiv') {
		
		
		if(myDiv.querySelector('.inputForNewName')==null) {
			myDiv.parentElement.remove();
		}
		else {
			
			myDiv.parentElement.remove();
			isAnyInputOpen=0;
		}
		
		if(myDivision.querySelector('.collapse').querySelector('.divForContentAndCanvas') === null) {
			
			myDivision.querySelector('.divForHeadings').querySelector('.openAndCloseButton').style.display = 'none';
			
		}
		
	}
	else {
		if(myDiv.querySelector('.inputForNewName')==null) {
			myDiv.remove();
		}
		else {
			
			myDiv.remove();
			isAnyInputOpen=0;
			
		}
		canvasFunction()
	}
}


function creatingNameSpace(myDiv) {
	
	myDiv.querySelector('span').style.display = 'none';
	
	const newNameSpace = document.createElement('input');
	newNameSpace.className = 'inputForNewName';
	newNameSpace.setAttribute('value',myDiv.querySelector('span').innerText);
	
	
	myDiv.appendChild(newNameSpace);
	
	newNameSpace.setAttribute('onfocus','this.select()');
	newNameSpace.focus();
	isAnyInputOpen = 1;
	
}








