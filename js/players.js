//https://imgur.com/gallery/lego-star-wars-complete-saga-portraits-qH3ToL8//

const players = [
  {
    funFact: "Obi-Wan Kenobi is a Light Side Jedi Master who trained Anakin and fought him before he turned to Darth Vader.",
    photo: "https://i.imgur.com/HP5n4nY.png"
  },
  {
    funFact: "Anakin Skywalker is a Dark Side Sith Lord formerly a Jedi, destined to become Darth Vader.",
    photo: "https://i.imgur.com/5v4vHtY.png"
  },
  {
    funFact: "Padmé Amidala is a Light Side senator and former queen fighting for peace.",
    photo: "https://i.imgur.com/X1lt9K7.png"
  },
  {
    funFact: "Yoda is a wise Light Side Jedi Master and leader of the Jedi Council.",
    photo: "https://i.imgur.com/x05YKfD.png"
  },
  {
    funFact: "Darth Vader is a Dark Side Sith Lord and enforcer of the Emperor’s will.",
    photo: "https://i.imgur.com/HdxF2Lv.png"
  },
  {
    funFact: "Mace Windu is a powerful Light Side Jedi Master known for his purple lightsaber.",
    photo: "https://i.imgur.com/qxfTyZL.png"
  },
  {
    funFact: "Count Dooku is a Dark Side Sith Lord and former Jedi who leads the Separatists.",
    photo: "https://i.imgur.com/jUSN3wA.png"
  },
  {
    funFact: "Qui-Gon Jinn was a Light Side Jedi who discovered Anakin on Tatooine.",
    photo: "https://i.imgur.com/1Ep9CgK.png"
  },
  {
    funFact: "Palpatine is a Dark Side Sith Lord and manipulative Emperor of the galaxy.",
    photo: "https://i.imgur.com/N6Ov5tV.png"
  },
  {
    funFact: "Leia Organa is a Light Side Rebel leader, princess, and sister to Luke Skywalker.",
    photo: "https://i.imgur.com/2aYME1P.png"
  },
  {
    funFact: "Han Solo is a Light Side Rebel pilot who helped defeat the Empire.",
    photo: "https://i.imgur.com/3DTu7DZ.png"
  },
  {
    funFact: "Chewbacca is a loyal Light Side Wookiee warrior and Han Solo’s co-pilot.",
    photo: "https://i.imgur.com/QrYq0JX.png"
  },
  {
    funFact: "Lando Calrissian is a Light Side Rebel and skilled gambler turned hero.",
    photo: "https://i.imgur.com/L1eYNcb.png"
  },
  {
    funFact: "Boba Fett is a neutral bounty hunter known for his Mandalorian armor.",
    photo: "https://i.imgur.com/4jXYQz3.png"
  },
  {
    funFact: "Jango Fett is a neutral bounty hunter and template for the clone army.",
    photo: "https://i.imgur.com/rnLUI5X.png"
  },
  {
    funFact: "Darth Maul is a Dark Side Sith apprentice with a double-bladed lightsaber.",
    photo: "https://i.imgur.com/EEc5BDU.png"
  },
  {
    funFact: "C-3PO is a protocol droid fluent in over six million forms of communication.",
    photo: "https://i.imgur.com/yf1X96K.png"
  },
  {
    funFact: "R2-D2 is a resourceful astromech droid who often saves the heroes.",
    photo: "https://i.imgur.com/yP6R18e.png"
  },
  {
    funFact: "Jar Jar Binks is a clumsy but well-meaning Gungan ally to the Jedi.",
    photo: "https://i.imgur.com/1UImH4U.png"
  },
  {
    funFact: "General Grievous is a Dark Side cyborg leading Separatist droid armies.",
    photo: "https://i.imgur.com/XYOHknk.png"
  },
  {
    funFact: "Nute Gunray is a Dark Side Separatist Viceroy who opposes the Republic.",
    photo: "https://i.imgur.com/9cLrkN0.png"
  },
  {
    funFact: "Captain Rex is a loyal Light Side clone trooper leader under the Jedi.",
    photo: "https://i.imgur.com/91dVt7U.png"
  },
  {
    funFact: "Wicket W. Warrick is a Light Side Ewok who helps the Rebel Alliance.",
    photo: "https://i.imgur.com/7q4cJ4k.png"
  },
  {
    funFact: "Sebulba is a skilled podracer from Tatooine, known for cheating.",
    photo: "https://i.imgur.com/Z3jApxO.png"
  },
  {
    funFact: "Boss Nass is the leader of the Gungans and an ally to the Republic.",
    photo: "https://i.imgur.com/rk0rMSk.png"
  },
  {
    funFact: "Greedo is a neutral bounty hunter who confronts Han Solo in Mos Eisley.",
    photo: "https://i.imgur.com/VdGV2Qw.png"
  },
  {
    funFact: "Jabba the Hutt is a neutral crime lord controlling much of the Outer Rim.",
    photo: "https://i.imgur.com/b3NLTI7.png"
  },
  {
    funFact: "Biggs Darklighter is a Light Side Rebel pilot and friend of Luke Skywalker.",
    photo: "https://i.imgur.com/pIjDmjA.png"
  },
  {
    funFact: "Wilhuff Tarkin is a Dark Side Imperial officer commanding the Death Star.",
    photo: "https://i.imgur.com/6J9pPrJ.png"
  },
  {
    funFact: "Mon Mothma is a Light Side Rebel leader who organizes the Rebellion.",
    photo: "https://i.imgur.com/I48PXLh.png"
  },
  {
    funFact: "Bib Fortuna is a neutral Twi’lek and Jabba the Hutt’s majordomo.",
    photo: "https://i.imgur.com/3zOe0U7.png"
  },
  {
    funFact: "Admiral Ackbar is a Light Side Rebel admiral famous for ‘It’s a trap!’",
    photo: "https://i.imgur.com/j24ZrPh.png"
  },
  {
    funFact: "Ki-Adi-Mundi is a Light Side Jedi Master with a unique cone-shaped head.",
    photo: "https://i.imgur.com/DU9WeOK.png"
  },
  {
    funFact: "Plo Koon is a Light Side Jedi Master known for his wisdom and piloting skills.",
    photo: "https://i.imgur.com/gplJqOG.png"
  },
  {
    funFact: "Shaak Ti is a Light Side Jedi Master who fought in the Clone Wars.",
    photo: "https://i.imgur.com/6r4IBRU.png"
  },
  {
    funFact: "Zam Wesell is a neutral bounty hunter and skilled shapeshifter.",
    photo: "https://i.imgur.com/50oKrmB.png"
  },
  {
    funFact: "Cody is a Light Side clone trooper commander loyal to the Jedi Order.",
    photo: "https://i.imgur.com/49Lm7Ac.png"
  },
  {
    funFact: "General Veers is a Dark Side Imperial officer leading ground forces.",
    photo: "https://i.imgur.com/46ymJ5k.png"
  },
  {
    funFact: "Dengar is a neutral bounty hunter known for his scars and skills.",
    photo: "https://i.imgur.com/0mW3xwF.png"
  },
  {
    funFact: "IG-88 is a neutral assassin droid and feared bounty hunter.",
    photo: "https://i.imgur.com/R4pyKeD.png"
  },
  {
    funFact: "Bossk is a neutral Trandoshan bounty hunter with reptilian traits.",
    photo: "https://i.imgur.com/rsvv55v.png"
  },
  {
    funFact: "Aurra Sing is a neutral bounty hunter with a distinctive long-range blaster.",
    photo: "https://i.imgur.com/UjZT0fE.png"
  },
  {
    funFact: "Kit Fisto is a Light Side Jedi Master known for underwater combat skills.",
    photo: "https://i.imgur.com/Y4jct63.png"
  },
  {
    funFact: "Barriss Offee is a Light Side Jedi apprentice and skilled healer.",
    photo: "https://i.imgur.com/A0uEnUC.png"
  },
  {
    funFact: "Luminara Unduli is a Light Side Jedi Master and mentor to Barriss Offee.",
    photo: "https://i.imgur.com/7EZgUIQ.png"
  },
  {
    funFact: "Salacious B. Crumb is a neutral Kowakian monkey-lizard and Jabba’s pet.",
    photo: "https://i.imgur.com/HSJ7NNN.png"
  },
  {
    funFact: "Watto is a neutral junk dealer on Tatooine who owned Anakin’s mother.",
    photo: "https://i.imgur.com/e67eQbp.png"
  },
  {
    funFact: "Dexter Jettster is a neutral diner owner and friend to Obi-Wan Kenobi.",
    photo: "https://i.imgur.com/47klzLW.png"
  }
];
