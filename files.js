const fs = require('fs');

// reading file

fs.readFile('./docs/example.txt', (err, data) => {
    if(err) {
        log.error(err);
    }
    console.log(data.toString());
});

// writing file

fs.writeFile('./docs/example1.txt', 'Hello Priya', () => {
    console.log('file has written');
});

//creating a directory(folder)

fs.mkdir('./assets', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('folder created');
});

//if folder exists delete or create folder

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder removed');
    });
};
        
 //deleting existing file
 
 if (fs.existsSync('./docs/deleteMe.txt')) {
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('deleted');
    });
 }
    







