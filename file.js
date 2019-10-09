var fs = require('fs');
var path = require('path');
var filePath = path.resolve('./akLang');
function readData(filename){
  const wt2Filepath = "./wt2Lang/" + filename;
  const akFilepath = "./akLang/" + filename;
  // eslint-disable-next-line no-unused-vars
  let wt2FileData = fs.readFileSync(wt2Filepath,'utf-8');
  wt2FileData = JSON.parse(wt2FileData.toString());
  // eslint-disable-next-line no-unused-vars
  let akFileData = fs.readFileSync(akFilepath,'utf-8');
  akFileData = JSON.parse(akFileData.toString());
  // const allKey = Object.keys(wt2FileData);
  // for (const key in akFileData) {
  //   if(allKey.indexOf(key) <= -1){
  //     delete akFileData[key];
  //   }
  // }
  // fs.writeFile("./commoLang/"+filename,JSON.stringify(akFileData),function(error){
  //   if(error){
  //     console.warn(error)
  //   }
  // })
  for (const key in wt2FileData){
    if(akFileData.hasOwnProperty(key)){
      wt2FileData[key] = akFileData[key];
    }
  }
  fs.writeFile("./wt2Lang/"+filename,JSON.stringify(wt2FileData),function(error){
    if(error){
      console.warn(error)
    }
  })
}
// readData("CN.json")
fs.readdir(filePath,function(err,files){
  if(err){
    console.warn(err)
  }else{
    files.forEach(function(filename){
      readData(filename)
    })
  }
})

