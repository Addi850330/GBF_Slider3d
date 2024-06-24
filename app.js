// --------cursor set-------
let cursor = document.getElementById("myCursor");
let circle = document.getElementById("circlepoint");

window.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x - 27 + "px";
  cursor.style.top = y - 27 + "px";
  circle.style.left = x - 17 + "px";
  circle.style.top = y - 17 + "px";
});
// -----------pop tag set-------------

const weaponinfo = [
  {
    name: "絶対否定の剣",
    subname: "Sword of Repudiation",
    srclv1: "images/lv1/l1.webp",
    srclv2: "images/lv2/l1.webp",
    srclv3: "images/l1.webp",
    infojp:
      "「終末」を目論み世界の破滅を望んだ孤高の研究者は、叡智の果てに畏怖たる産物を創造した。玲瓏な光芒に彩られた刹那の剣閃は、森羅万象を否定し、誉れ高き天佑を授ける。",
    infoch:
      "以「終末」为目标，希望毁灭世界的孤高研究者，在智慧的尽头创造出了令人畏惧的产物。被玲珑的光芒点缀的瞬间剑闪，否定万物，赐予了使用者荣耀和天佑。",
  },
  {
    name: "永遠拒絶の剣",
    subname: "Sword of Renunciation",
    srclv1: "images/lv1/l2.webp",
    srclv2: "images/lv2/l2.webp",
    srclv3: "images/l2.webp",
    infojp:
      "力は破滅、意志は怨憎、祈りは凶禍の表裏なり。天寵授かりし光耀にて頻闇は霞の彼方へ絶え、理を拒絶する無の極みに、永劫の大義をその身に課す。",
    infoch:
      "力量带来毁灭，意志滋生怨恨，祈愿有吉凶。天赐的光辉驱逐了远方的黑暗，拒绝理性追求极致的虚无中，将永恒的大义强加于自身。",
  },
  {
    name: "絶対否定の槍",
    subname: "Spear of Repudiation",
    srclv1: "images/lv1/l3.webp",
    srclv2: "images/lv2/l3.webp",
    srclv3: "images/l3.webp",
    infojp:
      "「終末」を目論み世界の破滅を望んだ孤高の研究者は、叡智の果てに畏怖たる産物を創造した。渾天を震わせ羅刹を穿つ旋嵐の一閃は、森羅万象を否定し、牢乎たる武勇を授ける。",
    infoch:
      "以「終末」为目标，希望毁灭世界的孤高研究者，在智慧的尽头创造出了令人畏惧的产物。震动天空贯穿罗刹的旋风一闪，否定万物，赐予了使用者坚不可摧的勇武。",
  },
  {
    name: "永遠拒絶の槍",
    subname: "Spear of Renunciation",
    srclv1: "images/lv1/l4.webp",
    srclv2: "images/lv2/l4.webp",
    srclv3: "images/l4.webp",
    infojp:
      "力は破滅、意志は怨憎、祈りは凶禍の表裏なり。空翔ける凄風は生命の息吹に凪を齎し、理を拒絶する無の極みに、不撓の矜持を胸に刻む。",
    infoch:
      "力量带来毁灭，意志滋生怨恨，祈愿有吉凶。翱翔于天空的强风为生命之息带来平静，拒绝理性追求极致的虚无中，铭刻着不屈的自尊。",
  },
  {
    name: "絶対否定の大鎌",
    subname: "Scythe of Repudiation",
    srclv1: "images/lv1/l5.webp",
    srclv2: "images/lv2/l5.webp",
    srclv3: "images/l5.webp",
    infojp:
      "「終末」を目論み世界の破滅を望んだ孤高の研究者は、叡智の果てに畏怖たる産物を創造した。灼滅の業火をも刈り取る雄渾な大刃は、森羅万象を否定し、堂々たる剛毅を授ける。",
    infoch:
      "以「終末」为目标，希望毁灭世界的孤高研究者，在智慧的尽头创造出了令人畏惧的产物。能够割断熊熊业火的雄浑大刃，否定万物，赋予了使用者坚毅之气。",
  },
  {
    name: "永遠拒絶の大鎌",
    subname: "Scythe of Renunciation",
    srclv1: "images/lv1/l6.webp",
    srclv2: "images/lv2/l6.webp",
    srclv3: "images/l6.webp",
    infojp:
      "力は破滅、意志は怨憎、祈りは凶禍の表裏なり。紅蓮の猛焔は数多の血肉と大気を焼き尽くし、理を拒絶する無の極みに、滾る激情を心奥に燈す。",
    infoch:
      "力量带来毁灭，意志滋生怨恨，祈愿有吉凶。红莲烈焰焚尽无数血肉和空气，拒绝理性追求极致的虚无中，激情在内心深处燃起。",
  },
  {
    name: "絶対否定の杖",
    subname: "Staff of Repudiation",
    srclv1: "images/lv1/l7.webp",
    srclv2: "images/lv2/l7.webp",
    srclv3: "images/l7.webp",
    infojp:
      "「終末」を目論み世界の破滅を望んだ孤高の研究者は、叡智の果てに畏怖たる産物を創造した。永遠の殷盛を夢想する連綿たる祈りは、森羅万象を否定し、高邁な才気を授ける。",
    infoch:
      "以「終末」为目标，希望毁灭世界的孤高研究者，在智慧的尽头创造出了令人畏惧的产物。梦想着永恒的繁荣不断的祈祷，否定万物，赋予了使用者高尚才智。",
  },
  {
    name: "永遠拒絶の杖",
    subname: "Staff of Renunciation",
    srclv1: "images/lv1/l8.webp",
    srclv2: "images/lv2/l8.webp",
    srclv3: "images/l8.webp",
    infojp:
      "力は破滅、意志は怨憎、祈りは凶禍の表裏なり。廉潔なる誓願は清けき慈悲を以て罪業を掻き消し、理を拒絶する無の極みに、高遠な浄福に導く。",
    infoch:
      "力量带来毁灭，意志滋生怨恨，祈愿有吉凶。廉洁的誓言以慈悲之心消除罪孽，拒绝理性追求极致的虚无中，通向高远纯净的福地。",
  },
  {
    name: "絶対否定の竪琴",
    subname: "Harp of Repudiation",
    srclv1: "images/lv1/l9.webp",
    srclv2: "images/lv2/l9.webp",
    srclv3: "images/l9.webp",
    infojp:
      "「終末」を目論み世界の破滅を望んだ孤高の研究者は、叡智の果てに畏怖たる産物を創造した。悠久の楽土を冀う壮麗な調べは、森羅万象を否定し、黎明の意志を授ける。",
    infoch:
      "以「終末」为目标，希望毁灭世界的孤高研究者，在智慧的尽头创造出了令人畏惧的产物。渴望永恒的乐土的壮丽旋律，否定万物，赋予了使用者黎明的意志。",
  },
  {
    name: "永遠拒絶の竪琴",
    subname: "Harp of Renunciation",
    srclv1: "images/lv1/l10.webp",
    srclv2: "images/lv2/l10.webp",
    srclv3: "images/l10.webp",
    infojp:
      "力は破滅、意志は怨憎、祈りは凶禍の表裏なり。秩序なき旋律は無涯の孤高へと誘い、理を拒絶する無の極みに、凛然たる深智を宿す。",
    infoch:
      "力量带来毁灭，意志滋生怨恨，祈愿有吉凶。没有秩序的旋律引领着我们走向无尽的孤独，拒绝理性追求极致的虚无中，蕴含着坚定而深刻的智慧。",
  },
  {
    name: "絶対否定の太刀",
    subname: "Katana of Repudiation",
    srclv1: "images/lv1/l11.webp",
    srclv2: "images/lv2/l11.webp",
    srclv3: "images/l11.webp",
    infojp:
      "「終末」を目論み世界の破滅を望んだ孤高の研究者は、叡智の果てに畏怖たる産物を創造した。底なき深潭の闇を映し出す幽冥の一太刀は、森羅万象を否定し、終古の信念を授ける。",
    infoch:
      "以「終末」为目标，希望毁灭世界的孤高研究者，在智慧的尽头创造出了令人畏惧的产物。映出无底深渊黑暗的幽冥一刀，否定万物，赋予了使用者永恒的信念。",
  },
  {
    name: "永远拒绝之太刀",
    subname: "Katana of Renunciation",
    srclv1: "images/lv1/l12.webp",
    srclv2: "images/lv2/l12.webp",
    srclv3: "images/l12.webp",
    infojp:
      "力は破滅、意志は怨憎、祈りは凶禍の表裏なり。常闇を統べし絶厭の刃は貪婪な邪心をも呑み込み、理を拒絶する無の極みに、万死を招く狂乱を呼び醒ます。",
    infoch:
      "力量带来毁灭，意志滋生怨恨，祈愿有吉凶。统治永暗的憎恶之刃也吞噬着贪婪的邪念，拒绝理性追求极致的虚无中，唤醒了导致万死狂乱的力量。",
  },
];
const item = document.querySelectorAll(".item");
const popimg1 = document.querySelector(".popimgl1");
const popimg2 = document.querySelector(".popimgl2");
const popimg3 = document.querySelector(".popimgl3");

const poptitle = document.querySelector(".poptitle");
const popsubtitle = document.querySelector(".popsubtitle");
const popinfo = document.querySelector(".popinfo");
const popinfoch = document.querySelector(".popinfoch");

item.forEach((pro) => {
  pro.addEventListener("click", (e) => {
    // console.log(e.target.value);
    let imgnumber = e.target.alt;
    // console.log(weaponinfo[imgnumber].name);

    popimg1.src = weaponinfo[imgnumber].srclv1;
    popimg2.src = weaponinfo[imgnumber].srclv2;
    popimg3.src = weaponinfo[imgnumber].srclv3;

    poptitle.innerHTML = weaponinfo[imgnumber].name;
    popsubtitle.innerHTML = weaponinfo[imgnumber].subname;
    popinfo.innerHTML = weaponinfo[imgnumber].infojp;
    popinfoch.innerHTML = weaponinfo[imgnumber].infoch;

    popbg.classList.toggle("popbgclose");
    popclose.classList.toggle("closebtnhide");
    popimg.classList.toggle("popimghide");
    poptext.classList.toggle("poptexthide");
  });
});

// -----------pop EVOLUTION set-------------
const evbtn = document.querySelector(".evbtn");
const weaponstate = document.querySelector(".weaponstate");
const limitstar = document.querySelector("#limitstar");
evbtn.addEventListener("click", () => {
  if (!popimg1.classList.contains("imghide")) {
    popimg1.classList.add("imghide");
    popimg2.classList.remove("imghide");
    weaponstate.innerHTML = "LIMIT BREAK";
  } else if (!popimg2.classList.contains("imghide")) {
    popimg2.classList.add("imghide");
    popimg3.classList.remove("imghide");
    weaponstate.innerHTML = "LIMIT MAX";
    limitstar.classList.remove("limithide");
  } else if (!popimg3.classList.contains("imghide")) {
    popimg3.classList.add("imghide");
    popimg1.classList.remove("imghide");
    weaponstate.innerHTML = "INITIAL STATUS";
    limitstar.classList.add("limithide");
  }
});
// -----------pop translate set-------------
const translate = document.querySelector(".translate");
translate.addEventListener("click", () => {
  if (translate.classList.contains("ch")) {
    translate.classList.remove("ch");
    translate.classList.add("jp");
    translate.innerHTML = "日文翻譯";
    popinfo.classList.add("popinfohide");
    popinfoch.classList.remove("popinfohide");
  } else {
    translate.classList.remove("jp");
    translate.classList.add("ch");
    translate.innerHTML = "中文翻譯";
    popinfoch.classList.add("popinfohide");
    popinfo.classList.remove("popinfohide");
  }
});

// ------pop close set------------
const popclose = document.querySelector(".closebtn");
const popbg = document.querySelector(".popbg");
const popimg = document.querySelector(".popimg");
const poptext = document.querySelector(".poptext");
popclose.addEventListener("click", (event) => {
  popbg.classList.toggle("popbgclose");
  popclose.classList.toggle("closebtnhide");
  popimg.classList.toggle("popimghide");
  poptext.classList.toggle("poptexthide");

  popimg1.classList.remove("imghide");
  popimg2.classList.add("imghide");
  popimg3.classList.add("imghide");

  popimg1.src = "";
  popimg2.src = "";
  popimg3.src = "";

  poptitle.innerHTML = "";
  popsubtitle.innerHTML = "";
  popinfo.innerHTML = "";
  popinfoch.innerHTML = "";
});

// ----------------title set--------------------
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
const text = document.querySelector(".herotitle");

window.addEventListener("load", (event) => {
  let iteration = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    text.innerText = text.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return text.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= text.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
});
// ----------------title set end--------------------
