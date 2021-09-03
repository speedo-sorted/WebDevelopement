const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

const { v4: uuid} = require('uuid');            // for unique id's
//uuid(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'





app.listen(3000,()=>{
    console.log("success! conected to port");
});

app.get('/login', (req,res)=>{
    res.render('index');
});

app.post('/user', (req,res)=> {
    let isthere = false;
    for (let val of Object.entries(passwords))
    {
        if(val[0] == req.body.user && val[1] == req.body.pass)
        {
            isthere = true;
            break;
        }
    }
    if(isthere){
        res.render('user', people[`${req.body.user}`]); 
        ///
        // don't render here, redirect from here since it is post req. if page refreshes form submit again, i.e this code runs again
        // use res.redirect('user', pelple['${req.body.user}`]);
    }
    else {
        res.render('unauthentic');
    }
})     
app.get('/user/edit/:usernam', (req, res)=>{
    
    let {usernam} = req.params;
    let assetList = people[`${usernam}`].vars.assetList;
    let debtList = people[`${usernam}`].vars.debtList;
    
    res.render('itemedit', {usernam, assetList, debtList});

});

app.post('/user/edit/:usernam', (req, res)=>{
    // i have given all assets start with 'A', and debts with 'D' for identification
    let {usernam} = req.params;
    let {password: passGot} = req.body;

    console.log(Object.entries(req.body));

    if(passwords[`${usernam}`] == passGot) {
        let curvar = people[`${usernam}`].vars;
        for (let [key, value] of Object.entries(req.body)){
        
            if(key[0] === 'A')
            {
                curvar.assetList[`${(key).substring(1)}`][0] = parseInt(value) ;
            }
            else if (key[0] === 'D')
            {
                curvar.debtList[`${(key).substring(1)}`][0] = parseInt(value) ;
            }
        }

        people[`${usernam}`].vars = curvar;
        res.render('user', people[`${usernam}`]);  

    }else {
        res.render('unauthentic');
    }
        
    
})

// data below

const passwords = {jake:999, lisa:1234};

const people = {
     
    "jake": {
        vars: {
            username: "jake",
            totalAssets: 10000, 
            assetList: {cash: [3000, uuid()], equity: [5000, uuid()], gold: [10000, uuid()]},
            totalDebt: 20000,
            debtList: {homeLoan:[18000, uuid()], homeExp: [2000, uuid()]}
        }
    },
    "lisa": {
        vars: {
            username: "lisa",
            totalAssets: 5000, 
            assetList: {cash: [300, uuid()], equity: [500, uuid()], gold: [4200, uuid()]},
            totalDebt: 0,
            debtList: {}
        }
    }
};
