const router = require("express").Router();
let Birth = require("../models/Birth.model");

router.route("/").get((req, res) => {
    Birth.find()
        .then((Birth) => res.json(Birth))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const BCID = req.body.BCID;
    const Name = req.body.Name;
    const MName = req.body.MName;
    const FName = req.body.FName;
    const POB = req.body.POB;
    const Bday = Date.parse(req.body.Bday);
    const Citizen = req.body.Citizen;
   
  

    const newBirth = new Birth({
        BCID,
        Name,
        MName,
        Bday,
        FName,
        POB,
        Citizen
      
      
    });

    newBirth
        .save()
        .then(() => res.json("Birth Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Birth.findById(req.params.id)
        .then((Birth) => res.json(Birth))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Birth.findById(req.params.id)
        .then((Birth) => {
            Birth.BCID = req.body.BCID;
            Birth.Name = req.body.Name;
            Birth.MName = req.body.MName;
            Birth.FName = req.body.FName;
            Birth.POB = req.body.POB;
            Birth.Bday = Date.parse(req.body.Bday);
            Birth.Citizen = req.body.Citizen;
           
           

            Birth.save()
                .then(() => res.json("Birth updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Birth.findByIdAndDelete(req.params.id)
        .then(() => res.json("Birth deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;