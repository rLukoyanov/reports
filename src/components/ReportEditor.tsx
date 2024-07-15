import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styles from "./ReportEditor.module.css";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://theaesthetics.ru");

// Dynamic import to avoid SSR issues with react-quill
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ReportEditor: React.FC = () => {
  const [report, setReport] = useState<string>("");
  const [reports, setReports] = useState<string[]>([]);

  const handleSaveReport = () => {
    setReports([...reports, report]);
    setReport("");
  };

  const handleSubmit = async () => {
    try {
      const data = {
        text: report,
      };
      await pb.collection("reports").create(data);
      alert("Отчет успешно отправлен!");
      setReport("");
    } catch (error) {
      console.error("Ошибка при отправке отчета:", error);
      alert("Ошибка при отправке отчета.");
    }
  };

  return (
    <div className={styles.editorContainer}>
      <ReactQuill
        value={report}
        onChange={setReport}
        className={styles.quillEditor}
      />
      <button onClick={handleSubmit} className={styles.saveButton}>
        Сохранить Отчет
      </button>
      <div className={styles.reportsContainer}>
        {reports.map((rep, index) => (
          <div key={index} className={styles.report}>
            <div dangerouslySetInnerHTML={{ __html: rep }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportEditor;
