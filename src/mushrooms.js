const mushrooms = `[
    {
      "scientific-name": "Morchella elata", 
      "common-name": "black morel",
      "image": "./images/black-morel.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Amanita rubescens", 
      "common-name": "blusher",
      "image": "./images/blusher.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "", 
      "common-name": "bronze bolete",
      "image": "./images/bronze-bolete.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Amanita caesarea", 
      "common-name": "Caesar's mushroom",
      "image": "./images/caesars.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Ramaria flava", 
      "common-name": "changle",
      "image": "./images/changle.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "several species of agaricomycetous fungi in the genera Cantharellus, Craterellus, Gomphus, and Polyozellus", 
      "common-name": "chanterelle",
      "image": "./images/chanterelle.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Scleroderma citrinum", 
      "common-name": "common earthball",
      "image": "./images/common-earthball.png",
      "edibility": "Toxic",
      "edibility color code": "red"
    },
    {
      "scientific-name": "Amanita phalloides", 
      "common-name": "death cap",
      "image": "./images/death-cap.png",
      "edibility": "Highly toxic. Lethal at small doses.",
      "edibility color code": "red"
    },
    {
      "scientific-name": "Pluteus cervinus", 
      "common-name": "deer shield",
      "image": "./images/deer-shield.png",
      "edibility": "Edible, but considered poor quality",
      "edibility color code": "brown"
    },
    {
      "scientific-name": "Hygrophoropsis aurantiaca", 
      "common-name": "false chanterelle",
      "image": "./images/false-chanterelle.png",
      "edibility": "Variable. said to be edible but reports of hallucinations recorded.",
      "edibility color code": ""
    },
    {
      "scientific-name": "Amanita citrina", 
      "common-name": "false death cap",
      "image": "./images/false-death-cap.png",
      "edibility": "Edible, but not nearly tasty enough to warrant the worry of mistaking it for its notorious cousin.",
      "edibility color code": ""
    },
    {
      "scientific-name": "Fomes fomentarius", 
      "common-name": "false tinder fungus, horse hoof fungus",
      "image": "./images/false-tinder-fungus.png",
      "edibility": "While technically non-toxic, it is far too tough for consumption and is primarily used for tinder.",
      "edibility color code": "brown"
    },
    {
      "scientific-name": "Amanita muscaria", 
      "common-name": "fly agaric",
      "image": "./images/fly-agaric.png",
      "edibility": "Edible, but requires processing to render safe to eat. Toxic and hallucinatory when raw.",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Clavariadelphus pistillaris", 
      "common-name": "giant club fungus",
      "image": "./images/giant-club-fungus.png",
      "edibility": "Edible, but considered poor quality",
      "edibility color code": "brown"
    },
    {
      "scientific-name": "Amanita vaginata", 
      "common-name": "grisette",
      "image": "./images/grisette.png",
      "edibility": "Edible, but must be thoroughly cooked to destroy toxins",
      "edibility color code": "green"
    },
    {
      "scientific-name": "refers to over 30 species in the Armillaria genus", 
      "common-name": "honey fungus",
      "image": "./images/honey-fungus.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Craterellus cornucopioides", 
      "common-name": "horn of plenty, black chanterelle, black trumpet",
      "image": "./images/horn-of-plenty.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Agaricus arvensis", 
      "common-name": "horse mushroom",
      "image": "./images/horse-mushroom.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Entoloma sinuatum. Older scientific names: Entoloma lividum, Rhodophyllus sinuatus.", 
      "common-name": "livid entoloma, livid agaric, lead poisoner",
      "image": "./images/lead-poisoner.png",
      "edibility": "Toxic",
      "edibility color code": "red"
    },
    {
      "scientific-name": "Panus conchatus", 
      "common-name": "lilac oysterling",
      "image": "./images/lilac-oysterling.png",
      "edibility": "Technically edible, but not recommended because the flesh is tough and leathery.",
      "edibility color code": "brown"
    },
    {
      "scientific-name": "Amanita pantherina", 
      "common-name": "panther cap",
      "image": "./images/panther-cap.png",
      "edibility": "Highly toxic",
      "edibility color code": "red"
    },
    {
      "scientific-name": "Pleurotus ostreatus", 
      "common-name": "pearl oyster mushroom",
      "image": "./images/pearl-oyster-mushroom.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Boletus edulis", 
      "common-name": "porcino, penny bun",
      "image": "./images/penny-bun.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Tricholomopsis rutilans", 
      "common-name": "plums and custard",
      "image": "./images/plums-and-custard.png",
      "edibility": "Edible, but poor quality",
      "edibility color code": "brown"
    },
    {
      "scientific-name": "Rubroboletus satanas", 
      "common-name": "satan bolete",
      "image": "./images/satan-bolete.png",
      "edibility": "Toxic",
      "edibility color code": "red"
    },
    {
      "scientific-name": "Coprinus comatus", 
      "common-name": "shaggy inkcap",
      "image": "./images/shaggy-inkcap.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Kuehneromyces mutabilis", 
      "common-name": "sheathed woodtuft",
      "image": "./images/sheathed-woodtuft.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Entoloma clypeatum", 
      "common-name": "shield pinkgill",
      "image": "./images/shield-pinkgill.png",
      "edibility": "Questionable. Variable reports.",
      "edibility color code": ""
    },
    {
      "scientific-name": "Calocybe gambosa", 
      "common-name": "St. George's mushroom",
      "image": "./images/st-georges-mushroom.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Tuber aestivum", 
      "common-name": "summer truffle",
      "image": "./images/summer-truffle.png",
      "edibility": "Edible",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Russula emetica", 
      "common-name": "the sickener",
      "image": "./images/the-sickener.png",
      "edibility": "Toxic",
      "edibility color code": "red"
    },
    {
      "scientific-name": "Morchella americana", 
      "common-name": "white morel",
      "image": "./images/white-morel.png",
      "edibility": "Edible, but must be cooked before consuming.",
      "edibility color code": "green"
    },
    {
      "scientific-name": "Helvella crispa", 
      "common-name": "elfin saddle, white saddle",
      "image": "./images/white-saddle.png",
      "edibility": "Edible, but considered poor quality. Toxic if raw.",
      "edibility color code": "brown"
    }
  ]`

export default mushrooms;