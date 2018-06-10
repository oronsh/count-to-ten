// counter function

(function() {
    
    function countToTen() {
	for(var i=0; i < 10; i++) {
	    (function(index) {
		setTimeout(function() {
		    console.log(index+1);
		}, index * 1000);
	    }(i));
	}
    }


    this.countToTen = countToTen;

}());

countToTen();
