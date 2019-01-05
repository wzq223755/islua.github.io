function han_init() {
  han_processPost();
  han_processHeader();
  han_processElements();
  han_processFooter();
  han_processCopyright();
}

function han_processPost() {
  var elements = document.getElementsByClassName("han-post");
  for (var i = 0; i < elements.length; i++) {
    var p = elements[i].getElementsByTagName("p");
    for (var j = 0; j < p.length; j++) {
      var inner = p[j].innerHTML;
      inner = insert_spacing(inner, 0.13);
      p[j].innerHTML = inner;
    }
    var h2 = elements[i].getElementsByTagName("h2");
    for (var j = 0; j < h2.length; j++) {
      if (h2[j].getAttribute('href') != "") {
        var inner = h2[j].innerText;
        var reg = new RegExp(inner, 'g');
        inner = insert_spacing(inner, 0.1);
        h2[j].innerHTML = h2[j].innerHTML.replace(reg, "");
        h2[j].innerHTML += inner;
      }
    }
  }
}

function han_processElements(){
	var elements = document.getElementsByClassName("han-element");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].children.length <= 0){
			var inner = elements[i].innerHTML;
			inner = insert_spacing(inner,0.1);
			elements[i].innerHTML = inner;
		}
	}
}

function han_processHeader() {
  var elements = document.getElementsByClassName("han-header");
  for (var i = 0; i < elements.length; i++) {
    var h2 = elements[i].getElementsByTagName("h2");
    for (var j = 0; j < h2.length; j++) {
      if (h2[j].children.length <= 0) {
        var inner = h2[j].innerHTML;
        inner = insert_spacing(inner, 0.13);
        h2[j].innerHTML = inner;
      }
    }
    var a = elements[i].getElementsByTagName("a");
    for (var j = 0; j < a.length; j++) {
      if (a[j].children.length <= 0) {
        var inner = a[j].innerHTML;
        inner = insert_spacing(inner, 0.1);
        a[j].innerHTML = inner;
      }
    }
  }
}

function han_processFooter() {
  var elements = document.getElementsByClassName("han-footer");
  for (var i = 0; i < elements.length; i++) {
    var a = elements[i].getElementsByTagName("a");
    for (var j = 0; j < a.length; j++) {
      var inner = a[j].innerHTML;
      inner = insert_spacing(inner, 0.1);
      a[j].innerHTML = inner;
    }
  }
}

function han_processCopyright() {
	var elements = document.getElementsByClassName("han-copyright");
	for (var i = 0; i < elements.length; i++) {
	  var span = elements[i].getElementsByTagName("span");
	  for (var j = 0; j < span.length; j++) {
		if (span[j].childElementCount <= 0){
			var inner = span[j].innerHTML;
			inner = insert_spacing(inner, 0.1);
			span[j].innerHTML = inner;
		}
	  }
	}
  }

function insert_spacing(str, space) {
  var p1 = /([A-Za-z_])([\u4e00-\u9fa5]+)/gi;
  var p2 = /([\u4e00-\u9fa5]+)([A-Za-z_])/gi;
  var p3 = /([0-9_])([\u4e00-\u9fa5]+)/gi;
  var p4 = /([\u4e00-\u9fa5]+)([0-9_])/gi;
  var p5 = /([A-Za-z_])([`~!@#$%^&*()_\-+=?:"{}|,.\/;'\\[\]·~！@#￥%&*——\-+={}‘’])([\u4e00-\u9fa5]+)/gi;
  var p6 = /([\u4e00-\u9fa5]+)([`~!@#$%^&*()_\-+=?:"{}|,.\/;'\\[\]·~！@#￥%&*——\-+={}‘’])([A-Za-z_])/gi;
  var p7 = /([\u4e00-\u9fa5]+)([<])([a])/gi;
  var p8 = /([a])([>])([\u4e00-\u9fa5]+)/gi;
  var quotation1 = /(“)/gi
  var quotation2 = /(”)/gi
  str = str.replace(p1, '$1あおえ$2').replace(p2, "$1あおえ$2").replace(p3, "$1あおえ$2").replace(p4, "$1あおえ$2").replace(p5, "$1$2あおえ$3").replace(p6, "$1あおえ$2$3").replace(p7, "$1あおえ$2$3").replace(p8, "$1$2あおえ$3");
  str = str.replace(quotation1, '「').replace(quotation2, '」');
  var p = /([あ])([お])([え])/gi;
  str = str.replace(p, '<han style="padding-left:' + space + 'em !important;padding-right:' + space + 'em !important"></han>');
  return str;
}
