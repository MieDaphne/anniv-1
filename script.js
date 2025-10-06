// 🌸 Navigation buttons
function our_memories() { window.location.href = "memories.html"; }
function reason() { window.location.href = "reasons.html"; }
function quiz_time() { window.location.href = "quiz.html"; }
function goHome() { window.location.href = "index.html"; }

// 🌸 Utility: months difference
function getMonthsDifference(startDate, endDate) {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let totalMonths = years * 12 + months;
  if (endDate.getDate() < startDate.getDate()) totalMonths--;
  return totalMonths;
}

// 🌸 Countdown + monthsary update
function updateMonthsaryAndCountdown() {
  const start = new Date(2023, 9, 7);
  const now = new Date();

  // Monthsary label
  let monthsPassed = Math.max(0, getMonthsDifference(start, now));
  if (monthsPassed > 24) monthsPassed = 24;

  const letterEl = document.getElementById("monthsary-letter");
  if (letterEl)
    letterEl.textContent = `Monthsary Letters 💌 (Month ${monthsPassed})`;

  // Countdown to next Oct 7
  let nextAnniversaryYear = now.getFullYear();
  const anniversaryThisYear = new Date(nextAnniversaryYear, 9, 7);
  if (now > anniversaryThisYear) nextAnniversaryYear++;
  const nextAnniversary = new Date(nextAnniversaryYear, 9, 7);

  const diff = nextAnniversary - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const countdownEl = document.getElementById("countdown");
  if (countdownEl)
    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s 💞`;
}

function getOrdinalSuffix(n) {
  if (n === 0) return "th";
  const j = n % 10, k = n % 100;
  if (j === 1 && k !== 11) return "st";
  if (j === 2 && k !== 12) return "nd";
  if (j === 3 && k !== 13) return "rd";
  return "th";
}

// 🌸 Generate 24 Monthsary Letters
function generateMonthsaryLetters() {
  const start = new Date(2023, 9, 7);
  const lettersList = [];
  const letters = [
    "Happy 1st Monthsary, my love! 💕 It feels so magical to call you mine. These past weeks have been filled with smiles, laughter, and moments I’ll cherish forever. I can’t wait to make more memories with you.",
    "Happy 2nd Monthsary! 🥰 Two months of laughter, love, and endless talks. You make my days brighter and my heart fuller. Thank you for loving me the way you do.",
    "Happy 3rd Monthsary! 🌸 Every day with you feels like a new adventure. You’ve become my favorite person to talk to, laugh with, and dream beside. I’m so thankful for you.",
    "Happy 4th Monthsary! 💞 Four months of love, care, and connection that feels deeper than ever. You’ve become my safe place, my peace, and my greatest blessing.",
    "Happy 5th Monthsary! 🌻 I never imagined love could feel this warm and comforting. Thank you for staying, understanding, and loving me through everything.",
    "Happy 6th Monthsary! 💖 Half a year with you already! Time truly flies when I’m with someone so special. You’ve changed my life in the best way possible.",
    "Happy 7th Monthsary! 🥺💗 Seven months of pure love, little surprises, and growing together. You’ve taught me patience, trust, and what it truly means to be loved.",
    "Happy 8th Monthsary! 💐 Eight months of holding on, understanding each other, and choosing love every single day. You make my heart smile.",
    "Happy 9th Monthsary! 💫 We’ve come so far, and every moment with you still feels new. Thank you for your constant love, care, and effort. You’re my everything.",
    "Happy 10th Monthsary! 💝 Ten months of laughter, challenges, and growing stronger together. You’ve shown me what true love and partnership mean.",
    "Happy 11th Monthsary! 🌙 I’m so proud of how far we’ve come. Through every high and low, you’ve been my light. I’m so lucky to have you.",
    "Happy 12th Monthsary — One whole year! 🥳❤️ Our first anniversary! I can’t believe how fast time flew. Every single day with you has been worth it.",
    "Happy 13th Monthsary! 💞 Even after a year, my heart still races whenever I think of you. Thank you for making love feel new every day.",
    "Happy 14th Monthsary! 🌷 Fourteen months of pure magic with you. You make even the ordinary moments feel extraordinary.",
    "Happy 15th Monthsary! 💗 Fifteen months of love that keeps growing stronger. Thank you for being my constant — my person through it all.",
    "Happy 16th Monthsary! 💕 I’m grateful for every smile, every hug, and every conversation we’ve shared. You mean the world to me.",
    "Happy 17th Monthsary! 💫 You’ve become more than just my love — you’re my home, my peace, and my best friend. I love you endlessly.",
    "Happy 18th Monthsary! 💐 A year and a half of love, care, and togetherness. Thank you for being my partner in everything — you make life beautiful.",
    "Happy 19th Monthsary! 💞 You’re still the one I look forward to seeing every day. Our love feels stronger, deeper, and more real than ever.",
    "Happy 20th Monthsary! 🌸 Twenty months with you feels like a dream I never want to end. You’ve made my life brighter in every way.",
    "Happy 21st Monthsary! 💖 I’m forever grateful that I get to love and be loved by you. You make my world complete.",
    "Happy 22nd Monthsary! 🌹 Twenty-two months of love, laughter, and beautiful memories. You’ve made me the happiest person alive.",
    "Happy 23rd Monthsary! 💞 Almost two years together, and my heart still beats fast for you. You’re my forever favorite, my always, my love.",
    "Happy 24th Monthsary! 🥂 Two whole years, my love! Through every challenge and joy, you’ve been my strength. Here’s to more laughter, love, and a forever with you. 💍"
  ];

  for (let m = 1; m <= 24; m++) {
    const letterDate = new Date(start.getFullYear(), start.getMonth() + m, 7);
    const month = letterDate.toLocaleString("default", { month: "long" });
    const year = letterDate.getFullYear();
    lettersList.push({
      monthNumber: m,
      dateStr: `${month} 7, ${year}`,
      content: letters[m - 1]
    });
  }
  return lettersList;
}

// 🌸 Modal controls
const modal = document.getElementById("monthsary-modal");
const modalCloseBtn = document.getElementById("modal-close");
const monthsaryLetterEl = document.getElementById("monthsary-letter");
const monthsaryList = document.getElementById("monthsary-list");

function populateModal() {
  const letters = generateMonthsaryLetters();
  monthsaryList.innerHTML = "";
  letters.forEach((l) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${l.dateStr}</strong><br>${l.content}`;
    monthsaryList.appendChild(li);
  });
}

function openModal() {
  populateModal();
  modal.style.display = "block";
  modal.classList.add("fade-in");
  modal.setAttribute("aria-hidden", "false");
  modalCloseBtn.focus();
}

function closeModal() {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
    modal.setAttribute("aria-hidden", "true");
    monthsaryLetterEl.focus();
  }, 200);
}

// 🌸 Events
monthsaryLetterEl.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// 🌸 Start everything
window.onload = () => {
  updateMonthsaryAndCountdown();
  setInterval(updateMonthsaryAndCountdown, 1000);
};
