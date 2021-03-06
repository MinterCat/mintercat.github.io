function connect(hash) {
	var str = strtolower(hash);
	var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'https://mintercat.com/ddn', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("a=" + encodeURIComponent(a) + "&b=" + encodeURIComponent(b)); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
          print_r('ok');
        }
      }
    };
}
function getXmlHttp() {
    var xmlhttp;
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
      xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
  }
function file_get_contents( url ) {	// Reads entire file into a string

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
function print_r( array, return_val ) {	// Prints human-readable information about a variable

	var output = "", pad_char = " ", pad_val = 4;

	var formatArray = function (obj, cur_depth, pad_val, pad_char) {
		if(cur_depth > 0)
			cur_depth++;

		var base_pad = repeat_char(pad_val*cur_depth, pad_char);
		var thick_pad = repeat_char(pad_val*(cur_depth+1), pad_char);
		var str = "";

		if(obj instanceof Array) {
			str += "Array\n" + base_pad + "(\n";
			for(var key in obj) {
				if(obj[key] instanceof Array) {
					str += thick_pad + "["+key+"] => "+formatArray(obj[key], cur_depth+1, pad_val, pad_char);
				} else {
					str += thick_pad + "["+key+"] => " + obj[key] + "\n";
				}
			}
			str += base_pad + ")\n";
		} else {
			str = obj.toString(); // They didn't pass in an array.... why? -- Do the best we can to output this object.
		};

		return str;
	};

	var repeat_char = function (len, char) {
		var str = "";
		for(var i=0; i < len; i++) { str += char; };
		return str;
	};

	output = formatArray(array, 0, pad_val, pad_char);

	if(return_val !== true) {
		document.write("<pre>" + output + "</pre>");
		return true;
	} else {
		return output;
	}
}
function strtolower( str ) {	// Make a string lowercase

	return str.toLowerCase();
}
