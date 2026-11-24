import { useEffect, useState } from "react";
import { supabase } from "./service/supabaseClient";

interface D2 {
  id: string;
  created_at: string;
  subject: string | null;
  context: string | null;
  options: any;
  correct_answer: string | null;
  explanation: string | null;
  formula: string | null;
  topic: string | null;
}

function App() {
  const [data, setData] = useState<D2[]>([]);

  const getData = async () => {
    const { data, error } = await supabase
      .from("d2")
      .select("*");

    if (error) {
      console.error("Lỗi:", error.message);
      return;
    }

    setData(data ?? []);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Danh sách câu hỏi</h1>

      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.subject}</h3>

          <p>{item.context}</p>

          <p>Đáp án: {item.correct_answer}</p>

          <p>Giải thích: {item.explanation}</p>

          <p>Công thức: {item.formula}</p>

          <p>Chủ đề: {item.topic}</p>

          <pre>
            {JSON.stringify(item.options, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
}

export default App;