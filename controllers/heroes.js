var Hero = require('../models/heroesModel');

// CRUD - create, read, update, delete

function create (req,res) {

    var newDoc = new Hero(req.body);

    newDoc.save((err, doc) => {
        if(err) {
            return res.send(err);
        }
        res.send(doc);
    });
}

function get (req,res) {
  // get one
  if(req.params.id){
    Hero.findOne({_id : req.params.id}, (err, hero) => {
      if(err) {
        return res.send(err);
      }
      if(!document) {
        return res.send('No one with that id!')
      }
      res.send(hero);
    });
  }
    else {
  // get many
  Hero.find({}, (err, heroes) => {
    if(err) {
        return res.send(err);
    }
    res.send(heroes);
  });
 }
}
module.exports = {
    create : create,
    get : get,

}
