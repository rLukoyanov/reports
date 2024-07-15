"use client";
import Head from "next/head";
import QuillEditor from "../components/ReportEditor";
import FlowerAnimation from "../components/FlowerAnimation";
import styles from "./page.module.css";
import PlantComponent from "@/components/Plant";
import { useState } from "react";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Отчеты</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FlowerAnimation />
      <main className={styles.main}>
        <h1 className={styles.title}>Мой отчет</h1>
        <QuillEditor />
        <PlantComponent />
      </main>
    </div>
  );
};

export default Home;
