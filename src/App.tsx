import { useD2 } from "./hooks/useD2";
import {
  Radio,
  Space,
} from "antd";

function App() {
  const { data, loading, error } = useD2();

  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  if (error) {
    return <p>Lỗi: {error}</p>;
  }

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

          <Radio.Group>
            <Space direction="vertical">
              {(item.options ?? []).map((option, index) => (
                <Radio key={index} value={option}>
                  {option}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </div>
      ))}
    </div>
  );
}

export default App;
