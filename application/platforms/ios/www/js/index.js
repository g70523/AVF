/*Louise Whitney*/
/*AVF 1401*/




document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available

function onDeviceReady() {
   
    $('<a href="#github" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">GITHUB</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">INSTAGRAM</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">FACEBOOK</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">ACCELEROMETER</a>').appendTo('#content');
    $('<a href="#compass" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">COMPASS</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">MASHUP #1</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">MASHUP #2</a>').appendTo('#content');
    $('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">MASHUP #3</a>').appendTo('#content');
    
    
    
    
    
    $('<button id="comp" class="ui-btn ui-mini">COMPASS</button>').appendTo('#comps');
    $('<div id="heading">Waiting For Heading......</div>').appendTo('#comps');

    
                                //start inAppWebBrowser controls
    
    function web(){
        
        window.open('https://github.com/g70523/IWorkOut', '_blank', 'location=yes');
    
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
    $('#git').on("click", web)/*inAppWebBrowser*/






}

