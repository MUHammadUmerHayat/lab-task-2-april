document.write("<h1>Table</h1>");

var table = +prompt('write a table name', "2");
var table1 = 1;


for (i = table1; i <= 10; i++) {
    document.write(table + "*" + i + "=", table * i + "<br/> ");

}


document.write("<h1>2nd Assignment</h1>");

function diamond(n) {
    n = parseInt(n, 10);

    var i, s;


    document.write("<pre>");
    for (i = 1; i <= n; ++i) {

        for (s = 1; s <= n - i; ++s) {
            document.write(" ");
        }

        for (s = 1; s <= i; ++s) {
            document.write("* ");
        }
        document.write("\n");
    }

    for (i = n - 1; i >= 1; --i) {

        for (s = 1; s <= n - i; ++s) {
            document.write(" ");
        }

        for (s = 1; s <= i; ++s) {
            document.write("* ");
        }
        document.write("\n");
    }
    document.write("</pre>");
}
diamond(10);


document.write("<h1>3rd Assignment</h1>");


var x, y;
for (x = 0; x < 10; x++) {
    for (y = 0; y <= x; y = y + 1) {
        document.write("*");
    }
    document.write("<br>");
}







