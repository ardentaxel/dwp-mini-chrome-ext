import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Card from "./components/Card";
import './index.css';
import Student from "../public/Student";

async function findDWPTabs() {
    const tabs = await chrome.tabs.query({ url: "https://radius.mathnasium.com/DWP/*" });
    if (tabs.length === 0) return [];
    return tabs;
}

function App({ students }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Card key={students[index].tabId}  student={students[index]} className="card" />
      {students.length > 1 && (
        <div>
          <button onClick={() => setIndex(i => Math.max(0, i - 1))} disabled={index === 0}>
            Prev
          </button>
          <span>{index + 1} / {students.length}</span>
          <button onClick={() => setIndex(i => Math.min(students.length - 1, i + 1))} disabled={index === students.length - 1}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

document.addEventListener("DOMContentLoaded", async () => {
  const tabs = await findDWPTabs();

  if (tabs.length === 0) {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App students={[new Student("something went wrong :(", null, [])]} />
      </React.StrictMode>
    );
    return;
  }

  


  //load
  const keys = tabs.map(tab => `student_${tab.title}`);
  const saved = await chrome.storage.local.get(keys);

  const students = tabs.map(tab => {
    const savedPKs = saved[`student_${tab.title}`] ?? [];
    return new Student(tab.title,tab.id,savedPKs);
  })

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App students={students} />
    </React.StrictMode>
  );
});