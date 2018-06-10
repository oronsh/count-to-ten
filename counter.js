// counter function

(function() {
    
    function countToTen() {
	countTo(10);
    }

    function countToTwenty() {
	countTo(20);
    }


    function countTo(x) {
	for(var i=0; i < x; i++) {
	    (function(index) {
		setTimeout(function() {
		    console.log(index+1);
		}, index * 1000);
	    }(i));
	}

    }
    
    this.countToTen    = countToTen;
    this.countToTwenty = countToTwenty;    

}());

countToTen();
