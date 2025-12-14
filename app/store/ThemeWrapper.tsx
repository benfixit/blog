"use client";
import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    });

    if (!isMounted) {
        return <>{children}</>
    }

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}

export default ThemeWrapper;