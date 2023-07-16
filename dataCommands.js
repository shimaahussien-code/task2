const fs  =require('fs')
// adding data
const addPerson=(id,fname,lname,age,city)=>{
    const allData = loadData()
    const duplicatedData = allData.filter ((obj) => {
        return obj.id === id
    })
    console.log( duplicatedData)
    if (duplicatedData.length == 0) {
        allData.push ({
            id : id,
            fname : fname,
            lname,
            age : age,
            city : city,
        })

        saveAllData(allData)
    } else {
        console.log("ERROR DUPLICATED ID")
    }
  }


//loading data from json file
const loadData = ()=> {
    
    try {
        const dataJson = fs.readFileSync ("storedData.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }

}

//saving data to file
const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("storedData.json" , saveAllDataJson)

}
//deleting file
const deleteData = (id) => {
    const allData = loadData()

    const dataToKeep = allData.filter ((obj) => {
         return obj.id != id ;
    })
    console.log(dataToKeep)
    saveAllData(dataToKeep)
}
//to read data
      
const readData = (id) => {
    const allData = loadData()

    const itemNeeded = allData.find((obj) => {
         return obj.id == id 
    })
    console.log(itemNeeded)

}
//to list data

const listData = () => {
const allData = loadData()

allData.forEach ((obj) => {
    console.log(obj.fname , obj.lname)
})
}



module.exports = {
    addPerson,
    deleteData, 
    readData,
    listData
}