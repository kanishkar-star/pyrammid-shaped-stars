var rows = 25;
for(var i=1 ; i<=rows ; i++){
    for(var k=1 ; k<=(rows - i) ; k++){
        document.write("&nbsp;")
    }
    for( var j=1 ; j<=i ; j++){
        document.write(" * ")
    }
    document.write("<br>")
}
document.write("<br><br><br><br>")
for(var i=1;i<=rows;i++){
    for(var j=1;j<=i;j++){
      document.write(" * ");
    }
document.write("<br>");
}
