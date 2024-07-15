import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styles from "./ReportEditor.module.css";
import PocketBase from "pocketbase";

import 'quill-image-uploader/dist/quill.imageUploader.min.css';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const pb = new PocketBase("https://theaesthetics.ru");

const ReportEditor: React.FC = () => {
  const [report, setReport] = useState<string>("");
  const [reports, setReports] = useState<string[]>([]);

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

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleChange = (value: string) => {
    console.log("Отчет:", value); // Проверка значения
    setReport(value);
  };
  

  return (
    <div className={styles.editorContainer}>
      <ReactQuill
        value={report}
        onChange={handleChange}
        className={styles.quillEditor}
        modules={modules}
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
