(function(){
  
  //loading the jquery script in the present document body
  let scriptJQ = document.createElement('script');
  scriptJQ.src="https://yopensource.github.io/bookmarkletDemoForKids/Bookmarklet/jquery-3.4.1.min.js";
  document.body.appendChild(scriptJQ);
  
  //loading the main script in the present document body
  let script = document.createElement('script');
  script.src="https://yopensource.github.io/bookmarkletDemoForKids/Bookmarklet/bookmarklet.js";
  document.body.appendChild(script);
  
})();
