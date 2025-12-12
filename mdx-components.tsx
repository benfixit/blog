import type { MDXComponents } from "mdx/types";
import CodeSwitcher from "./app/components/CodeSwitcher";

const components: MDXComponents = {
    CodeSwitcher: (props) => <CodeSwitcher {...props} />
}

export function useMDXComponents(): MDXComponents {
    return components;
}