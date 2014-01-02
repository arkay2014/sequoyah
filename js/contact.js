function resetSelect() {
	document.getElementById('info-select').selectedIndex = 0;
    return true;
}

// Mouseover and Mouseout functions used to highlight a contact's information.

function contactMouseover(section_overlay, contact_overlay) {
	var section = document.getElementById(section_overlay);
	var contact = document.getElementById(contact_overlay);
	var overlay = document.getElementById('overlay');

	overlay.style.display = 'block';
	section.style.display = 'block';
	contact.style.display = 'block';
}

function contactMouseout(section_overlay) {
	var section = document.getElementById(section_overlay);
	var overlay = document.getElementById('overlay');
	
	overlay.style.display = 'none';
	section.style.display = 'none';
}

// Used to determine selection from drop-down menu.
function infoSelect()
{
	var x = document.getElementById("info-select").selectedIndex;
	var y = document.getElementById("info-select").options;

	if (y[x].index == 0) {
		emailSelect();
	} else {
		phoneSelect();
	}

}

// Function used to change contact info to email addresses when "Email address" selected.				
								
function emailSelect() {
	var contactData1 = document.getElementById('contact1');
	var contactData2 = document.getElementById('contact2');
	var contactData3 = document.getElementById('contact3');
	var contactData4 = document.getElementById('contact4');
	var contactData5 = document.getElementById('contact5');
	var contactData6 = document.getElementById('contact6');
	var contactData7 = document.getElementById('contact7');
	var contactData8 = document.getElementById('contact8');
	
	contactData1.innerHTML = 'christian@yahoo.com';
	contactData2.innerHTML = 'rich@tripod.com';
	contactData3.innerHTML = 'scott@mailinator.com';
	contactData4.innerHTML = 'danny@hotmail.com';
	contactData5.innerHTML = 'taka@myspace.com';
	contactData6.innerHTML = 'tim@netscape.com';
	contactData7.innerHTML = 'patrick@live.com';
	contactData8.innerHTML = 'jacques@aol.com';
	return false;
}

// Function used to change contact info to phone numbers when "Phone number" selected.

function phoneSelect() {
	var contactData1 = document.getElementById('contact1');
	var contactData2 = document.getElementById('contact2');
	var contactData3 = document.getElementById('contact3');
	var contactData4 = document.getElementById('contact4');
	var contactData5 = document.getElementById('contact5');
	var contactData6 = document.getElementById('contact6');
	var contactData7 = document.getElementById('contact7');
	var contactData8 = document.getElementById('contact8');
	
	contactData1.innerHTML = '323-555-1234';
	contactData2.innerHTML = '323-555-1234';
	contactData3.innerHTML = '323-555-1234';
	contactData4.innerHTML = '323-555-1234';
	contactData5.innerHTML = '323-555-1234';
	contactData6.innerHTML = '323-555-1234';
	contactData7.innerHTML = '323-555-1234';
	contactData8.innerHTML = '323-555-1234';
	return false;
}
				
