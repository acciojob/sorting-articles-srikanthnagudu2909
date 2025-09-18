//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function remove(name) {
	return name.replace(/^(a |an |the )/i, '').trim();	
}
const sort=bands.sort((a,b)=>{
	return remove(a).localeCompare(remove(b))
})
const display=document.getElementById("band")
display.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
