import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import "./style.css";

const genAI = new GoogleGenerativeAI("AIzaSyD20QnZlCXCQPeZBfR9OsDBKat85xS0xMY");

function AICoach({ work }) {
    const [advice, setAdvice] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const todos = work.filter((item) => item.date === id);
        if (todos.length > 0 && advice === "") {
            getAIAdvice(todos);
        }
    }, [work, id, advice]);

    const getAIAdvice = async (todos) => {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const todoList = todos
            .map((todo) => `- ${todo.schedule} (우선순위: ${todo.Priority})`)
            .join("\n");
        const prompt = `
      다음은 오늘의 투두리스트입니다:
      ${todoList}

      이 투두리스트를 바탕으로 사용자에게 동기부여가 되는 조언을 해주세요. 
      우선순위를 고려하여 어떤 순서로 일을 처리하면 좋을지, 
      시간 관리는 어떻게 하면 좋을지 등에 대해 구체적인 조언을 부탁드립니다.
      투두리스트의 내용이 불명확하거나 추상적인 경우에도 최선을 다해 조언해주세요.
    `;

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = await response.text();
            setAdvice(filterImportantAdvice(text));
        } catch (error) {
            console.error("AI 조언을 가져오는 중 오류 발생:", error);
            setAdvice(
                "죄송합니다. 현재 AI 조언을 제공할 수 없습니다. 나중에 다시 시도해주세요."
            );
        }
    };

    const filterImportantAdvice = (text) => {
        const importantSentences = text
            .split(". ")
            .filter(
                (sentence) =>
                    sentence.includes("추천") || sentence.includes("건 어떨까요")
            );
        return importantSentences.map((sentence, index) => (
            <li key={index}>{sentence.trim()}.</li>
        ));
    };

    return (
        <div>
            <div className="box">
                <button className="setBtn" onClick={() => navigate("/")}>
                    메인
                </button>
                <button
                    className="setBtn"
                    onClick={() => navigate("/cal")}
                    style={{ left: "150px" }}
                >
                    캘린더
                </button>
                <button
                    className="setBtn"
                    onClick={() => console.log("세팅 버튼 클릭됨")}
                    style={{ left: "250px" }}
                >
                    세팅
                </button>
                <br />
                <span className="title">오늘의 AI 조언</span>
                <div className="ai-advice">
                    <ul>{advice}</ul>
                </div>
            </div>
        </div>
    );
}

export default AICoach;
