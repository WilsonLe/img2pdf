const PDFDocument = require('pdfkit');
const fs = require('fs');

doc = new PDFDocument

//Pipe its output somewhere, like to a file or HTTP response 
//See below for browser usage 
doc.pipe(fs.createWriteStream('output.pdf'))


//Add an image, constrain it to a given size, and center it vertically and horizontally 
doc.image('./test.png', {
   fit: [500, 400],
   align: 'center',
   valign: 'center'
});

doc.end()