"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { correctUrlQuestions } from "@/data/questions";
import { saveUrlModule, scoreUrlModule, getStudent } from "@/lib/storage";

export default function CorrectUrlPage() {
  const router = useRouter();
  // answers: { [questionIndex]: selectedOptionIndex }
  const [answers, setAnswers] = useState({});
  const [warning, setWarning] = useState("");

  // Guard: redirect to login if no student name
  useEffect(() => {
    const { name } = getStudent();
    if (!name) router.replace("/");
  }, [router]);

  function selectAnswer(qIndex, optIndex) {
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
    setWarning("");
  }

  function handleNext() {
    // Check all questions answered
    const unanswered = correctUrlQuestions.findIndex((_, i) => answers[i] === undefined);
    if (unanswered !== -1) {
      setWarning(`Please answer question ${unanswered + 1} before continuing.`);
      // Scroll to that question
      document.getElementById(`q-${unanswered}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const score = scoreUrlModule(answers, correctUrlQuestions);
    saveUrlModule(answers, score);
    router.push("/emotion-detector");
  }

  const answered = Object.keys(answers).length;
  const total = correctUrlQuestions.length;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0e0d" }}>
      <Header />

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px 16px 80px" }}>
        {/* Breadcrumb */}
        <p style={{ color: "#4a6e55", fontSize: "12px", fontFamily: "'Courier New', monospace", marginBottom: "4px" }}>
          root@bootcamp:~/cyber-detective
        </p>

        {/* Module title */}
        <h2 style={{ color: "#00ff88", fontSize: "22px", fontFamily: "'Courier New', monospace", fontWeight: 700, marginBottom: "4px", textShadow: "0 0 8px rgba(0,255,136,0.3)" }}>
          Module 1: Correct URL Checking
        </h2>
        <p style={{ color: "#4a6e55", fontSize: "13px", fontFamily: "'Courier New', monospace", marginBottom: "28px" }}>
          Single choice · {answered}/{total} answered
        </p>

        {/* Progress bar */}
        <div style={{ height: "4px", background: "#1a3020", borderRadius: "2px", marginBottom: "32px" }}>
          <div style={{ height: "100%", width: `${(answered / total) * 100}%`, background: "#00ff88", borderRadius: "2px", transition: "width 0.3s" }} />
        </div>

        {/* Questions */}
        {correctUrlQuestions.map((q, qIndex) => (
          <div
            id={`q-${qIndex}`}
            key={q.id}
            className="question-card"
            style={{ border: answers[qIndex] !== undefined ? "1px solid #1a4a28" : "1px solid #1a3020" }}
          >
            <p style={{ color: "#4a6e55", fontSize: "11px", fontFamily: "'Courier New', monospace", marginBottom: "8px" }}>
              Question {qIndex + 1} of {total}
            </p>
            <p style={{ color: "#c8d8cc", fontSize: "16px", fontFamily: "'Courier New', monospace", marginBottom: "16px", lineHeight: "1.5", fontWeight: 600 }}>
              {q.question}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {q.options.map((opt, oIndex) => (
                <div
                  key={oIndex}
                  className={`option-card ${answers[qIndex] === oIndex ? "selected" : ""}`}
                  onClick={() => selectAnswer(qIndex, oIndex)}
                  style={{ fontSize: "14px", fontFamily: "'Courier New', monospace", wordBreak: "break-all" }}
                >
                  <span style={{ color: answers[qIndex] === oIndex ? "#00ff88" : "#4a6e55", marginRight: "10px" }}>
                    [{String.fromCharCode(65 + oIndex)}]
                  </span>
                  {opt}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Warning */}
        {warning && <div className="warning-bar" style={{ marginBottom: "20px" }}>⚠ {warning}</div>}

        {/* Next button */}
        <div style={{ textAlign: "center", marginTop: "12px" }}>
          <button className="btn-primary" onClick={handleNext}>
            Next Topic: Emotion Detector →
          </button>
          <p style={{ color: "#2a4a33", fontSize: "12px", marginTop: "12px", fontFamily: "'Courier New', monospace" }}>
            {total - answered} question{total - answered !== 1 ? "s" : ""} remaining
          </p>
        </div>
      </div>
    </div>
  );
}
