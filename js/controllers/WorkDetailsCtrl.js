app.controller('WorkDetailsCtrl', WorkDetailsCtrl);

function WorkDetailsCtrl($routeParams, $location, worksService) {
	this.$location = $location;
    this.currentPath = $location.path();
	this.worksService = worksService;
	this.work = this.worksService.getWork($routeParams.workId);
	this.id = 0;
	this.pie = this.work.Pieces[this.id];
	this.pies = this.work.Pieces;
	this.pie.Status = 'active';
	this.sour = this.pie.MImage;
	var eleme = document.getElementById("media");
	if(this.pie.Media == "image") {
	    var img = document.createElement("img");
	    img.setAttribute('src', this.sour);
        eleme.appendChild(img);
	} else if(this.pie.Media == "video") {
	    var iframe = document.createElement("iframe");
	    iframe.setAttribute('src', this.sour);
	    iframe.setAttribute('text', 'text/html');
	    iframe.classList.add("youtube-player");
	    // video.setAttribute("controls","controls");
        eleme.appendChild(iframe);
    }
}

WorkDetailsCtrl.prototype.refresh = function(id) {
	this.pie = this.work.Pieces[this.id];
    for(i = 0; i<this.work.Pieces.length; i++) {
    	this.pies[i].Status = 'inactive';
    }
    this.pie.Status = 'active';
    this.sour = this.pie.MImage;
    var eleme = document.getElementById("media");
    if(this.pie.Media == "image") {
    	var x = eleme.childNodes;
    	eleme.removeChild(eleme.childNodes[0]);
	    var img = document.createElement("img");
	    img.setAttribute('src', this.sour);
        eleme.appendChild(img);
	} else if(this.pie.Media == "video") {
		var x = eleme.childNodes;
    	// eleme.removeChild(x);
    	eleme.removeChild(eleme.childNodes[0]);
	    var iframe = document.createElement("iframe");
	    iframe.setAttribute('src', this.sour);
	    iframe.setAttribute('text', 'text/html');
	    iframe.classList.add("youtube-player");
	    // video.setAttribute("controls","controls");
        eleme.appendChild(iframe);
    }
}

WorkDetailsCtrl.prototype.chooseWork = function(id) {
	this.id = id;
	this.refresh(this.id);
	console.log(this.id);
}

WorkDetailsCtrl.prototype.add = function(id) {
    this.id = Number(this.id) + 1;
    if(this.id >= this.pies.length) {
    	this.id = 0;
    }
    this.refresh(this.id);
}

WorkDetailsCtrl.prototype.subtract = function(id) {
    this.id = Number(this.id) - 1;
    if(this.id < 0) {
    	this.id = this.pies.length - 1;
    }
    this.refresh(this.id);
}