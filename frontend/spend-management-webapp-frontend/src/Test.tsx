import { useState } from 'react';
import api from './api';

// ユーザーの型を定義
interface Test {
  id: number;
  test_id: number;
  test_name: string;
  created_at: string;
  updated_at: string;
}

function Test() {
  // 全データ取得フォーム用の状態
  const [testAllData, setTestAllData] = useState<Test[] | null>(null);

  // データ取得フォーム用の状態
  const [testIdToGet, setTestIdToGet] = useState<number>(0);
  const [testData, setTestData] = useState<Test | null>(null);

  // データ登録フォーム用の状態
  const [testIdToPost, setTestIdToPost] = useState<number>(0);
  const [testNameToPost, setTestNameToPost] = useState<string>("");

  // データ更新フォーム用の状態
  const [testIdToUpdate, setTestIdToUpdate] = useState<number>(0);
  const [testNameToUpdate, setTestNameToUpdate] = useState<string>("");

  // データ削除フォーム用の状態
  const [testIdToDelete, setTestIdToDelete] = useState<number>(0);

  // データ取得処理
  const getTestAllData = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.get(`/api/v1/tests/`);
      setTestAllData(response.data);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // データ取得処理
  const getTestData = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.get(`/api/v1/tests/${testIdToGet}`);
      setTestData(response.data);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // 新規データ登録
  const sendTestData = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post("/api/v1/tests/", {
        test_id: testIdToPost,
        test_name: testNameToPost
      });
      console.log("Test data created:", response.data);
    } catch (error) {
      console.error("Error creating test:", error);
    }
  };

  // データ更新
  const updateTestData = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.put(`/api/v1/tests/${testIdToUpdate}`, {
        test_name: testNameToUpdate
      });
      console.log("Test data updated:", response.data);
    } catch (error) {
      console.error("Error updating test:", error);
    }
  };

  // データ削除
  const deleteTestData = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.delete(`/api/v1/tests/${testIdToDelete}`);
      console.log("Test data updated:", response.data);
    } catch (error) {
      console.error("Error updating test:", error);
    }
  };

  return (
    <>
      <h1>Test Data</h1>
      <div>
        {/* 全データ取得フォーム */}
        <form onSubmit={getTestAllData}>
          <button type="submit">全取得</button>
        </form>
        <ul>
          {
            testAllData?.map((test) => (
              <li key={test.id}>(id={test.id}) (test_id={test.test_id}): {test.test_name}</li>
            ))
          }
        </ul>

        {/* データ取得フォーム */}
        <form onSubmit={getTestData}>
          <input
            type="number"
            value={testIdToGet}
            onChange={(e) => setTestIdToGet(parseInt(e.target.value))}
            placeholder="Enter Test ID"
          />
          <button type="submit">取得</button>
        </form>
        <div>{testData?.test_name}</div>

        {/* 新規データ登録フォーム */}
        <form onSubmit={sendTestData}>
          <input
            type="number"
            value={testIdToPost}
            onChange={(e) => setTestIdToPost(parseInt(e.target.value))}
            placeholder="Enter Test ID"
          />
          <input
            type="text"
            value={testNameToPost}
            onChange={(e) => setTestNameToPost(e.target.value)}
            placeholder="Enter Test Name"
          />
          <button type="submit">登録</button>
        </form>

        {/* データ更新フォーム */}
        <form onSubmit={updateTestData}>
          <input
            type="number"
            value={testIdToUpdate}
            onChange={(e) => setTestIdToUpdate(parseInt(e.target.value))}
            placeholder="Enter Test ID"
          />
          <input
            type="text"
            value={testNameToUpdate}
            onChange={(e) => setTestNameToUpdate(e.target.value)}
            placeholder="Enter Test Name"
          />
          <button type="submit">更新</button>
        </form>

        {/* データ削除フォーム */}
        <form onSubmit={deleteTestData}>
          <input
            type="number"
            value={testIdToDelete}
            onChange={(e) => setTestIdToDelete(parseInt(e.target.value))}
            placeholder="Enter Test ID"
          />
          <button type="submit">削除</button>
        </form>
      </div>
    </>
  );
}

export default Test;
