import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
        message:"type in URL:",
        name:"URL"
    }
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qrGen.png"));
    fs.writeFile("URL.txt",url,(err)=>{
        if(err)throw err;
        console.log("QR Code Generated!")
    });
  })
  .catch((error) => {
    console.log(error);
  });