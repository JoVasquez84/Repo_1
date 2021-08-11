const express = require ('express');
const app = express();
const port = 3000;

const students = [
  {
    name:'Joe',
    grades: ['A','B','C'],
    id: 1
   },
   {
    name:'John',
    grades: ['A','A','A'],
    id: 2
   },
   {
    name:'Kenny',
    grades: ['A','F','D'],
    id: 3
   },
  {
    name: 'Mark',
    id: 4,
    grades: ['B']
  },
  {
    name: 'Billy', 
    id: 5,
    grades: ['C', 'C', 'C']
  }
];



app.get('/students',(req,res) =>{
    const search=req.query.search;
    if (req.query.search) {
        res.send(students.filter(

        )
        )

    }
  res.send(JSON.stringify(students))
})


app.listen(port,() => {
  console.log(`App is running on port ${port}`)
});