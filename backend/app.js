const fs =require('fs');

fs.readFile('backend/catalog.json', 'utf8', (err, data) => {
    if (err) {
        console.error('error reading file:', err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        const allData = jsonData;
        console.log(jsonData);
    } catch(parseError) {
        console.error('error w json:', parseError);
    }
    console.log("done updated");
});

//this 