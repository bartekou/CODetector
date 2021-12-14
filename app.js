const express = require('express');
const app = express();
app.use(express.json());

const sensors  =  {id: 1, name: 'prototyp1', value: 0};

app.get('/api/COlevel/', (req, res) =>
{
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    res.send(sensors);
});

// app.get('/api/COlevel/:id', (req, res) =>
// {
//     res.set({
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//     });

//     const sensor = sensors.find(c => c.id === parseInt(req.params.id));
//     if (!sensor) res.status(404).send('The sensor with this ID does not exist');
//     res.send(sensor);
  
// });

//app.post();

app.put('/api/COlevel/:id', (req, res) =>
{
    //check the sensor
    // if doesn't exist return 404
  //  const sensor = sensors.find(c => c.id === parseInt(req.params.id));
  //  if (!sensor) res.status(404).send('The sensor with this ID does not exist');

    //validate
   // If invalid, return 400
   if (!req.body.value || req.body.value > 100)
   {
       res.status(400).send('Wrong value of the sensor');
   }
      
    sensor.value = req.body.value;  //update COlevel
    res.status(200).send(sensor);    //return new COlevel
});


//app.delete();

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listen on port: ${port}`));