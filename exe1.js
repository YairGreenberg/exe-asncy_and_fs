import fs from "fs";
// //ex1
// function getUserName(callback)
// {
//     setTimeout(() => {
//         const userName = "Moshe";
//         callback(userName)

//     }, 1000);
// }

// getUserName(function(name) {console.log("user name is: "+name);})

// //ex1.2

// function loadScore(callback)
// {
//     setTimeout(() => {
//        const score  = 85;
//        callback(score )
//     }, 1500);

// }

// loadScore(function (score) {console.log("Loaded score: ", score);
// })

// //ex1.3
// function checkLogin(callback)
// {
//     setTimeout(()=>{
//         const isLogin = true;
//         callback(isLogin)
//     },2000)
// }
// checkLogin((isLogin)=>{
//     if(isLogin===true){
//         console.log("user is logged in");

//     }else{
//         console.log("User is NOT logged in");

//     }
// })

// //ex1.4
// function getProductPrice(productId, callback){

//     setTimeout(()=>{
//         const price = 99.9
//         callback(price)
//     },900)
// }

// getProductPrice(123,(price)=>{console.log("Price for product 123 is:",price);
// })

// console.log("Requesting product price...");

// //1.5
// function loadConfig(callback)
// {
//     setTimeout(()=>{
//         const config = {env:"dev",debug:true}
//         callback(config)
//     },500)
// }
// loadConfig((config)=>{console.log("Config loaded:",config);}
// )

// //1.6
// function addAsync(a, b, callback){
//     setTimeout(()=>{
//         let sum = a+b
//     callback(sum)

//     },1000)
// }

// addAsync(5, 7,(sum)=>{console.log("sum is: ",sum);
// })

// //1.7
// function getFirstAsync(array, callback){
//     setTimeout(()=>{
//         let element = array[0]
//         callback(element)
//     },700)
// }

// getFirstAsync(["a","b","c"],(element)=>{console.log("First:",element);
// })

// //1.8
// function isEvenAsync(number, callback)
// {
//     setTimeout(()=>{
//       const isEven = number%2===0
//       callback(isEven)
//     },800)
// }

// isEvenAsync(4,(isEven)=>{console.log("numer is even? ",isEven);
// })
// isEvenAsync(5,(isEven)=>{console.log("numer is even? ",isEven);
// })

// //1.9
// function downloadFile(url, callback)
// {
//     setTimeout(()=>{
//         console.log( "Downloading from:",url);
//         callback("Download finished")
//     },1500)
// }

// downloadFile( "http://example.com/file",(log)=>{console.log(log)
// })

// //1.10
// function doubleAsync(value, callback)
// {
//     setTimeout(()=>{
//         const calc = value * 2;
//         callback(calc)
//     },300)
// }

// doubleAsync(10,(calc)=>{console.log("Result: ",calc);
// })

// //exe 2.1
// console.log("start");

// fs.writeFile("note.txt","Hello from async writeFile",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File written successfully");
//     }
// })
// console.log("end");

// //ex2.2

// console.log("start");

// fs.readFile("note.txt","utf-8",(err,callback)=>{
//     if(err){
//         console.error("Error reading file")
//     }else{
//         console.log("Content:"+callback);

//     }
// })
// console.log("end");

// //exe2.3
// fs.appendFile("node.txt","\nNew line added",(err)=>{
//     if(err){
//         console.error(err)
//     }else{
//         console.log("Line appended");

//     }
// })

//exe 2.4
// fs.mkdir("logs",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Directory 'logs' created");
//     }
// })

//exe 2.5
// fs.writeFile("logs/log.txt","First log line",(err)=>{
//     if(err){
//         console.log("Error creating log file");
//     }else{
//         console.log("Log file created");

//     }
// })

// //exe2.6
// fs.readdir("logs",(err,data)=>{
//     if(err){
//         console.log(arr);

//     }else{
//         console.log("Files in logs:"+data);

//     }
// })

// //exe2.7
// fs.stat("note.txt",(err,stats)=>{
//     if(err){
//         console.log("Error getting stats");
//     }else{
//         console.log("Is file: "+stats.isFile(),"\nSize: "+stats.size);

//     }
// })

//exe2.8
// fs.unlink("logs/log.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("log.txt deleted");

//     }
// })

//exe2.9
// fs.writeFile("note.txt", "New content here", (err) => {
//   if (!err) {
//     console.log("note.txt overwritten");
//     fs.readFile("note.txt", "utf-8", (err, data) => {
//       if (data) {
//         console.log(data);
//       } else {
//         console.log(err);
//       }
//     });
//   } else {
//     console.log("yair", err);
//   }
// });

//exe2.10
fs.mkdir("data",(err)=>{
    if(!err){
        fs.writeFile("data/info.txt", "Some info",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("seccssuflly");
    }
})

    }else{
        console.log(err);
        
    }
})
