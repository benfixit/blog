//@ts-nocheck
"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import 'react-tabs/style/react-tabs.css';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "@/app/ui/codeswitcher.module.css";

const CodeSwitcher = ({ samples }) => {
    const [activeLang, setActiveLang] = useState(Object.keys(samples)[0]);

    return (
        <div className={styles.wrapper}>
            <div>
                {Object.keys(samples).map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setActiveLang(lang)}
                        style={{
                            backgroundColor: activeLang === lang ? '#000000' : 'inherit',
                            borderBottom: activeLang === lang ? '1px solid #ccc' : 'none',
                        }}
                    >
                        {lang}
                    </button>
                ))}
            </div>
            <SyntaxHighlighter language={activeLang.toLowerCase()} style={vscDarkPlus}>
                {samples[activeLang].trim()}
            </SyntaxHighlighter>
        </div>
    );
}

export default CodeSwitcher;