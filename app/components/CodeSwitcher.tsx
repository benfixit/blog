//@ts-nocheck
"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import CopyTextComponent from "./CopyCodeSample";
import 'react-tabs/style/react-tabs.css';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "@/app/ui/codeswitcher.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useLang } from "../store/LangProvider";

const CodeSwitcher = ({ samples }) => {
    const { lang: activeLang, setLang } = useLang();
    const codeSample = samples[activeLang].trim();

    return (
        <div className={styles.wrapper}>
            <div>
                {Object.keys(samples).map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLang(lang)}
                        className={activeLang === lang ? styles.active_button : styles.inactive_button}
                    >
                        {lang}
                    </button>
                ))}
            </div>
            <SyntaxHighlighter language={activeLang.toLowerCase()} style={vscDarkPlus}>
                {codeSample}
            </SyntaxHighlighter>
            <CopyTextComponent textToCopy={codeSample} />
        </div>
    );
}

export default CodeSwitcher;