(function () {
	function addCss(fileName) {
	  var head = document.head;
	  var link = document.createElement("link");
	  link.type = "text/css";
	  link.rel = "stylesheet";
	  link.href = fileName;
	  head.appendChild(link);
	}
	var loadJS = function(url, implementationCode, location){
	    var scriptTag = document.createElement('script');
	    scriptTag.src = url;
	    scriptTag.onload = implementationCode;
	    scriptTag.onreadystatechange = implementationCode;
	    location.appendChild(scriptTag);
	};
	
	
	var scriptCallback = function(){
		var HTMLlist;
		var TB = {
			getImgUrl: function(img) {
				return 'https://sleeknotestaticcontent.sleeknote.com/template-images/' + img;
			}
		}
		window.callback(undefined, TB);
		var HTMLlist = document.getElementById('sn-c2c-gallery');
		var CTAtxt = 'Try this campaign now';
		
		tplList.forEach(function(tpl){
			if(!tpl.title || tpl.emptyTemplate) return;
			var tag = tpl.multistep ? '<div class="tag"></div>' : '';
			var link = 'https://sleeknote.com/template-signup/?templateId=' + tpl.id + '&goalId=' + tpl.goalIndexes[0];
			HTMLlist.insertAdjacentHTML('beforeend', `<li id="` + tpl.id +  `">
				<div class="entry shadow-drop-bottom" onclick="window.open('` + link + `')">
					<div class="top-wrap">
						<div class="overlay">
							<a class="btn btn-primary c-btn">` + CTAtxt + `</a>
						</div>
						` + tag + `
						<div class="img-wrap">
							<img src="` + tpl.thumbnail +  `"/>
						</div>
					</div>
					<div class="bottom-wrap">
						<h3>` + tpl.title +  `</h3>
						<a href="` + link + `" target="_blank" class="touch-only mobile-link">` + CTAtxt + `</a>
					</div>
				</div>
			</li>`);
		});
	}
	
	addCss('https://sleeknote.com/services/c2c-gallery-style.css');
	loadJS('https://sleeknotestaticcontent.sleeknote.com/note-templates/template-list.js', scriptCallback, document.body);
})();