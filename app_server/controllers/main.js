// GET homePage
const homePage = function (req,res){
    res.status(200);
    res.render('Home.ejs');
}
//GET coreCommiteePage
const coreCommiteePage = function(req,res){
    res.status(200);
    res.render('CoreCommittee.ejs');
}
//GET membersPage
const membersPage = function(req,res){
    res.status(200);
    res.render('Members.ejs');
}
//GET contactUsPage
const contactUsPage = function(req,res){
    res.status(200);
    res.render('index.jade',{title:"This is contact us page"});
}
//GET joinAsMember
const joinAsMember = function(req,res){
    res.status(200);
    res.render('index.jade',{title:"This is join membership page"});
}
//GET Events Page
const eventsPage = function(req,res){
    res.status(200);
    res.render('index.jade',{title:"This is Events Page"});
}
//GET studentCorner
const studentCornerPage = function(req,res){
    res.status(200);
    res.render('index.jade',{title:"This is participant corner"});
}

//Exporting all the functions
module.exports = {
    homePage,
    coreCommiteePage,
    membersPage,
    contactUsPage,
    joinAsMember,
    eventsPage,
    studentCornerPage
};