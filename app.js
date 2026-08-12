const quests = [
  {id:'window-sounds',title:'Open a window and name five sounds you usually ignore.',icon:'👂',category:'Notice',minutes:5,places:['home'],energies:['low'],xp:10,description:'Stand still for a moment and let the background become the main event.',twist:'Bonus: find the quietest sound of all.'},
  {id:'tiny-reset',title:'Reset one tiny corner — and stop when the timer ends.',icon:'✨',category:'Reset',minutes:5,places:['home'],energies:['medium'],xp:12,description:'Pick a drawer, shelf, or patch of desk. Tiny is the point.',twist:'Before you finish, remove exactly one thing you do not need.'},
  {id:'music-stretch',title:'Stretch through one favorite song without checking your phone.',icon:'🎧',category:'Reset',minutes:5,places:['home','any'],energies:['low'],xp:10,description:'Let one song be your entire workout. Slow counts.',twist:'Choose a song you have not played this month.'},
  {id:'speed-sketch',title:'Make a five-minute sketch of the nearest interesting object.',icon:'✏️',category:'Create',minutes:5,places:['home','any'],energies:['medium'],xp:12,description:'No erasing and no judging. The timer decides when it is done.',twist:'Use your non-dominant hand for the last 30 seconds.'},
  {id:'micro-build',title:'Build the smallest useful thing you can from what is nearby.',icon:'🛠️',category:'Create',minutes:5,places:['home'],energies:['high'],xp:15,description:'A cable holder, paper stand, tiny organizer — useful beats impressive.',twist:'Give your invention an unnecessarily dramatic name.'},
  {id:'sky-details',title:'Step outside and find three details in the sky.',icon:'☁️',category:'Notice',minutes:5,places:['outside'],energies:['low'],xp:10,description:'Color, movement, clouds, light, birds — notice what is actually there.',twist:'Describe one detail without using a color word.'},
  {id:'photo-hunt',title:'Photograph one ordinary thing as if it belongs in a museum.',icon:'📸',category:'Explore',minutes:5,places:['outside','any'],energies:['medium'],xp:12,description:'Change your angle, move closer, and make the familiar look strange.',twist:'Do not photograph a person.'},
  {id:'hello-human',title:'Give one person a genuine, specific compliment.',icon:'💌',category:'Connect',minutes:5,places:['outside','any'],energies:['high'],xp:15,description:'Specific beats generic: notice an action, choice, effort, or detail.',twist:'Say it and move on — no need to explain.'},
  {id:'three-gratitudes',title:'Write three very specific things that made today easier.',icon:'🌱',category:'Reflect',minutes:5,places:['home','any'],energies:['low'],xp:10,description:'Skip big life statements. Look for tiny, concrete moments.',twist:'Make one of them something you normally complain about.'},
  {id:'tiny-brave',title:'Do one small thing you have been postponing because it feels awkward.',icon:'⚡',category:'Brave',minutes:5,places:['any'],energies:['high'],xp:15,description:'Send the message, ask the question, make the call, start the first step.',twist:'Count down 5–4–3–2–1 and begin before your brain negotiates.'},

  {id:'tea-silence',title:'Make a drink and spend fifteen minutes with no screen.',icon:'🍵',category:'Reset',minutes:15,places:['home'],energies:['low'],xp:18,description:'Drink slowly. Let boredom show up if it wants to.',twist:'Notice the temperature change from first sip to last.'},
  {id:'desk-makeover',title:'Give your desk a fifteen-minute makeover.',icon:'🪴',category:'Reset',minutes:15,places:['home'],energies:['medium'],xp:22,description:'Clear, arrange, and add one detail that makes the space nicer to return to.',twist:'Leave one deliberately empty area.'},
  {id:'snack-experiment',title:'Invent a snack combination you have never tried before.',icon:'🥪',category:'Create',minutes:15,places:['home'],energies:['high'],xp:25,description:'Use what you already have. Safe and edible is the only rule.',twist:'Give it a menu name and a ridiculous one-line description.'},
  {id:'memory-postcard',title:'Write a postcard-sized note to your future self.',icon:'✍️',category:'Reflect',minutes:15,places:['home','any'],energies:['low','medium'],xp:20,description:'Capture what today feels like, not what you think it should mean.',twist:'End with one question for future you.'},
  {id:'three-song-world',title:'Build a three-song soundtrack for this exact moment.',icon:'🎶',category:'Create',minutes:15,places:['home','any'],energies:['medium'],xp:22,description:'Pick an opening scene, a middle, and an ending-credit song.',twist:'One song must come from a genre you rarely choose.'},
  {id:'kind-note',title:'Leave a small kind note where someone will unexpectedly find it.',icon:'💛',category:'Connect',minutes:15,places:['home','any'],energies:['high'],xp:25,description:'Keep it warm, specific, and pressure-free.',twist:'Do it anonymously if that makes it more fun.'},
  {id:'slow-loop',title:'Take a slow fifteen-minute walk with no destination.',icon:'🚶',category:'Explore',minutes:15,places:['outside'],energies:['low'],xp:18,description:'Choose turns based on curiosity rather than efficiency.',twist:'At every intersection, notice one thing above eye level.'},
  {id:'different-route',title:'Walk a route you normally ignore and find one place worth revisiting.',icon:'🧭',category:'Explore',minutes:15,places:['outside'],energies:['medium'],xp:22,description:'Stay in safe, public areas and let one unfamiliar turn be enough.',twist:'Return using a different street if practical.'},
  {id:'color-hunt',title:'Go on a color hunt: find ten objects in one chosen color.',icon:'🎨',category:'Notice',minutes:15,places:['outside','any'],energies:['medium'],xp:22,description:'Pick the color before you start, then let it guide your attention.',twist:'Your final object must be smaller than your thumb.'},
  {id:'social-spark',title:'Start one tiny conversation you normally would not start.',icon:'🗣️',category:'Connect',minutes:15,places:['outside'],energies:['high'],xp:25,description:'A cashier, neighbor, classmate, colleague — one friendly question is enough.',twist:'Ask something that cannot be answered with only yes or no.'},

  {id:'photo-story',title:'Create a five-photo story about your home without photographing a face.',icon:'📷',category:'Create',minutes:30,places:['home'],energies:['low','medium'],xp:32,description:'Beginning, middle, end — use objects, light, and spaces to tell the story.',twist:'Make the final image echo something from the first.'},
  {id:'recipe-remix',title:'Make a simple meal or snack using one ingredient in a new way.',icon:'🍳',category:'Create',minutes:30,places:['home'],energies:['high'],xp:40,description:'Keep it safe and simple; experimentation is the quest.',twist:'Write down the version you would make next time.'},
  {id:'digital-sweep',title:'Do a focused thirty-minute digital cleanup.',icon:'🧹',category:'Reset',minutes:30,places:['home','any'],energies:['low'],xp:30,description:'Downloads, screenshots, tabs, or files — choose one zone only.',twist:'Create one folder named “Actually useful”.'},
  {id:'future-map',title:'Draw a messy map of one thing you want to make happen this month.',icon:'🗺️',category:'Reflect',minutes:30,places:['home','any'],energies:['medium'],xp:35,description:'Put the goal in the center and draw people, places, obstacles, and next actions around it.',twist:'Circle the smallest action you can do tomorrow.'},
  {id:'mini-project',title:'Make a tiny project from start to finish in thirty minutes.',icon:'🚀',category:'Create',minutes:30,places:['home','any'],energies:['high'],xp:40,description:'A page, a playlist, a sketch, a script, a repair — finished beats ambitious.',twist:'Publish, send, display, or otherwise “ship” it when time is up.'},
  {id:'bench-observer',title:'Find a safe place outside, sit for a while, and write ten things you notice.',icon:'🌿',category:'Notice',minutes:30,places:['outside'],energies:['low'],xp:30,description:'People, patterns, sounds, movement, weather — become a field researcher for half an hour.',twist:'Include one observation that starts with “I never noticed…”'},
  {id:'neighborhood-map',title:'Explore nearby streets and sketch a memory-map when you return.',icon:'🧭',category:'Explore',minutes:30,places:['outside'],energies:['medium'],xp:35,description:'Walk safely, notice landmarks, then draw the route from memory.',twist:'Mark one place you want to revisit.'},
  {id:'micro-expedition',title:'Take a thirty-minute micro-expedition to somewhere nearby you have never entered.',icon:'🥾',category:'Explore',minutes:30,places:['outside'],energies:['high'],xp:40,description:'A park path, public shop, library corner, or street can count. Keep it safe and legal.',twist:'Bring back one photo, note, or tiny story.'},
  {id:'friend-quest',title:'Invite someone to join you for a short walk or spontaneous mini-plan.',icon:'🤝',category:'Connect',minutes:30,places:['outside','any'],energies:['high'],xp:40,description:'Keep the invitation easy to accept and easy to decline.',twist:'Let the other person choose one part of the route or activity.'},
  {id:'curiosity-dive',title:'Pick one question you genuinely wonder about and investigate it for thirty minutes.',icon:'🔎',category:'Explore',minutes:30,places:['home','any'],energies:['medium'],xp:35,description:'Follow curiosity, take a few notes, and stop when the timer ends.',twist:'Finish by writing the next question your answer created.'}
];

const badges = [
  {id:'first',icon:'🌱',name:'First Step',description:'Complete your first quest.',progress:s=>`${Math.min(s.history.length,1)} / 1`,unlocked:s=>s.history.length>=1},
  {id:'flame',icon:'🔥',name:'Three Day Flame',description:'Complete a quest on 3 consecutive days.',progress:s=>`${Math.min(streak(s.history),3)} / 3 days`,unlocked:s=>streak(s.history)>=3},
  {id:'explorer',icon:'🌍',name:'Explorer',description:'Complete 10 Explore quests.',progress:s=>`${Math.min(categoryCount(s.history,'Explore'),10)} / 10`,unlocked:s=>categoryCount(s.history,'Explore')>=10},
  {id:'creator',icon:'💡',name:'Creator',description:'Complete 10 Create quests.',progress:s=>`${Math.min(categoryCount(s.history,'Create'),10)} / 10`,unlocked:s=>categoryCount(s.history,'Create')>=10},
  {id:'legend',icon:'🏆',name:'Tiny Legend',description:'Complete 50 quests.',progress:s=>`${Math.min(s.history.length,50)} / 50`,unlocked:s=>s.history.length>=50}
];

let current = null;
let currentCompleted = false;
let lastGeneratedId = null;
const $ = id => document.getElementById(id);

function defaultState(){return {version:3,history:[]};}
function loadState(){
  try{
    const raw = JSON.parse(localStorage.tinyQuest || 'null');
    if(!raw || !Array.isArray(raw.history)) return defaultState();
    const history = raw.history.map((item,index)=>{
      const match = quests.find(q=>q.id===item.id || q.title===item.title);
      return {
        id:item.id || match?.id || `legacy-${index}`,
        title:item.title || match?.title || 'Completed quest',
        icon:item.icon || match?.icon || '✦',
        category:item.category || match?.category || 'Adventure',
        minutes:Number(item.minutes || match?.minutes || 5),
        place:item.place || 'any',
        energy:item.energy || 'medium',
        xp:Number(item.xp || match?.xp || 10),
        date:item.date || new Date().toISOString()
      };
    });
    return {version:3,history};
  }catch{return defaultState();}
}
function saveState(s){localStorage.tinyQuest=JSON.stringify(s);}

function preferences(){return {minutes:Number($('time').value),place:$('place').value,energy:$('energy').value};}
function placeMatches(q,place){return place==='any' || q.places.includes(place) || q.places.includes('any');}
function exactPool(pref){return quests.filter(q=>q.minutes===pref.minutes && placeMatches(q,pref.place) && q.energies.includes(pref.energy));}
function rankedPool(pref){
  const scored=quests.map(q=>{
    let score=0;
    if(q.minutes===pref.minutes) score+=6; else if(q.minutes<pref.minutes) score+=3; else score-=Math.ceil((q.minutes-pref.minutes)/5);
    if(placeMatches(q,pref.place)) score+=5; else score-=5;
    if(q.energies.includes(pref.energy)) score+=4;
    return {q,score};
  });
  const best=Math.max(...scored.map(x=>x.score));
  return scored.filter(x=>x.score===best).map(x=>x.q);
}
function localDateKey(date=new Date()){
  const y=date.getFullYear();
  const m=String(date.getMonth()+1).padStart(2,'0');
  const d=String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function hashString(text){
  let h=2166136261;
  for(let i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,16777619);}
  return h>>>0;
}
function chooseQuest(today=false){
  const pref=preferences();
  let pool=exactPool(pref);
  if(!pool.length) pool=rankedPool(pref);
  let q;
  if(today){
    const seed=`${localDateKey()}|${pref.minutes}|${pref.place}|${pref.energy}`;
    q=pool[hashString(seed)%pool.length];
  }else{
    const options=pool.length>1?pool.filter(item=>item.id!==lastGeneratedId):pool;
    q=options[Math.floor(Math.random()*options.length)];
  }
  lastGeneratedId=q.id;
  showQuest(q,pref,today);
}
function showQuest(q,pref,today){
  current={...q,selectedPlace:pref.place,selectedEnergy:pref.energy,isToday:today};
  currentCompleted=false;
  $('card').classList.remove('empty','completed');
  $('card').classList.remove('quest-pop'); void $('card').offsetWidth; $('card').classList.add('quest-pop');
  $('questIcon').textContent=q.icon;
  $('questCategory').textContent=today?`TODAY · ${q.category.toUpperCase()}`:q.category.toUpperCase();
  $('questXp').textContent=`+${q.xp} XP`;
  $('questTitle').textContent=q.title;
  $('questDescription').textContent=q.description;
  $('questMeta').hidden=false;
  const placeLabel=pref.place==='home'?'Home':pref.place==='outside'?'Outside':'Anywhere';
  const energyLabel=pref.energy==='low'?'Low energy':pref.energy==='high'?'High energy':'Medium energy';
  $('questMeta').innerHTML=`<span>⏱ ${q.minutes} min</span><span>⌖ ${placeLabel}</span><span>⚡ ${energyLabel}</span>`;
  $('questTwist').hidden=!q.twist;
  $('questTwist').textContent=q.twist?`🎲 Optional twist: ${q.twist}`:'';
  $('done').disabled=false;
  $('done').textContent='✓ Complete quest';
  $('share').disabled=false;
}

function dateKeys(history){return [...new Set(history.map(x=>localDateKey(new Date(x.date))))].sort().reverse();}
function addDays(key,delta){
  const [y,m,d]=key.split('-').map(Number);
  const date=new Date(y,m-1,d); date.setDate(date.getDate()+delta); return localDateKey(date);
}
function streak(history){
  const keys=dateKeys(history); if(!keys.length)return 0;
  const today=localDateKey(); const yesterday=addDays(today,-1);
  let cursor=keys[0]; if(cursor!==today && cursor!==yesterday)return 0;
  const set=new Set(keys); let count=0;
  while(set.has(cursor)){count++;cursor=addDays(cursor,-1);}
  return count;
}
function categoryCount(history,category){return history.filter(x=>x.category===category).length;}
function totalXP(history){return history.reduce((sum,x)=>sum+Number(x.xp||0),0);}
function unlockedBadges(s){return badges.filter(b=>b.unlocked(s));}

function complete(){
  if(!current || currentCompleted)return;
  const s=loadState();
  const before=new Set(unlockedBadges(s).map(b=>b.id));
  s.history.unshift({
    id:current.id,title:current.title,icon:current.icon,category:current.category,minutes:current.minutes,
    place:current.selectedPlace,energy:current.selectedEnergy,xp:current.xp,date:new Date().toISOString()
  });
  s.history=s.history.slice(0,250);
  saveState(s);
  currentCompleted=true;
  $('done').disabled=true;
  $('done').textContent='✓ Quest completed';
  $('card').classList.add('completed');
  celebrate();
  update();
  const newly=unlockedBadges(s).filter(b=>!before.has(b.id));
  toast(newly.length?`${newly[0].icon} Badge unlocked: ${newly[0].name}!`:`Quest complete · +${current.xp} XP ✦`);
}

function formatWhen(iso){
  const key=localDateKey(new Date(iso));
  const today=localDateKey(); const yesterday=addDays(today,-1);
  if(key===today)return 'Today'; if(key===yesterday)return 'Yesterday';
  return new Date(iso).toLocaleDateString(undefined,{month:'short',day:'numeric'});
}
function escapeHTML(value){return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function update(){
  const s=loadState(); const unlocked=unlockedBadges(s);
  $('completedStat').textContent=s.history.length;
  $('xpStat').textContent=totalXP(s.history);
  $('badgeStat').textContent=unlocked.length;
  $('streakStat').textContent=streak(s.history);
  $('badgeProgress').textContent=`${unlocked.length} / ${badges.length}`;
  $('history').innerHTML=s.history.slice(0,10).map(x=>`
    <li class="history-item">
      <span class="history-icon">${escapeHTML(x.icon)}</span>
      <div class="history-copy"><strong>${escapeHTML(x.title)}</strong><small>${escapeHTML(formatWhen(x.date))} · ${escapeHTML(x.category)} · +${Number(x.xp||0)} XP</small></div>
    </li>`).join('') || '<li class="empty-history">No completed quests yet. Your first one can be tiny.</li>';
  $('badges').innerHTML=badges.map(b=>{
    const open=b.unlocked(s);
    return `<div class="badge ${open?'unlocked':'locked'}"><span class="badge-icon">${open?b.icon:'🔒'}</span><div><strong>${escapeHTML(b.name)}</strong><small>${escapeHTML(b.description)}</small><span class="badge-count">${escapeHTML(b.progress(s))}</span></div></div>`;
  }).join('');
}

function toast(text){
  const e=$('toast'); e.textContent=text; e.classList.remove('show'); void e.offsetWidth; e.classList.add('show');
  clearTimeout(toast.timer); toast.timer=setTimeout(()=>e.classList.remove('show'),2600);
}
function celebrate(){
  const layer=$('celebration'); layer.innerHTML='';
  const symbols=['✦','●','◆','★'];
  for(let i=0;i<28;i++){
    const p=document.createElement('span'); p.className='confetti'; p.textContent=symbols[i%symbols.length];
    p.style.setProperty('--x',`${Math.random()*100}vw`); p.style.setProperty('--drift',`${(Math.random()-.5)*180}px`);
    p.style.setProperty('--delay',`${Math.random()*.18}s`); p.style.setProperty('--spin',`${Math.random()*720-360}deg`);
    layer.appendChild(p);
  }
  setTimeout(()=>layer.replaceChildren(),1700);
}
async function shareCurrent(){
  if(!current)return;
  const text=`Tiny Quest: ${current.title}\n⏱ ${current.minutes} min · +${current.xp} XP\n\nTry one: ${location.href}`;
  try{
    if(navigator.share){await navigator.share({title:'Tiny Quest',text,url:location.href});toast('Quest shared ✦');return;}
    if(navigator.clipboard){await navigator.clipboard.writeText(text);toast('Quest copied to clipboard');return;}
    const area=document.createElement('textarea');area.value=text;document.body.appendChild(area);area.select();document.execCommand('copy');area.remove();toast('Quest copied to clipboard');
  }catch(err){if(err?.name!=='AbortError')toast('Could not share this quest');}
}

$('generate').onclick=()=>chooseQuest(false);
$('today').onclick=()=>chooseQuest(true);
$('done').onclick=complete;
$('share').onclick=shareCurrent;
$('clearTrail').onclick=()=>{
  if(!loadState().history.length)return;
  if(confirm('Clear all Tiny Quest progress, XP, streaks, and badges on this browser?')){
    localStorage.removeItem('tinyQuest'); current=null; currentCompleted=false; update(); toast('Trail cleared');
  }
};

update();
