const router = require('express').Router();
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img'),
    filename: (req, file, cb) => {
    cb(null, new Date().getTime()+path.extname(file.originalname)); //file   .originalname
    }
   });
const fileFilter = (req, file, cb)=>{
    //if (file.mimetype.match(/.(jpeg|png|gif)$/))
    if (file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png') {
    cb(null, true);
    } else{
    cb(null, false); // false, ignore other files
    }
}

const uploadImage = multer({
    storage,
    limits: {fileSize: 1000000},
    fileFilter
   })
const globby = require('globby');
const paths = await globby(['**/public/img/*']);

router.get('/upload', (req,res)=>{
 res.send('En upload');
})

router.post('/upload', uploadImage.single('image'), async (req, res) => {
    console.log(req.file);
    res.redirect(303, '/upload');
   });
   


module.exports= router;
