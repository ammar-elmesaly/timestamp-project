require('dotenv').config();
let express = require('express');
let app = express();
let cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", (req, res) => {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", (req, res) => {
  const date = req.params.date;

  if (formatDate.hasError(date)) {
    res.send({error: "Invalid Date"});
  } else {
    const dateUtc = formatDate.toUtc(date);
    const dateUnix = formatDate.toUnix(date);
    res.send({unix: dateUnix, utc: dateUtc});
  }
});



let listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

const formatDate = {
  toUtc(date) {
    if (this.isUnix(date)) return new Date(Number(date)).toUTCString();
    if (!date) return new Date().toUTCString();
    return new Date(date).toUTCString();
  },
  toUnix(date) {
    if (this.isUnix(date)) return Number(date);
    if (!date) return new Date().getTime();
    return new Date(date).getTime();
  },
  isUnix(date) {
    return Number.isInteger(Number(date));
  },
  hasError(date) {
    return isNaN(new Date(date)) && !this.isUnix(date) && date;
  }
}