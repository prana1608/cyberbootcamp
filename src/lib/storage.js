// ─── localStorage Helpers ───────────────────────────────────────────────────

const KEYS = {
  NAME: "cd_name",
  CLASS: "cd_class",
  URL_ANSWERS: "cd_url_answers",
  URL_SCORE: "cd_url_score",
  EMOTION_ANSWERS: "cd_emotion_answers",
  EMOTION_SCORE: "cd_emotion_score",
  REDFLAG_ANSWERS: "cd_redflag_answers",
  REDFLAG_SCORE: "cd_redflag_score",
};

export function saveStudent(name, cls) {
  localStorage.setItem(KEYS.NAME, name);
  localStorage.setItem(KEYS.CLASS, cls);
}

export function getStudent() {
  return {
    name: localStorage.getItem(KEYS.NAME) || "",
    cls: localStorage.getItem(KEYS.CLASS) || "",
  };
}

export function resetQuizData() {
  [
    KEYS.URL_ANSWERS, KEYS.URL_SCORE,
    KEYS.EMOTION_ANSWERS, KEYS.EMOTION_SCORE,
    KEYS.REDFLAG_ANSWERS, KEYS.REDFLAG_SCORE,
  ].forEach((k) => localStorage.removeItem(k));
}

export function saveUrlModule(answers, score) {
  localStorage.setItem(KEYS.URL_ANSWERS, JSON.stringify(answers));
  localStorage.setItem(KEYS.URL_SCORE, String(score));
}

export function saveEmotionModule(answers, score) {
  localStorage.setItem(KEYS.EMOTION_ANSWERS, JSON.stringify(answers));
  localStorage.setItem(KEYS.EMOTION_SCORE, String(score));
}

export function saveRedFlagModule(answers, score) {
  localStorage.setItem(KEYS.REDFLAG_ANSWERS, JSON.stringify(answers));
  localStorage.setItem(KEYS.REDFLAG_SCORE, String(score));
}

export function getResults() {
  return {
    urlScore: parseInt(localStorage.getItem(KEYS.URL_SCORE) || "0", 10),
    emotionScore: parseInt(localStorage.getItem(KEYS.EMOTION_SCORE) || "0", 10),
    redFlagScore: parseInt(localStorage.getItem(KEYS.REDFLAG_SCORE) || "0", 10),
  };
}

// ─── Scoring Helpers ─────────────────────────────────────────────────────────

/** Single choice: 1 pt per correct */
export function scoreUrlModule(answers, questions) {
  return questions.reduce((score, q, i) => {
    return score + (answers[i] === q.correctAnswer ? 1 : 0);
  }, 0);
}

/** Multi select: 1 pt only if selection exactly matches correctAnswers */
export function scoreMultiSelectModule(answers, questions) {
  return questions.reduce((score, q, i) => {
    const selected = [...(answers[i] || [])].sort((a, b) => a - b);
    const correct = [...q.correctAnswers].sort((a, b) => a - b);
    const match =
      selected.length === correct.length &&
      selected.every((v, idx) => v === correct[idx]);
    return score + (match ? 1 : 0);
  }, 0);
}
