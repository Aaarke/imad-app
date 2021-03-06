var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
'article-one' : {
title:'Article-one | Roshan Kumar',
heading:'Article-one',
date:'Sep 1 ,2017',
content:`<div>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent, the Targaryens were given control of the island of Dragonstone in the Narrow Sea some centuries ago. After the obliteration of Valyria in the Doom, the Targaryens launched a devastating invasion of Westeros using three dragons to spearhead their attack.
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent, the Targaryens were given control of the island of Dragonstone in the Narrow Sea some centuries ago. After the obliteration of Valyria in the Doom, the Targaryens launched a devastating invasion of Westeros using three dragons to spearhead their attack. 
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent, the Targaryens were given control of the island of Dragonstone in the Narrow Sea some centuries ago. After the obliteration of Valyria in the Doom, the Targaryens launched a devastating invasion of Westeros using three dragons to spearhead their attack. 
</p>
<p>
This is the content for my html page.Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent, the Targaryens were given control of the island of Dragonstone in the Narrow Sea some centuries ago. After the obliteration of Valyria in the Doom, the Targaryens launched a devastating invasion of Westeros using three dragons to spearhead their attack.
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent, the Targaryens were given control of the island of Dragonstone in the Narrow Sea some centuries ago. After the obliteration of Valyria in the Doom, the Targaryens launched a devastating invasion of Westeros using three dragons to spearhead their attack. 
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent, the Targaryens were given control of the island of Dragonstone in the Narrow Sea some centuries ago. After the obliteration of Valyria in the Doom, the Targaryens launched a devastating invasion of Westeros using three dragons to spearhead their attack. 
</p>

</div>
`
},
'article-two':{title:'Article-Two | Roshan Kumar',
heading:'Article-two',
date:'Sep 10 ,2017',
content:`<div>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent.
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent,
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent,
</p>
<p>
This is the content for my html page.Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent,
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent,
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent, 
</p>

</div>
`
},
'article-three':{title:'Article-Three | Roshan Kumar',
heading:'Article-Three',
date:'Sep 10 ,2017',
content:`<div>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent.
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent,
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent,
</p>
<p>
This is the content for my html page.Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent,
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent,
</p>
<p>
This is the content for my html page.
Once a noble family of the vast Valyrian Freehold, an empire spanning most of the eastern continent, 
</p>

</div>}`}
};
function creatTemplate(data){
var title= data.title;
var date= data.date;
var heading =data.heading;
var content=data.content;
var htmlTeamplate=`
<html>
<head>
 <link href="/ui/style.css" rel="stylesheet" />
<title>
${title}
</title>
</head>
<body>
<div>
<a href="/">HOME"</a>
</div>
<hr/>
<h3>
${heading}
</h3>
<div>
${date}
</div>
<div>
${content}
</div>
</body>


</html>
`;
return htmlTeamplate;
}
app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
counter=counter+1;
res.send(counter.toString());
});
app.get('/:articleName', function (req, res) {
    articleName=req.params.articleName;
res.send(creatTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/submit-name/:name',function(req,res){
    
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
console.log(`IMAD course app listening on port ${port}!`);
});
