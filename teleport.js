/*
 *      Teleport.JS
 *      Originally by @hunterhdolan, contributions by @visualidiot and @thomasethajar
 */
 
function teleport(what, callback) {

    //  Check if it's an array…
	if(Object.prototype.toString.apply(what) === '[object Array]')  {
        for(i = 0; i < what.length; i++) {
            import(what[i]);
        }
    } else {
        import(what);
    }

    //  Function-ception.
    function import(script) {
        var head = document.getElementsByTagName('head')[0];
            script_tag = document.createElement('script');
            script_tag.src = script;
            script_tag.type = 'text/javascript';
        
            head.appendChild(script_tag)    
    }
    
    //  And run a callback with the function.
    if(typeof callback == 'function') {
        callback();
    }
}
