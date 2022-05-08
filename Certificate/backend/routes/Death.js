const router = require("express").Router();
let Death = require("../models/Death.model");

router.route("/").get((req, res) => {
    Death.find()
        .then((Death) => res.json(Death))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const DID = req.body.DID;
    const Name = req.body.Name;
    const Reason = req.body.Reason;
    const place = req.body.place;
    const age = req.body.age;
    const TOD = req.body.TOD;
   
  

    const newDeath = new Death({
        DID,
        Name,
        Reason,
        place,
        age,
        TOD
      
      
    });

    newDeath
        .save()
        .then(() => res.json("Death Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Death.findById(req.params.id)
        .then((Death) => res.json(Death))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Death.findById(req.params.id)
        .then((Death) => {
            Death.DID = req.body.DID;
            Death.Name = req.body.Name;
            Death.Reason = req.body.Reason;
            Death.place = req.body.place;
            Death.age = req.body.age;
            Death.TOD = req.body.TOD;
           
           

            Death.save()
                .then(() => res.json("Death updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Death.findByIdAndDelete(req.params.id)
        .then(() => res.json("Death deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;