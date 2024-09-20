import { useMemo, useState } from "kaioken"
import { CodeMirrorComponent } from "./components/CodeMirrorComponent"
import { javascript } from "@codemirror/lang-javascript"

export function App() {
  const [enableJsx, setEnableJsx] = useState(false)
  const [content, setContent] = useState(`
const App = (props) =>  (
  <h1>Hello, {props.name}!</h1>
)
`)
  const extensions = useMemo(
    () => (enableJsx ? [javascript({ jsx: true })] : [javascript()]),
    [enableJsx]
  )

  console.log("content", content)
  return (
    <div>
      <button onclick={() => setEnableJsx((prev) => !prev)}>
        JSX Enabled: {String(enableJsx)}
      </button>
      <CodeMirrorComponent
        initialContent={content}
        onContentChanged={setContent}
        extensions={extensions}
      />
    </div>
  )
}
