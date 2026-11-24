import { useState } from "react";
import {
  Card,
  Radio,
  Checkbox,
  Select,
  Button,
  Space,
  Typography,
  Divider,
  message,
} from "antd";

import "./App.css";

const { Title, Text } = Typography;

function App() {
  // Chọn một phương án
  const [gender, setGender] = useState("male");

  // Chọn nhiều phương án
  const [skills, setSkills] = useState<string[]>(["React"]);

  // Chọn dropdown
  const [framework, setFramework] = useState("React");

  const handleSubmit = () => {
    console.log({
      gender,
      skills,
      framework,
    });

    message.success("Lưu lựa chọn thành công!");
  };

  return (
    <div className="container">
      <Title level={2}>Ant Design Selection</Title>

      {/* RADIO */}
      <Card title="1. Trong các khẳng định sau, khẳng định nào sai?">
        <Radio.Group value={gender} onChange={(e) => setGender(e.target.value)}>
          <Space direction="vertical">
            <Radio value="male">
              Vecto trong không gian là một đoạn thẳng có hướng
            </Radio>
            <Radio value="female">
              Hai vecto cùng phương là hai vecto có giá song song hoặc trùng
              nhau
            </Radio>
            <Radio value="other">
              Hai vecto bằng nhau là hai vecto cùng hướng và có độ dài bằng nhau
            </Radio>
          </Space>
        </Radio.Group>
      </Card>

      <Divider />

      {/* CHECKBOX */}
      <Card title="2. Chọn nhiều phương án">
        <Checkbox.Group
          value={skills}
          onChange={(values) => setSkills(values as string[])}
        >
          <Space direction="vertical">
            <Checkbox value="React">React</Checkbox>

            <Checkbox value="Vue">Vue</Checkbox>

            <Checkbox value="Angular">Angular</Checkbox>

            <Checkbox value="Three.js">Three.js</Checkbox>
          </Space>
        </Checkbox.Group>
      </Card>

      <Divider />

      {/* SELECT */}
      <Card title="3. Dropdown">
        <Select
          style={{ width: "100%" }}
          value={framework}
          onChange={setFramework}
          options={[
            { label: "React", value: "React" },
            { label: "Vue", value: "Vue" },
            { label: "Angular", value: "Angular" },
          ]}
        />
      </Card>

      <Divider />

      <Button type="primary" block onClick={handleSubmit}>
        Xác nhận
      </Button>
    </div>
  );
}

export default App;
