function connect() {
	var con = 'test';
	return con.responseText;
}
function file_get_contents( url ) {	// Reads entire file into a string
	// 
	// +   original by: Legaev Andrey
	// %		note 1: This function uses XmlHttpRequest and cannot retrieve resource from different domain.

	var req = null;
	try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {
		try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {
			try { req = new XMLHttpRequest(); } catch(e) {}
		}
	}
	if (req == null) throw new Error('XMLHttpRequest not supported');

	req.open("GET", url, false);
	req.send(null);

	return req.responseText;
}
