# How to create your own book mark in Chrome

     book-mark-script can change the dom element properties and alot of other cool stuff
  


## Take following steps to create your own book mark that runs in chrome over online websites

  + Drag and drop any link in the bookmark bar of the chrome
  
  + Link's innerHTML will become _Name of your Bookmark_ 
  
  + Right Click and click _Edit_ to change Name of your Bookmark
  
  + Change URL to  ```javascript: (  function(){ //your code here }     )()``` 
  like in [bookmarkCode.js](https://yopensource.github.io/bookmarkletDemoForKids/Bookmarklet/bookmarkCode.js)
  
  + While pasting the code in the URL of your bookmark it should not have any new lines
  
  + In [bookmarkCode.js](https://yopensource.github.io/bookmarkletDemoForKids/Bookmarklet/bookmarkCode.js) we can write any javascript valid statement
    but here i am creating two script nodes and adding them at the end of the html document body
  
  
  
  
#  Note : 

> - Your script node's src must be hosted online

> - Maintain the proper order of the script nodes as they are interdependent

> - Your bookmark code must start with _javascript:_ and must be converted to single line




#### So, what is a custom bookmark 
          >> In nut shell , its a button which on clicking runs a saved function code
          >> All we will do is load other scripts using that function
