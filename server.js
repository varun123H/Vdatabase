const express = require('express');
const app = express();
const port = 7000;
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/song",{useNewUrlParser: true , useUnifiedTopology: true})
.then(()=> console.log('Db connected ....'))
.catch((err) => console.log(err));
const van = mongoose.Schema;
const playlist = new van ({
     
    songname : {
        type : String
    },
    songtype:{
        type : String
    }


});
const genre = new van({

    genres : String

});

const music = new mongoose.model("music",playlist);
const gen = new mongoose.model("gen",genre);

const myPlaylist = async () => {
    try {
        const haledil = new music({
            songname : "Hale dil",
            songtype: "Love" 
        });
        const smokeweed = new music({
            songname : "Smoke weed everyday",
            songtype: "English" 
        });
        const game = new music({
            songname :"Game siddu moossewala", 
            songtype: "punjabi"
        });
         
        const genre1 = new gen({

            genres : "RAP"
        
        });

        const genre2 = new gen({

            genres : "POP"
        });


        const info = await music.insertMany([haledil,smokeweed,game]);
        const imp = await gen.insertMany([genre1,genre2]);
        console.log(info);
        console.log(imp);
    } catch (error) {
        console.log(error);
    }
};

myPlaylist();







app.listen(port, () => console.log('Server started on',7000) );

