<script>


    
function getQueryStringValue (key) {  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }  
  
  // Would write the value of the QueryString-variable called name to the console  
  console.log(getQueryStringValue("name")); 
    ;
</script>

<html>
    <head>

    </head>
    <body>
        <div id="demo"></div>

        <button onclick="getSource()">Go</button>
    </body>
</html>


<script>
    if (getQueryStringValue("foo") == "lorem")
    {
        document.getElementById("demo").innerHTML = "<b>This is Sparta</b><div id='john'>lucas</div>";
    }else{
        document.getElementById("demo").innerHTML = getQueryStringValue("foo");
    };


    function getSource(){
        document.getElementById("john").innerHTML = "susan";

    }
</script>
