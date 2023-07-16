
const yargs = require('yargs');
const dataCommands = require("./dataCommands");
yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        id : {
            describe: "adding the id ",
            demandOption: true,
            type: "string"
        },
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        },
        
    },
    handler: (x)=> {
        
        dataCommands.addPerson(x.id,x.fname , x.lname , x.age , x.city  )
    }
 })

 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        
        dataCommands.deleteData(x.id)
    }
 })

 yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        dataCommands.readData (x.id)
    }
 })


 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        dataCommands.listData()
    }
 })
 
 

// console.log(yargs.argv)
yargs.parse()   
  



