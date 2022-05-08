const router= require("express").Router();
let Proposal =require("../models/Proposal");

router.route("/addproposal").post((req,res)=>{
    const age = req.body.age;
    const district = req.body.district;
    const gender = req.body.gender;
   
    const newProposal = new Proposal({
        age,
        district,
        gender,
        
    })
    newProposal.save().then(()=>{
        res.json("Proposal Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Proposal.find().then((proposal)=>{
        res.json(proposal)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route('/update/:id').put((req, res, next) => {
  Proposal.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Payment updated successfully !')
      }
    })
  })

router.route("/delete/:id").delete(async(req, res)=>{
    let accId=req.params.id;

    await Proposal.findByIdAndDelete(accId)
    .then(()=>{
        res.status(200).send({status:" payment deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/get/:id').get((req, res) => {
  Proposal.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })  
module.exports=router;
