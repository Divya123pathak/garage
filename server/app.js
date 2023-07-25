

const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const collection = require('./db');
const moment = require('moment-timezone');







app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.get('/login', (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.redirect('/index.html'); // Redirect to home page if user is logged in
  } else {
    res.redirect('/login1.html'); // Redirect to login1.html if user is not logged in
  }
});
//app.post('/login', (req, res) => {
  //res.sendFile(path.join(__dirname, '../client/public/login1.html'));
////});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/contact.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/services.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/about.html'));
});
app.get('/buy', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/buy.html'));
})
app.get('/pay', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/pay.html'));
})


app.get('/transactions', async (req, res) => {
  const user = await collection.findOne({ name: req.cookies.username });
  res.json(user.transactions);
});

app.post('/submit', async (req, res) => {
  const { name, password } = req.body;
  //let status = ''; 

 
   // Set status to 'null' if the entered values are null
  //res.redirect(`/login1.html?status=${status}`);
  if ((!name || name.trim() === '') && (!password || password.trim() === '')) {
    //console.log('u r null');
    
  console.log('u r null');
  res.redirect('/login1.html');
  return;
 // status = 'null'; 
  
  
 // res.redirect(`/login1.html?status=${status}`);

    //res.sendFile(path.join(__dirname, '../client/public/login1.html')); // Render the login1.html page again
    //return;
  }

  const existingUser = await collection.findOne({ name, password });
  


  
                                          if (!existingUser) {
                                      console.log('New user');
                                       const alertScript = '<script>alert("New user detected!"); window.location.href = "/login1.html";</script>';
                                        res.send(alertScript);
                                        } 
  else{
    console.log(name);
    res.cookie('username', name);
    res.redirect('/index.html');
  }
   //res.redirect(`/login1.html?status=${status}`);
   // res.sendFile(path.join(__dirname, '../client/public/login1.html'));
   // return;
  
   //await collection.updateOne(
    //{ name, password },
    //{ $setOnInsert: { name, password } },
    //{ upsert: true }
  //);

  //await collection.updateOne(
  //  { name, password },
   // { $setOnInsert: { name, password } },
  //  { upsert: true }
  //);
  //const existingUser = await collection.findOne({ name, password });
  //if (existingUser) {
   // console.log('already exist');
   // res.sendFile(path.join(__dirname, '../client/public/login1.html'));
   // return;
 // }
 
 //const existingUser = await collection.findOne({ name, password });
 //if (existingUser) {
   
   //res.sendFile(path.join(__dirname, '../client/public/login1.html'));
   //return;
 //}

  //const data={
   // name:req.body.name,
   // password:req.body.password
//}

//await collection.insertMany([data])

  //if (!name || name.trim() === '' || !password || password.trim() === '') {
    
   // res.sendFile(path.join(__dirname, '../client/public/login1.html')); // Render the login1.html page again
 // } else {

   // console.log(name);
   // res.cookie('username', name);
   // res.redirect('/index.html');
 // }
});


//app.post('/validate', async (req, res) => {
  //const { name, password } = req.body;
  
 // const existingUser = await collection.findOne({ name, password });

 // res.json({ exists: !!existingUser });
//});

//app.post('/validate', async (req, res) => {
 // const { name, password } = req.body;
  //const existingUser = await collection.findOne({ name, password });

 // res.json({ exists: !!existingUser });
//});

//app.post('/validate', async (req, res) => {
  //const { name,password } = req.body;
  //const existingUser = await collection.findOne({ name,password });

 // res.json({ exists: !!existingUser });
//});



 


app.post('/signup', async (req, res) => {
  const { name, password } = req.body;
  //let status = ''; 

 
   // Set status to 'null' if the entered values are null
  //res.redirect(`/login1.html?status=${status}`);
  if ((!name || name.trim() === '') && (!password || password.trim() === '')) {
    //console.log('u r null');
    
  console.log('u r null');
  res.redirect('/signup1.html');
  return;
 // status = 'null'; 
  
  
 // res.redirect(`/login1.html?status=${status}`);

    //res.sendFile(path.join(__dirname, '../client/public/login1.html')); // Render the login1.html page again
    //return;
  }

  const existingUser = await collection.findOne({ name, password });
  if (existingUser) {
    console.log('logged in person');
    const alertScript = '<script>alert("u must log in!"); window.location.href = "/login1.html";</script>';
  res.send(alertScript);
  } 
  else{
   
    await collection.updateOne(
      { name, password },
      { $setOnInsert: { name, password } },
      { upsert: true }
  
    );
    
  

  
    console.log(name);
    res.cookie('username', name);
    res.redirect('/index.html');
  }
   //res.redirect(`/login1.html?status=${status}`);
   // res.sendFile(path.join(__dirname, '../client/public/login1.html'));
   // return;
  
  // await collection.updateOne(
   // { name, password },
   // { $setOnInsert: { name, password } },
    //{ upsert: true }
 // );

  //await collection.updateOne(
  //  { name, password },
   // { $setOnInsert: { name, password } },
  //  { upsert: true }
  //);
  //const existingUser = await collection.findOne({ name, password });
  //if (existingUser) {
   // console.log('already exist');
   // res.sendFile(path.join(__dirname, '../client/public/login1.html'));
   // return;
 // }
 
 //const existingUser = await collection.findOne({ name, password });
 //if (existingUser) {
   
   //res.sendFile(path.join(__dirname, '../client/public/login1.html'));
   //return;
 //}

  //const data={
   // name:req.body.name,
   // password:req.body.password
//}

//await collection.insertMany([data])

  //if (!name || name.trim() === '' || !password || password.trim() === '') {
    
   // res.sendFile(path.join(__dirname, '../client/public/login1.html')); // Render the login1.html page again
 // } else {

   // console.log(name);
   // res.cookie('username', name);
   // res.redirect('/index.html');
 // }
});


//app.post('/validate', async (req, res) => {
  //const { name, password } = req.body;
  
 // const existingUser = await collection.findOne({ name, password });

 // res.json({ exists: !!existingUser });
//});

//app.post('/validate', async (req, res) => {
 // const { name, password } = req.body;
  //const existingUser = await collection.findOne({ name, password });

 // res.json({ exists: !!existingUser });
//});

//app.post('/validate', async (req, res) => {
  //const { name,password } = req.body;
  //const existingUser = await collection.findOne({ name,password });

 // res.json({ exists: !!existingUser });
//});


app.post('/pay', async (req, res) => {
  const totalAmount = req.body['total-amount'];
  const servicesAvailed = req.body['services-availed'];
  
  if ( parseFloat(totalAmount) === 0) {
    const user = await collection.findOne({ name: req.cookies.username });
   user.pay = 0.00; // Set the default value for the pay field
   const currentDate = new Date();
   user.transactions.push({ date: currentDate, services: [], totalAmount: 0.00 });
   //user.transactions.push({ date: new Date(), services:[], totalAmount: 0.00 });
   await user.save();
    console.log('Payment amount is 0');
    res.redirect('/buy.html');
   // res.redirect('/buy.html?refresh=true');
    return;
  }
else
{
//res.redirect(`/pay.html?total-amount=${totalAmount}`);


const user = await collection.findOne({ name: req.cookies.username });

// Update the "pay" field for the user with the totalAmount value
//user.pay = totalAmount;
user.pay = parseFloat(user.pay) + parseFloat(totalAmount);
// Replace "10000" with the appropriate cost of each service
let services = [];
if (Array.isArray(servicesAvailed)) {
  services = servicesAvailed.map((serviceValue) => {
    let serviceName = '';
    let cost = 0;
    if (serviceValue === '100') {
      serviceName = 'maintenance';
      cost = 100;
    } else if (serviceValue === '500') {
      serviceName = 'repair';
      cost = 500;
    } else if (serviceValue === '200') {
      serviceName = 'carwash';
      cost = 200;
    }

    return { name: serviceName, cost };
  });
}
      
const currentDate = new Date();
   



user.transactions.push({ date: currentDate, services, totalAmount: totalAmount });

await user.save();

console.log('Payment amount updated:', user.pay);

 
res.redirect(`/pay.html?total-amount=${totalAmount}`);
//console.log('Payment amount saved:', totalAmount);
//res.redirect(`/pay.html?total-amount=${totalAmount}&refresh=true`);


}

});
           //try {
           // const newPay = new PayModel({ pay: totalAmount });
             // await newPay.save();
             // console.log('Payment amount saved:', totalAmount);
              //res.redirect(`/pay.html?total-amount=${totalAmount}`);
              //} catch (error) {
              // console.log('Error saving payment amount:', error);
              //    res.redirect('/buy.html');
              // }
             


 



app.listen(7000, () => {
  console.log('Server is running on port 7000');
});
