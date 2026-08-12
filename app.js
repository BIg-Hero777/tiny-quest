const quests = [
  ['Notice three beautiful details around you.','📸','Notice'],
  ['Take a different route on your next walk.','🧭','Explore'],
  ['Clean one tiny corner and stop.','✨','Reset'],
  ['Write six lines to future yourself.','✍️','Reflect'],
  ['Find five sounds you usually ignore.','👂','Notice'],
  ['Send someone a specific compliment.','💌','Connect'],
  ['Create a three-song soundtrack for now.','🎧','Create'],
  ['Make a tiny thing with your hands.','🛠️','Create'],
  ['Try one harmless thing differently.','🔀','Play'],
  ['Do one small brave action.','⚡','Brave']
];

let current = null;
const $ = id => document.getElementById(id);

function state(){
  return JSON.parse(localStorage.tinyQuest || '{"history":[],"badges":[]}');
}
function saveState(s){localStorage.tinyQuest = JSON.stringify(s);}
function pick(today=false){
  const index = today ? new Date().getDate()%quests.length : Math.floor(Math.random()*quests.length);
  current = quests[index];
  $('card').classList.remove('empty');
  $('questIcon').textContent=current[1];
  $('questCategory').textContent=current[2].toUpperCase();
  $('questTitle').textContent=current[0];
  $('questDescription').textContent='Complete this tiny adventure. No pressure, just begin.';
  $('questMeta').hidden=false;
  $('questMeta').innerHTML='<span>+10 XP</span>';
  $('questTwist').hidden=true;
  $('done').disabled=false;
  $('share').disabled=false;
}
function complete(){
 if(!current)return;
 const s=state();
 s.history.unshift({title:current[0],icon:current[1],date:new Date().toISOString()});
 s.history=s.history.slice(0,10);
 s.badges=[...new Set(s.history.length>=1?['first']:[])];
 saveState(s);
 update();
 toast('Quest complete ✦');
}
function update(){
 const s=state();
 $('completedStat').textContent=s.history.length;
 $('badgeStat').textContent=s.badges.length;
 $('streakStat').textContent=s.history.length?1:0;
 $('badgeProgress').textContent=`${s.badges.length} / 5`;
 $('history').innerHTML=s.history.map(x=>`<li class="history-item"><span>${x.icon}</span><strong>${x.title}</strong></li>`).join('')||'<li>No completed quests yet.</li>';
 $('badges').innerHTML='<div class="badge">🌱 First Step<br><small>Complete your first quest</small></div>';
}
function toast(t){
 const e=$('toast');e.textContent=t;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),2000);
}
$('generate').onclick=()=>pick();
$('today').onclick=()=>pick(true);
$('done').onclick=complete;
$('share').onclick=()=>navigator.share?navigator.share({title:'Tiny Quest',text:current?.[0]}):navigator.clipboard.writeText(current?.[0]||'');
$('clearTrail').onclick=()=>{localStorage.removeItem('tinyQuest');update();};
update();
