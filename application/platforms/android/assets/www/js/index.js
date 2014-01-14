/*Louise Whitney*/
/*AVF 1401*/

  // Home Page
    
    
    $('#profile').css({borderRadius: "10px", border: "5px solid black", padding: "10px", textAlign: "center"});
    
    $('<a href="#research" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">RESEARCH TOPICS</a>').appendTo('#content');
    $('<a href="#github" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">GITHUB</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">INSTAGRAM</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">YOUTUBE</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">ACCELEROMETER</a>').appendTo('#content');
    $('<a href="#compass" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">COMPASS</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">CAMERA</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">MASHUP #1</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">MASHUP #2</a>').appendTo('#content');
    
   // Research Page
    var t1 = $('<div id="top1"</div>').appendTo('#resContent');
    var t2 = $('<div id="top2"</div>').appendTo('#resContent');
    var t3 = $('<div id="top3"</div>').appendTo('#resContent');
    
    var re1 = $('<h1>Research Topic Week 2</h1>'+'<p>Login With Facebook Options</p>');
    var re2 = $('<h1>Research Topic Week 3</h1>'+'<p>Using the Accelerometer to make a pedometer</p>');
    var re3 = $('<h1>Research Topic Week 4</h1>'+'<p>Mashup options with camera and geo api\'s</p>');
    
    
    t1.css({border:"2px solid black",padding: "10px", textAlign: "center", borderRadius:"10px"});
    t2.css({border:"2px solid black",padding: "10px", textAlign: "center", borderRadius:"10px", marginTop: "10px"});
    t3.css({border:"2px solid black",padding: "10px", textAlign: "center", borderRadius:"10px", marginTop: "10px"});

    
    re1.appendTo('#top1');
    re2.appendTo('#top2');
    re3.appendTo('#top3');
    
    

    
    
    
   //Git Page
    
    $('<button id="gitA" class="ui-btn ui-mini">APPLICATION</button>').appendTo('#gitContent');
    $('<button id="gitB" class="ui-btn ui-mini">IOS</button>').appendTo('#gitContent');
    $('<button id="gitC" class="ui-btn ui-mini">ANDROID</button>').appendTo('#gitContent');

   //Compass Page
    
    $('<button id="comp" class="ui-btn ui-mini">START COMPASS</button>').appendTo('#comps');
    $('<button id="comp" class="ui-btn ui-mini">STOP COMPASS</button>').appendTo('#comps');
    $('<div id="heading">Waiting For Heading......</div>').appendTo('#comps');
    $('#heading').css({padding: "20px",border: "2px solid black",marginTop: "20px" });


document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available

function onDeviceReady() {
   
    
  
    

    
                                //start inAppWebBrowser controls for git page
    
    function webA(){
        
        window.open('https://github.com/g70523/AVF', '_blank', 'location=yes');
    
    };
    
    function webB(){
        
        window.open('http://g70523.github.io/AVF/application/platforms/ios/www/index.html', '_blank', 'location=yes');
        
    };
    
    function webC(){
        
        window.open('http://g70523.github.io/AVF/application/platforms/android/assets/www/index.html', '_blank', 'location=yes');
        
    };
    
                                //start inAppWebBrowser controls
    
    
    
                                //start compass copntrols
    
    function nav(){ 
        // Update compass every 3 seconds
        var options = { frequency: 1000 };
        
        watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    }
    
    // onSuccess: Get the current heading
    //
    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    }
    
    // onError: Failed to get the heading
    //
    function onError(compassError) {
        alert('Compass Error: ' + compassError.code);
    }
    
                                //end compass controls
    
    
    $('#comp').on("click", nav)/*compass button*/
    $('#gitA').on("click", webA)/*inAppWebBrowser*/
    $('#gitB').on("click", webB)/*inAppWebBrowser*/
    $('#gitC').on("click", webC)/*inAppWebBrowser*/
    






}

