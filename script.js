const questionBank = {
  easy: [
    {start:"الْحَمْدُ لِلَّهِ رَبِّ", answers:["الْعَالَمِينَ","الرَّحْمَٰنِ","الْمَلِكِ","إِيَّاكَ"], correct:0, source:"QS. Al-Fatihah: 2"},
    {start:"الرَّحْمَٰنِ", answers:["مَالِكِ يَوْمِ الدِّينِ","الرَّحِيمِ","نَعْبُدُ","الْعَالَمِينَ"], correct:1, source:"QS. Al-Fatihah: 3"},
    {start:"مَالِكِ يَوْمِ", answers:["الدِّينِ","الْعَالَمِينَ","الرَّحِيمِ","الْمُسْتَقِيمَ"], correct:0, source:"QS. Al-Fatihah: 4"},
    {start:"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ", answers:["نَسْتَعِينُ","اهْدِنَا","نَسْجُدُ","نَشْكُرُ"], correct:0, source:"QS. Al-Fatihah: 5"},
    {start:"اهْدِنَا الصِّرَاطَ", answers:["الْمُسْتَقِيمَ","الَّذِينَ","الضَّالِّينَ","الْمَغْضُوبِ"], correct:0, source:"QS. Al-Fatihah: 6"},
    {start:"قُلْ هُوَ", answers:["اللَّهُ أَحَدٌ","اللَّهُ الصَّمَدُ","رَبُّ النَّاسِ","أَعُوذُ بِرَبِّ"], correct:0, source:"QS. Al-Ikhlas: 1"},
    {start:"اللَّهُ", answers:["الصَّمَدُ","أَحَدٌ","يَلِدْ","كُفُوًا"], correct:0, source:"QS. Al-Ikhlas: 2"},
    {start:"لَمْ يَلِدْ وَلَمْ", answers:["يُولَدْ","يَكُنْ","يُغْنِ","يَخْشَ"], correct:0, source:"QS. Al-Ikhlas: 3"},
    {start:"وَلَمْ يَكُن لَّهُ", answers:["كُفُوًا أَحَدٌ","الصَّمَدُ","الضَّالِّينَ","رَبِّ الْفَلَقِ"], correct:0, source:"QS. Al-Ikhlas: 4"},
    {start:"قُلْ أَعُوذُ بِرَبِّ", answers:["الْفَلَقِ","النَّاسِ","الْجِنَّةِ","الْعَالَمِينَ"], correct:0, source:"QS. Al-Falaq: 1"}
  ],
  medium: [
    {start:"وَالضُّحَى",answers:["وَاللَّيْلِ إِذَا سَجَى","مَا وَدَّعَكَ رَبُّكَ","وَوَجَدَكَ ضَالًّا","فَأَمَّا الْيَتِيمَ"],correct:0,source:"QS. Ad-Duha: 1–2"},
    {start:"مَا وَدَّعَكَ رَبُّكَ",answers:["وَمَا قَلَىٰ","وَلَلْآخِرَةُ","أَلَمْ يَجِدْكَ","فَأَمَّا السَّائِلَ"],correct:0,source:"QS. Ad-Duha: 3"},
    {start:"أَلَمْ يَجِدْكَ",answers:["يَتِيمًا فَآوَىٰ","ضَالًّا فَهَدَىٰ","عَائِلًا فَأَغْنَىٰ","تَرْضَىٰ"],correct:0,source:"QS. Ad-Duha: 6"},
    {start:"وَوَجَدَكَ ضَالًّا",answers:["فَهَدَىٰ","فَأَغْنَىٰ","فَآوَىٰ","فَذَكِّرْ"],correct:0,source:"QS. Ad-Duha: 7"},
    {start:"فَإِنَّ مَعَ الْعُسْرِ",answers:["يُسْرًا","فَرَاغًا","نَصْرًا","أَجْرًا"],correct:0,source:"QS. Ash-Sharh: 5"},
    {start:"إِنَّ الْإِنسَانَ لَفِي",answers:["خُسْرٍ","نَعِيمٍ","فَوْزٍ","صَبْرٍ"],correct:0,source:"QS. Al-'Asr: 2"},
    {start:"إِلَّا الَّذِينَ آمَنُوا",answers:["وَعَمِلُوا الصَّالِحَاتِ","وَتَوَاصَوْا بِالْحَقِّ","وَتَوَاصَوْا بِالصَّبْرِ","وَالْعَصْرِ"],correct:0,source:"QS. Al-'Asr: 3"},
    {start:"قُلْ أَعُوذُ بِرَبِّ",answers:["النَّاسِ","الْفَلَقِ","الْعَالَمِينَ","الْخَنَّاسِ"],correct:0,source:"QS. An-Nas: 1"},
    {start:"مَلِكِ",answers:["النَّاسِ","الْفَلَقِ","الدِّينِ","الْعَالَمِينَ"],correct:0,source:"QS. An-Nas: 2"},
    {start:"مِن شَرِّ الْوَسْوَاسِ",answers:["الْخَنَّاسِ","الْحَنَفَاءِ","الْفَلَقِ","الْوَاسِعِ"],correct:0,source:"QS. An-Nas: 4"}
  ],
  hard: [
    {start:"وَالتِّينِ وَالزَّيْتُونِ",answers:["وَطُورِ سِينِينَ","وَهَٰذَا الْبَلَدِ الْأَمِينِ","لَقَدْ خَلَقْنَا","ثُمَّ رَدَدْنَاهُ"],correct:0,source:"QS. At-Tin: 1–2"},
    {start:"لَقَدْ خَلَقْنَا الْإِنسَانَ",answers:["فِي أَحْسَنِ تَقْوِيمٍ","فِي كَبَدٍ","فِي خُسْرٍ","فِي سَبِيلِ اللَّهِ"],correct:0,source:"QS. At-Tin: 4"},
    {start:"ثُمَّ رَدَدْنَاهُ",answers:["أَسْفَلَ سَافِلِينَ","أَحْسَنِ تَقْوِيمٍ","أَرْذَلِ الْعُمُرِ","الْبَلَدِ الْأَمِينِ"],correct:0,source:"QS. At-Tin: 5"},
    {start:"إِلَّا الَّذِينَ آمَنُوا",answers:["وَعَمِلُوا الصَّالِحَاتِ","وَتَوَاصَوْا بِالصَّبْرِ","فَلَهُمْ أَجْرٌ","فَمَا يُكَذِّبُكَ"],correct:0,source:"QS. At-Tin: 6"},
    {start:"وَالشَّمْسِ",answers:["وَضُحَاهَا","وَالْقَمَرِ إِذَا تَلَاهَا","وَالنَّهَارِ إِذَا جَلَّاهَا","وَاللَّيْلِ إِذَا يَغْشَاهَا"],correct:0,source:"QS. Ash-Shams: 1"},
    {start:"قَدْ أَفْلَحَ",answers:["مَن زَكَّاهَا","مَن دَسَّاهَا","مَن طَغَىٰ","مَن كَذَّبَ"],correct:0,source:"QS. Ash-Shams: 9"},
    {start:"وَنَفْسٍ وَمَا",answers:["سَوَّاهَا","هَدَاهَا","أَلْهَمَهَا","غَشَّاهَا"],correct:0,source:"QS. Ash-Shams: 7"},
    {start:"وَأَمَّا بِنِعْمَةِ رَبِّكَ",answers:["فَحَدِّثْ","فَلَا تَنْهَرْ","فَارْغَبْ","فَذَكِّرْ"],correct:0,source:"QS. Ad-Duha: 11"},
    {start:"فَإِذَا فَرَغْتَ",answers:["فَانصَبْ","فَارْغَبْ","فَسَبِّحْ","فَكَبِّرْ"],correct:0,source:"QS. Ash-Sharh: 7"},
    {start:"وَإِلَىٰ رَبِّكَ",answers:["فَارْغَبْ","فَانصَبْ","فَكَبِّرْ","فَصَلِّ"],correct:0,source:"QS. Ash-Sharh: 8"}
  ]
};

let level="easy", questions=[], current=0, score=0, correct=0, wrong=0, lives=3, timer=15, interval=null, answered=false, sound=true;

const $ = id => document.getElementById(id);
const screens = {home:$("homeScreen"), game:$("gameScreen"), result:$("resultScreen")};

function show(screen){Object.values(screens).forEach(s=>s.classList.remove("active"));screens[screen].classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5)}
function speak(text){if(!sound||!("speechSynthesis" in window))return; speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text);u.lang="ar-SA";u.rate=.85;speechSynthesis.speak(u)}
function updateLives(){ $("lives").textContent="❤️".repeat(lives)+"🖤".repeat(3-lives); }
function startGame(){
  questions=shuffle(questionBank[level]).slice(0,10); current=0;score=0;correct=0;wrong=0;lives=3;
  show("game"); renderQuestion();
}
function renderQuestion(){
  answered=false; timer=15; $("timerText").textContent=timer;
  const q=questions[current];
  $("questionNumber").textContent=`Soal ${current+1}/${questions.length}`;
  $("scoreText").textContent=`${score} poin`;
  $("progressBar").style.width=`${((current+1)/questions.length)*100}%`;
  updateLives();
  $("ayahText").textContent=q.start;
  $("sourceText").textContent=q.source;
  $("feedback").textContent="";
  $("feedback").className="feedback";
  $("nextBtn").style.display="none";
  const answers=shuffle(q.answers.map((text,i)=>({text,correct:i===q.correct})));
  $("answers").innerHTML="";
  answers.forEach(a=>{
    const btn=document.createElement("button");btn.className="answer";btn.textContent=a.text;
    btn.addEventListener("click",()=>checkAnswer(btn,a.correct,q));
    $("answers").appendChild(btn);
  });
  clearInterval(interval);
  interval=setInterval(()=>{timer--;$("timerText").textContent=timer;if(timer<=0){clearInterval(interval);timeUp(q)}},1000);
}
function checkAnswer(btn,isCorrect,q){
  if(answered)return; answered=true; clearInterval(interval);
  document.querySelectorAll(".answer").forEach(b=>b.disabled=true);
  if(isCorrect){btn.classList.add("correct");score+=10+timer;correct++;$("feedback").textContent=`✓ Benar! +${10+timer} poin`;$("feedback").className="feedback good";speak(q.answers[q.correct]);}
  else{btn.classList.add("wrong");lives--;wrong++;$("feedback").textContent=`✗ Belum tepat. Jawaban: ${q.answers[q.correct]}`;$("feedback").className="feedback bad";document.querySelectorAll(".answer").forEach(b=>{if(b.textContent===q.answers[q.correct])b.classList.add("correct")});}
  updateLives(); $("scoreText").textContent=`${score} poin`; $("nextBtn").style.display="block";
}
function timeUp(q){
  if(answered)return; answered=true;wrong++;lives--;document.querySelectorAll(".answer").forEach(b=>b.disabled=true);
  document.querySelectorAll(".answer").forEach(b=>{if(b.textContent===q.answers[q.correct])b.classList.add("correct")});
  $("feedback").textContent=`⏰ Waktu habis! Jawaban: ${q.answers[q.correct]}`;$("feedback").className="feedback bad";updateLives();$("nextBtn").style.display="block";
}
function nextQuestion(){
  if(!answered)return;
  if(lives<=0 || current>=questions.length-1){finishGame();return}
  current++;renderQuestion();
}
function finishGame(){
  clearInterval(interval);show("result");
  $("finalScore").textContent=score;$("correctCount").textContent=correct;$("wrongCount").textContent=wrong;
  const old=Number(localStorage.getItem("quranHighScore")||0);if(score>old)localStorage.setItem("quranHighScore",score);
  $("bestScore").textContent=Math.max(score,old);
  let title="Tetap semangat! 💚",msg="Setiap jawaban adalah kesempatan untuk belajar.";
  if(score>=100){title="MasyaAllah! 🌟";msg="Keren! Kamu berhasil melewati quiz dengan sangat baik."}
  else if(score>=60){title="Good job! 🌙";msg="Mantap! Tinggal sedikit lagi untuk makin jago."}
  $("resultTitle").textContent=title;$("resultMessage").textContent=msg;
  $("resultEmoji").textContent=score>=100?"🎉":score>=60?"✨":"🌱";
}
document.querySelectorAll(".difficulty-btn").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".difficulty-btn").forEach(b=>b.classList.remove("selected"));btn.classList.add("selected");level=btn.dataset.level}));
$("startBtn").addEventListener("click",startGame);
$("nextBtn").addEventListener("click",nextQuestion);
$("restartBtn").addEventListener("click",startGame);
$("homeBtn").addEventListener("click",()=>show("home"));
$("soundBtn").addEventListener("click",()=>{sound=!sound;$("soundBtn").textContent=sound?"🔊":"🔇"});
