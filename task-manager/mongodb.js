
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {

        return console.log('Unable connect to the database');
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Senal',
    //     age: 28
    // }, (error, result) => {

    //     if(error) {

    //         return console.log('Unable to insert document');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28,
    //         gender: 'f'

    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {

    //     if (error) {

    //         return console.log('Unable to insert records');
    //     }

    //     console.log(result.ops);
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Task 1',
            completed: true
        },
        {
            description: 'Task 2',
            completed: false
        },
        {
            description: 'Task 3',
            completed: true
        },
        {
            description: 'Task 4',
            completed: false
        }
    ], (error, result) => {

        if(error) {

            return console.log('Unable to insert tasks')
        }

        console.log(result.ops);
    })
})