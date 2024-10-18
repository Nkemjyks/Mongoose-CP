let mongoose = require('mongoose')
let database = require('./database')
const Person = require('./person');
const person = require('./person');

//connect to db
database;

//pls run one at a time to test
// creating()
// createMany()
// finding()
// findName()
// findId()
// findByOne()
// findByOneFood()
// updating()
// findByOneUpdate()
// findByIdRemove()
// delMany()
// query()

//Create and Save a Record of a Model:
async function creating() {
    const Emmy = new Person({name: 'Emeka', age: 25, favFoods: ['fufu', 'egusi','yam', 'beans']})
    await Emmy.save()
    console.log(Emmy);
}

//Create and Save a Records of a Model:
async function createMany() {
    await Person.create([{name: 'Mike', age: 23, favFoods: ['rice', 'chicken','stew', 'egg']},{name: 'Tunde', age: 32, favFoods: ['amala', 'ewedu','juice', 'mutton']},{name: 'Beauty', age: 27, favFoods: ['spagh', 'turkey','ribena', 'salad']}])
    console.log('3 items added');
    
}

//Use model.find() to Search Your Database

async function finding() {
    try {
        const people = await Person.find()
    console.log(people);
    } catch (e) {
        console.log(e.message);
        
    }
    
}

//Find all the people having a given name, using Model.find() -> [Person]
async function findName() {
    try {
        await Person.find({ name : "Mike" }).then((p)=>{console.log(p)});
        
    } catch (e) {
        console.log(e.message);
        
    }
    
}

// Use model.findOne() to Return a Single Matching Document from Your Database
async function findByOne() {
    try {
        await Person.findOne({ name : "Mike" }).then((p)=>{console.log(p)});
        
    } catch (e) {
        console.log(e.message);
        
    }
    
}

//Find just one person which has a certain food in the person's favorites, using Model.findOne() -> Person. Use the function argument food as a search key.
async function findByOneFood() {
    try {
        await Person.findOne({ favFoods : "spagh" }).then((p)=>{console.log(p)});
        
    } catch (e) {
        console.log(e.message);
        
    }
    
}

//find Emeka using his id
async function findId() {
    try {
        await Person.findById('670fce6f962006706eb41b1b').then((p)=>{console.log(p);
        })
        
    } catch (e) {
        console.log(e.message);
        
    }
    
}

//update via  Find, Edit, then Save
async function updating() {
    try {
        await Person.findById('670fce6f962006706eb41b1b').then((p)=>{
            console.log(p);
            p.favFoods.push('Hamburger');
            p.age = 21;
            p.save()
            console.log(p)
             })
            
        }
        
    catch (e) {
        console.log(e.message);
        
    }
    
}
// Perform New Updates on a Document Using model.findOneAndUpdate()
async function findByOneUpdate() {
    try {
        await Person.findOneAndUpdate({ name : "Mike" },{age : 20}, {new:true, upsert: true}).then((p)=>{console.log(p);
        })
                   
    } catch (e) {
        console.log(e.message);
        
    }
    
}

// Delete One Document Using model.findByIdAndRemove
// 671102790d84b156ae3163d8
async function findByIdRemove() {
    try {
        await Person.findByIdAndDelete('671102790d84b156ae3163d8');
        await Person.findById('671102790d84b156ae3163d8').then((p)=>{console.log(p)});
                   
    } catch (e) {
        console.log(e.message);
        
    }
    
}

// MongoDB and Mongoose - Delete Many Documents with model.remove()
async function delMany() {
    const Mary = new Person({name: 'Mary', age: 28, favFoods: ['fufu', 'egusi','yam', 'beans']})
    await Mary.save()
    await Mary.save()
    await Mary.save()
    await Person.find({name: 'Mary'}).then((p)=>{console.log(p)})
    await Person.deleteMany({name: 'Mary'}).then((p)=>{console.log(p);
    })
    
    await Person.find({name: 'Mary'}).then((p)=>{console.log(p)});
}


// Chain Search Query Helpers to Narrow Search Results
// Find people who like burritos. 
//Sort them by name, limit the results to two documents, and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). Pass the done(err, data) callback to exec().

async function query() {
    try {
        const people = await Person.where({favFoods:'fufu'}).sort('1').limit(5).select('name').exec()
    console.log(people);
    } catch (e) {
        console.log(e.message);
        
    }
    
}


