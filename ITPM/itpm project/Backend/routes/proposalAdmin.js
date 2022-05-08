const router= require("express").Router();
let Proposaladmin =require("../models/proposalAdmin");

router.route("/add").post((req,res)=>{
    const age = req.body.age;
    const district = req.body.district;
    const gender = req.body.gender;
    const name =req.body.name;
    const occupation=req.body.occupation;
   
    const newProposaladmin = new Proposaladmin({
        age,
        district,
        gender,
        name,
        occupation,
        
    })
    newProposaladmin.save().then(()=>{
        res.json("Proposaladmin Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Proposaladmin.find().then((Proposaladmin)=>{
        res.json(Proposaladmin)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route('/update/:id').put((req, res, next) => {
    Payment.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log(' updated successfully !')
      }
    })
  })

router.route("/delete/:id").delete(async(req, res)=>{
    let accId=req.params.id;

    await Payment.findByIdAndDelete(accId)
    .then(()=>{
        res.status(200).send({status:" payment deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/get/:id').get((req, res) => {
   Payment.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })  
module.exports=router;
