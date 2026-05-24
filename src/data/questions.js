// ─── CORRECT URL CHECKING ─────────────────────────────────────────────────────
// Single choice. correctAnswer = index of correct option.
export const correctUrlQuestions = [
  {
    id: 1,
    question: "Which URL looks like the correct Instagram login page?",
    options: [
      "https://instagram.example/login",
      "https://insta-login-free.xyz",
      "https://instagram.example.verify-login.xyz",
      "https://lnstagram.example/login",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Which URL looks like the correct Google account page?",
    options: [
      "https://google.example/account",
      "https://google-security-check.xyz",
      "https://accounts-google.example-login.com",
      "https://gooogle.example/account",
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "Which URL looks like the correct Amazon shopping page?",
    options: [
      "https://amazon.example",
      "https://amaz0n.example",
      "https://amazon.example.best-deals.xyz",
      "https://amazon-prize-claim.xyz",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "Which URL looks like the correct school portal page?",
    options: [
      "https://schoolportal.example/student",
      "https://schoolportal-login-free.xyz",
      "https://schoolportal.example.reset-now.xyz",
      "https://schoo1portal.example/student",
    ],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "Which URL looks like the correct delivery tracking page?",
    options: [
      "https://delivery.example/track",
      "https://delivery-track-fast.xyz",
      "https://delivery.example.package-fee.xyz",
      "https://deliverry.example/track",
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "Which URL looks like the correct WhatsApp web page?",
    options: [
      "https://whatsapp.example/web",
      "https://whatsapp-free-gifts.xyz",
      "https://web-whatsapp-login.example.xyz",
      "https://whatssapp.example/web",
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "Which URL looks like the correct bank login page?",
    options: [
      "https://mybank.example/login",
      "https://mybank-login-urgent.xyz",
      "https://mybank.example.verify-user.xyz",
      "https://mybannk.example/login",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "Which URL looks like the correct UPI help page?",
    options: [
      "https://upihelp.example/support",
      "https://upihelp-cashback.xyz",
      "https://upihelp.example.refund-now.xyz",
      "https://upihe1p.example/support",
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "Which URL looks like the correct scholarship page?",
    options: [
      "https://scholarship.example/apply",
      "https://scholarship-free-money.xyz",
      "https://scholarship.example.claim-prize.xyz",
      "https://sch0larship.example/apply",
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "Which URL looks like the correct online class page?",
    options: [
      "https://onlineclass.example/join",
      "https://onlineclass-join-now.xyz",
      "https://onlineclass.example.free-pass.xyz",
      "https://onIineclass.example/join",
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "Which URL looks like the correct movie booking page?",
    options: [
      "https://moviebook.example/tickets",
      "https://moviebook-free-movies.xyz",
      "https://moviebook.example.win-ticket.xyz",
      "https://movlebook.example/tickets",
    ],
    correctAnswer: 0,
  },
  {
    id: 12,
    question: "Which URL looks like the correct email inbox page?",
    options: [
      "https://mailbox.example/inbox",
      "https://mailbox-password-check.xyz",
      "https://mailbox.example.security-alert.xyz",
      "https://mai1box.example/inbox",
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "Which URL looks like the correct game account page?",
    options: [
      "https://gamezone.example/account",
      "https://gamezone-free-coins.xyz",
      "https://gamezone.example.claim-skins.xyz",
      "https://gamez0ne.example/account",
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: "Which URL looks like the correct exam results page?",
    options: [
      "https://examresults.example/view",
      "https://examresults-check-fast.xyz",
      "https://examresults.example.unlock-marks.xyz",
      "https://examresu1ts.example/view",
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: "Which URL looks like the correct cloud storage page?",
    options: [
      "https://cloudstore.example/files",
      "https://cloudstore-login-reward.xyz",
      "https://cloudstore.example.verify-files.xyz",
      "https://cl0udstore.example/files",
    ],
    correctAnswer: 0,
  },
];

// ─── EMOTION DETECTOR ─────────────────────────────────────────────────────────
// Multiple select. correctAnswers = array of indices.
// Options are always: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"]
export const emotionDetectorQuestions = [
  {
    id: 1,
    message: "Your Instagram account will be deleted in 10 minutes. Verify now to stop it.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [0, 1],
  },
  {
    id: 2,
    message: "Congratulations! You won a free phone. Claim before midnight.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [1, 3],
  },
  {
    id: 3,
    message: "This is your school admin. Open this link to check your new marks.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [2, 4],
  },
  {
    id: 4,
    message: "Your bank account is blocked. Update details immediately.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [0, 1, 2],
  },
  {
    id: 5,
    message: "Someone posted your photo online. Click here to see it.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [0, 4],
  },
  {
    id: 6,
    message: "Limited offer! Get ₹5000 cashback today only.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [1, 3],
  },
  {
    id: 7,
    message: "Your parcel is waiting. Pay a small fee now or it will be returned.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [0, 1, 2],
  },
  {
    id: 8,
    message: "Your friend tagged you in a secret video. Watch it now.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [2, 4],
  },
  {
    id: 9,
    message: "You are selected for a special student scholarship. Apply in the next 30 minutes.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [1, 3],
  },
  {
    id: 10,
    message: "Security team alert: suspicious login found. Check now.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [0, 1, 2],
  },
  {
    id: 11,
    message: "Free movie download link leaked. Open before it is removed.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [1, 3, 4],
  },
  {
    id: 12,
    message: "Your UPI reward is ready. Claim your cash now.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [1, 2, 3],
  },
  {
    id: 13,
    message: "Your exam hall ticket has an error. Fix it today.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [0, 1],
  },
  {
    id: 14,
    message: "Your teacher shared a private note about you. Tap to read.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [2, 4],
  },
  {
    id: 15,
    message: "Last chance to win premium game skins for free.",
    options: ["Fear", "Urgency", "Trust", "Greed", "Curiosity"],
    correctAnswers: [1, 3],
  },
];

// ─── RED FLAG HUNT ─────────────────────────────────────────────────────────────
// Multiple select. correctAnswers = array of indices.
export const redFlagHuntQuestions = [
  {
    id: 1,
    message:
      "Dear user, your bank account will close today. Login at https://mybank-verify.xyz now.",
    options: [
      "Urgent wording",
      "Suspicious URL",
      "Generic greeting",
      "Safe/official instruction",
      "Unknown sender",
    ],
    correctAnswers: [0, 1, 2, 4],
  },
  {
    id: 2,
    message: "Hi! You won a free iPhone. Pay ₹99 delivery charge first to claim.",
    options: [
      "Payment first",
      "Too good to be true",
      "Urgent wording",
      "Safe/official instruction",
      "Unknown sender",
    ],
    correctAnswers: [0, 1, 4],
  },
  {
    id: 3,
    message:
      "School Portal: Your timetable is available. Please check it only on the official school website.",
    options: [
      "Suspicious URL",
      "OTP/password asking",
      "Safe/official instruction",
      "Payment first",
      "Too good to be true",
    ],
    correctAnswers: [2],
  },
  {
    id: 4,
    message: "Your parcel is stuck. Install DeliveryFast.apk to release it.",
    options: [
      "Unknown app/APK install request",
      "Urgent wording",
      "Suspicious URL",
      "Payment first",
      "Safe/official instruction",
    ],
    correctAnswers: [0, 1],
  },
  {
    id: 5,
    message: "WhatsApp Support: Send your OTP to confirm your number.",
    options: [
      "OTP/password asking",
      "Trust",
      "Safe/official instruction",
      "Unknown sender",
      "Suspicious URL",
    ],
    correctAnswers: [0, 3],
  },
  {
    id: 6,
    message:
      "Bro don't tell anyone. I found a secret link for free Netflix: https://netflix-free-watch.xyz",
    options: [
      "Asking to keep it secret",
      "Suspicious URL",
      "Too good to be true",
      "Safe/official instruction",
      "Grammar/spelling mistakes",
    ],
    correctAnswers: [0, 1, 2],
  },
  {
    id: 7,
    message:
      "Dear student, your scholarship is approved. Pay processing fee now to receive ₹25,000.",
    options: [
      "Payment first",
      "Too good to be true",
      "Generic greeting",
      "Urgent wording",
      "Safe/official instruction",
    ],
    correctAnswers: [0, 1, 2],
  },
  {
    id: 8,
    message:
      "Amazon Gift: Claim your reward at https://amazon.example.claim-prize.xyz before 6 PM.",
    options: [
      "Suspicious URL",
      "Urgent wording",
      "Too good to be true",
      "OTP/password asking",
      "Safe/official instruction",
    ],
    correctAnswers: [0, 1, 2],
  },
  {
    id: 9,
    message: "Your exam result is blocked. Send your school password to unlock it.",
    options: [
      "OTP/password asking",
      "Fear",
      "Safe/official instruction",
      "Unknown sender",
      "Payment first",
    ],
    correctAnswers: [0, 1, 3],
  },
  {
    id: 10,
    message:
      "Hi, I am from Google team. Your photos are leaked. Click https://google-photo-check.xyz immediately.",
    options: [
      "Suspicious URL",
      "Urgent wording",
      "Fear",
      "Unknown sender",
      "Safe/official instruction",
    ],
    correctAnswers: [0, 1, 2, 3],
  },
  {
    id: 11,
    message:
      "Reminder: Never share your OTP with anyone, even if they say they are from support.",
    options: [
      "OTP/password asking",
      "Safe/official instruction",
      "Urgent wording",
      "Suspicious URL",
      "Too good to be true",
    ],
    correctAnswers: [1],
  },
  {
    id: 12,
    message:
      "Your UPI account is suspnded. Verfy now at https://upi-fix-fast.xyz",
    options: [
      "Grammar/spelling mistakes",
      "Suspicious URL",
      "Urgent wording",
      "Fear",
      "Safe/official instruction",
    ],
    correctAnswers: [0, 1, 2, 3],
  },
  {
    id: 13,
    message:
      "A famous actor wants to give students free laptops. Fill this form today.",
    options: [
      "Too good to be true",
      "Urgent wording",
      "Unknown sender",
      "Payment first",
      "Safe/official instruction",
    ],
    correctAnswers: [0, 1, 2],
  },
  {
    id: 14,
    message:
      "Class group notice: Tomorrow's homework is posted on the teacher's official classroom page.",
    options: [
      "Safe/official instruction",
      "Suspicious URL",
      "OTP/password asking",
      "Payment first",
      "Unknown app/APK install request",
    ],
    correctAnswers: [0],
  },
  {
    id: 15,
    message:
      "Install this marks booster app and keep it secret from teachers. It can increase your score.",
    options: [
      "Unknown app/APK install request",
      "Asking to keep it secret",
      "Too good to be true",
      "Grammar/spelling mistakes",
      "Safe/official instruction",
    ],
    correctAnswers: [0, 1, 2],
  },
];
