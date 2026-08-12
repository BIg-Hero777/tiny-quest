const quests=[
['Take a slow drink of water and notice the taste.','home','low',5],
['Find one object nearby and imagine its story.','home','medium',5],
['Write three things you appreciate today.','any','low',5],
['Open a window and listen for one minute.','home','low',5],
['Walk outside and photograph something interesting.','outside','medium',15],
['Take a different route for your next walk.','outside','medium',15],
['Say hello to someone you normally pass by.','outside','high',15],
['Make a tiny drawing without judging it.','any','medium',15],
['Clean one small corner like a game challenge.','home','medium',15],
['Look at the sky and describe three details.','outside','low',5],
['Create a playlist for your next mood.','any','medium',15],
['Try a new snack or recipe idea.','home','high',30],
['Write a postcard to your future self.','any','medium',30],
['Explore a street you never noticed.','outside','high',30],
['Make a five-minute desk makeover.','home','medium',5],
['Learn one surprising fact today.','any','low',5],
['Draw a map of your neighborhood.','outside','medium',30],
['Give someone a genuine compliment.','any','high',5],
['Organize ten digital files.','home','low',15],
['Have a silent tea moment.','home','low',15],
['Find a hidden color around you.','any','medium',5],
['Write a tiny poem.','any','medium',15],
['Stretch while listening to music.','home','low',5],
['Leave a kind note for someone.','any','high',15]
];
let current='';
const $=id=>document.getElementById(id);
function pick(seed=false){
let t=+$('time').value,p=$('place').value,e=$('energy').value;
let pool=quests.filter(q=>q[3]===t&&(p==='any'||q[1]===p)&&(e===q[2]||e==='medium'));
if(!pool.length) pool=quests.filter(q=>Math.abs(q[3]-t)<=10&&(p==='any'||q[1]===p));
if(seed){let n=new Date().getDate(); pool=[pool[n%pool.length]]}
let q=pool[Math.floor(Math.random()*pool.length)]; current=q[0]; $('card').textContent='✦ '+current;
}
function save(){let h=JSON.parse(localStorage.trail||'[]');h.unshift(current);localStorage.trail=JSON.stringify(h.slice(0,5));render();}
function render(){let h=JSON.parse(localStorage.trail||'[]');$('history').innerHTML=h.map(x=>`<li>${x}</li>`).join('')||'<li>No quests yet.</li>'}
$('generate').onclick=()=>pick();$('today').onclick=()=>pick(true);$('done').onclick=()=>current&&save();
$('share').onclick=()=>navigator.share?navigator.share({title:'Tiny Quest',text:current}):navigator.clipboard.writeText(current);
render();
