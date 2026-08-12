const QUESTS = [
  {id:'window-sounds',title:'Open a window and name five sounds you usually ignore.',icon:'👂',category:'Notice',theme:'reset',minutes:5,places:['home','any'],energies:['low'],xp:10,description:'Stand still and let the background become the main event.',twist:'Find the quietest sound of all.'},
  {id:'tiny-reset',title:'Reset one tiny corner — and stop when the timer ends.',icon:'✨',category:'Reset',theme:'reset',minutes:5,places:['home'],energies:['low','medium'],xp:12,description:'Pick a drawer, shelf, or patch of desk. Tiny is the point.',twist:'Remove exactly one thing you do not need.'},
  {id:'music-stretch',title:'Stretch through one favorite song without checking your phone.',icon:'🎧',category:'Reset',theme:'reset',minutes:5,places:['home','any'],energies:['low'],xp:10,description:'Let one song be your entire workout. Slow counts.',twist:'Choose a song you have not played this month.'},
  {id:'sky-details',title:'Step outside and find three details in the sky.',icon:'☁️',category:'Notice',theme:'explore',minutes:5,places:['outside'],energies:['low'],xp:10,description:'Color, movement, clouds, light, birds — notice what is actually there.',twist:'Describe one detail without using a color word.'},
  {id:'photo-hunt',title:'Photograph one ordinary thing as if it belongs in a museum.',icon:'📸',category:'Explore',theme:'explore',minutes:5,places:['outside','any'],energies:['medium'],xp:12,description:'Change your angle and make the familiar look strange.',twist:'Do not photograph a person.'},
  {id:'tiny-brave',title:'Do one small thing you have been postponing because it feels awkward.',icon:'⚡',category:'Brave',theme:'everyday',minutes:5,places:['any'],energies:['high'],xp:15,description:'Send the message, ask the question, or start the first step.',twist:'Count down 5–4–3–2–1 and begin before you negotiate.'},
  {id:'speed-sketch',title:'Make a five-minute sketch of the nearest interesting object.',icon:'✏️',category:'Create',theme:'everyday',minutes:5,places:['home','any'],energies:['medium'],xp:12,description:'No erasing and no judging. The timer decides when it is done.',twist:'Use your non-dominant hand for the last 30 seconds.'},
  {id:'compliment',title:'Give one person a genuine, specific compliment.',icon:'💌',category:'Connect',theme:'together',minutes:5,places:['outside','any'],energies:['medium','high'],xp:15,description:'Specific beats generic: notice an effort, choice, or detail.',twist:'Say it and move on — no explanation needed.'},
  {id:'family-color',title:'Pick a color and race to find five matching things together.',icon:'🎈',category:'Play',theme:'family',minutes:5,places:['home','outside','any'],energies:['medium','high'],xp:14,description:'First person to find five safe objects wins.',twist:'The smallest object gets a bonus point.'},
  {id:'family-story',title:'Build a ridiculous story one sentence at a time.',icon:'🐉',category:'Create',theme:'family',minutes:5,places:['home','any'],energies:['low','medium'],xp:12,description:'Take turns adding one sentence. No correcting each other.',twist:'A talking vegetable must appear somewhere.'},

  {id:'tea-silence',title:'Make a drink and spend fifteen minutes with no screen.',icon:'🍵',category:'Reset',theme:'reset',minutes:15,places:['home'],energies:['low'],xp:18,description:'Drink slowly. Let boredom show up if it wants to.',twist:'Notice the temperature change from first sip to last.'},
  {id:'desk-makeover',title:'Give your desk a fifteen-minute makeover.',icon:'🪴',category:'Reset',theme:'reset',minutes:15,places:['home'],energies:['medium'],xp:22,description:'Clear, arrange, and add one detail that makes the space nicer.',twist:'Leave one deliberately empty area.'},
  {id:'memory-postcard',title:'Write a postcard-sized note to your future self.',icon:'✍️',category:'Reflect',theme:'reset',minutes:15,places:['home','any'],energies:['low','medium'],xp:20,description:'Capture what today feels like, not what it should mean.',twist:'End with one question for future you.'},
  {id:'slow-loop',title:'Take a slow fifteen-minute walk with no destination.',icon:'🚶',category:'Explore',theme:'explore',minutes:15,places:['outside'],energies:['low'],xp:18,description:'Choose turns based on curiosity rather than efficiency.',twist:'At every intersection, notice one thing above eye level.'},
  {id:'different-route',title:'Walk a route you normally ignore and find one place worth revisiting.',icon:'🧭',category:'Explore',theme:'explore',minutes:15,places:['outside'],energies:['medium'],xp:22,description:'Stay in safe public areas and let one unfamiliar turn be enough.',twist:'Return using a different street if practical.'},
  {id:'color-hunt',title:'Go on a color hunt: find ten objects in one chosen color.',icon:'🎨',category:'Notice',theme:'explore',minutes:15,places:['outside','any'],energies:['medium'],xp:22,description:'Pick the color before you start and let it guide your attention.',twist:'Your final object must be smaller than your thumb.'},
  {id:'three-song-world',title:'Build a three-song soundtrack for this exact moment.',icon:'🎶',category:'Create',theme:'everyday',minutes:15,places:['home','any'],energies:['medium'],xp:22,description:'Pick an opening scene, a middle, and an ending-credit song.',twist:'One song must come from a genre you rarely choose.'},
  {id:'snack-experiment',title:'Invent a snack combination you have never tried before.',icon:'🥪',category:'Create',theme:'everyday',minutes:15,places:['home'],energies:['high'],xp:25,description:'Use what you already have. Safe and edible is the only rule.',twist:'Give it a dramatic menu name.'},
  {id:'question-swap',title:'Ask someone one question you have never asked them before.',icon:'💬',category:'Connect',theme:'together',minutes:15,places:['home','outside','any'],energies:['low','medium'],xp:22,description:'Make it curious, warm, and easy to answer.',twist:'You answer the same question too.'},
  {id:'walk-talk',title:'Take a fifteen-minute walk with someone and keep phones away.',icon:'🤝',category:'Connect',theme:'together',minutes:15,places:['outside'],energies:['medium'],xp:25,description:'The walk matters more than the destination.',twist:'Each person chooses one turn.'},
  {id:'kind-note',title:'Leave a small kind note where someone will unexpectedly find it.',icon:'💛',category:'Connect',theme:'together',minutes:15,places:['home','any'],energies:['medium','high'],xp:25,description:'Keep it warm, specific, and pressure-free.',twist:'Do it anonymously if that makes it more fun.'},
  {id:'family-treasure',title:'Create a tiny five-clue treasure hunt for someone at home.',icon:'🗝️',category:'Play',theme:'family',minutes:15,places:['home'],energies:['medium','high'],xp:25,description:'The treasure can be a snack, drawing, sticker, or joke.',twist:'Make one clue rhyme.'},
  {id:'family-dance',title:'Build a three-song family dance break.',icon:'🕺',category:'Play',theme:'family',minutes:15,places:['home','any'],energies:['high'],xp:24,description:'Everyone gets to choose one move.',twist:'Freeze whenever the music pauses.'},
  {id:'family-memory',title:'Ask each person for one favorite memory and draw a tiny symbol for it.',icon:'🖍️',category:'Reflect',theme:'family',minutes:15,places:['home','any'],energies:['low'],xp:20,description:'The drawings can be terrible. The stories are the point.',twist:'Put all the symbols on one shared page.'},

  {id:'digital-sweep',title:'Do a focused thirty-minute digital cleanup.',icon:'🧹',category:'Reset',theme:'reset',minutes:30,places:['home','any'],energies:['low'],xp:30,description:'Downloads, screenshots, tabs, or files — choose one zone only.',twist:'Create one folder named “Actually useful”.'},
  {id:'future-map',title:'Draw a messy map of one thing you want to make happen this month.',icon:'🗺️',category:'Reflect',theme:'reset',minutes:30,places:['home','any'],energies:['medium'],xp:35,description:'Put the goal in the center and map people, obstacles, and next actions.',twist:'Circle the smallest action you can do tomorrow.'},
  {id:'bench-observer',title:'Find a safe place outside and write ten things you notice.',icon:'🌿',category:'Notice',theme:'explore',minutes:30,places:['outside'],energies:['low'],xp:30,description:'Become a field researcher for half an hour.',twist:'Include one observation that starts with “I never noticed…”'},
  {id:'neighborhood-map',title:'Explore nearby streets and sketch a memory-map when you return.',icon:'🧭',category:'Explore',theme:'explore',minutes:30,places:['outside'],energies:['medium'],xp:35,description:'Walk safely, notice landmarks, then draw the route from memory.',twist:'Mark one place you want to revisit.'},
  {id:'micro-expedition',title:'Take a thirty-minute micro-expedition somewhere nearby you have never entered.',icon:'🥾',category:'Explore',theme:'explore',minutes:30,places:['outside'],energies:['high'],xp:40,description:'A park path, public shop, library corner, or street can count.',twist:'Bring back one photo, note, or tiny story.'},
  {id:'mini-project',title:'Make a tiny project from start to finish in thirty minutes.',icon:'🚀',category:'Create',theme:'everyday',minutes:30,places:['home','any'],energies:['high'],xp:40,description:'A page, playlist, sketch, script, repair — finished beats ambitious.',twist:'Ship it when time is up.'},
  {id:'curiosity-dive',title:'Pick one question you genuinely wonder about and investigate it.',icon:'🔎',category:'Explore',theme:'everyday',minutes:30,places:['home','any'],energies:['medium'],xp:35,description:'Follow curiosity, take a few notes, and stop when the timer ends.',twist:'Finish with the next question your answer created.'},
  {id:'friend-quest',title:'Invite someone into a spontaneous thirty-minute mini-plan.',icon:'🤝',category:'Connect',theme:'together',minutes:30,places:['outside','any'],energies:['high'],xp:40,description:'Keep the invitation easy to accept and easy to decline.',twist:'Let the other person choose half the plan.'},
  {id:'story-exchange',title:'Trade one story from your past with someone and ask follow-up questions.',icon:'📖',category:'Connect',theme:'together',minutes:30,places:['home','outside','any'],energies:['low','medium'],xp:35,description:'Choose a memory the other person probably has not heard.',twist:'Each person picks one detail they want to remember.'},
  {id:'family-build',title:'Build the tallest free-standing structure you can from safe household objects.',icon:'🏗️',category:'Play',theme:'family',minutes:30,places:['home'],energies:['high'],xp:38,description:'Books, cups, blocks, paper — use safe items and protect breakables.',twist:'Take a victory photo before taking it down.'},
  {id:'family-walk-map',title:'Take a family walk and let a different person choose each turn.',icon:'👣',category:'Explore',theme:'family',minutes:30,places:['outside'],energies:['medium'],xp:35,description:'Stay in safe familiar areas while letting the route surprise you.',twist:'Name your route when you get home.'}
];

const THEME_META = {
  everyday:{label:'Everyday',icon:'✦',categories:null},
  reset:{label:'Reset',icon:'🌿',categories:['Reset','Reflect','Notice']},
  explore:{label:'Explore',icon:'🧭',categories:['Explore','Notice']},
  together:{label:'Together',icon:'🤝',categories:['Connect']},
  family:{label:'Family',icon:'🎈',categories:['Play','Reflect','Explore','Create']}
};

const BADGE_DEFS = [
  {id:'first',icon:'🌱',name:'First Step',description:'Complete your first quest.'},
  {id:'flame',icon:'🔥',name:'Three Day Flame',description:'Reach a 3-day streak.'},
  {id:'explorer',icon:'🌍',name:'Explorer',description:'Complete 10 Explore quests.'},
  {id:'creator',icon:'💡',name:'Creator',description:'Complete 10 Create quests.'},
  {id:'card',icon:'🎴',name:'Card Crafter',description:'Create your first share card.'},
  {id:'giver',icon:'👥',name:'Quest Giver',description:'Send your first friend challenge.'},
  {id:'smart',icon:'🧠',name:'Context Wizard',description:'Use Smart Quest Lab 5 times.'},
  {id:'variety',icon:'🎨',name:'Many Worlds',description:'Complete quests in 4 different themes.'},
  {id:'legend',icon:'🏆',name:'Tiny Legend',description:'Complete 50 quests.'}
];

const SKINS = {
  sunrise:{label:'Sunrise',accent:'#ff6b35',accent2:'#8b5cf6',paper:'#f7f2e9'},
  forest:{label:'Forest',accent:'#2f855a',accent2:'#84cc16',paper:'#eef4ea'},
  night:{label:'Night',accent:'#a78bfa',accent2:'#38bdf8',paper:'#111827'},
  candy:{label:'Candy',accent:'#ec4899',accent2:'#8b5cf6',paper:'#fff1f6'}
};
