import { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import Terminal from "../components/Terminal";
import AIChat from "../components/AIChat";

const DEFAULT_FILES = {
  "index.html":"<h1>Hello Sandbox CodeX</h1>",
  "style.css":"body{background:#111;color:#fff;font-family:sans-serif}",
  "script.js":"console.log('Sandbox CodeX');",
};

export default function IDE(){

  const [drawer,setDrawer]=useState(false);
  const [tab,setTab]=useState("editor");
  const [current,setCurrent]=useState("index.html");

  const [files,setFiles]=useState(DEFAULT_FILES);

  const preview = useMemo(()=>`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
${files["style.css"]||""}
</style>
</head>
<body>
${files["index.html"]||""}
<script>
${files["script.js"]||""}
</script>
</body>
</html>
`,[files]);

  return(

    <div
      style={{
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        background:"#0f172a",
      }}
    >

      <TopBar
        createFile={()=>{}}
        saveWorkspace={()=>{}}
        runPreview={()=>setTab("preview")}
        exportWorkspace={()=>{}}
        importWorkspace={()=>{}}
      />
      <div
        style={{
          flex:1,
          position:"relative",
          overflow:"hidden",
        }}
      >

        {drawer && (
          <div
            onClick={()=>setDrawer(false)}
            style={{
              position:"fixed",
              inset:0,
              background:"rgba(0,0,0,.45)",
              zIndex:90,
            }}
          />
        )}

        <div
          style={{
            position:"fixed",
            left:drawer?0:-260,
            top:50,
            bottom:48,
            width:250,
            background:"#111827",
            transition:"0.25s",
            zIndex:100,
            overflow:"auto",
          }}
        >
          <Sidebar
            files={files}
            current={current}
            setCurrent={(name)=>{
              setCurrent(name);
              setDrawer(false);
            }}
            createFile={()=>{}}
          />
        </div>

        {tab==="editor" && (

          <Editor
            language={
              current.endsWith(".css")
              ?"css"
              :current.endsWith(".js")
              ?"javascript"
              :"html"
            }
            code={files[current]||""}
            setCode={(value)=>
              setFiles({
                ...files,
                [current]:value,
              })
            }
          />

        )}

        {tab==="preview" && (
          <Preview html={preview}/>
        )}

        {tab==="terminal" && (
          <Terminal/>
        )}

        {tab==="ai" && (
          <AIChat/>
        )}

      </div>

      <div
        style={{
          height:48,
          display:"flex",
          background:"#111827",
          borderTop:"1px solid #333",
        }}
      >
        <button style={{flex:1}} onClick={()=>setDrawer(true)}>
          📁
        </button>

        <button style={{flex:1}} onClick={()=>setTab("editor")}>
          💻
        </button>

        <button style={{flex:1}} onClick={()=>setTab("preview")}>
          🌐
        </button>

        <button style={{flex:1}} onClick={()=>setTab("terminal")}>
          🖥
        </button>

        <button style={{flex:1}} onClick={()=>setTab("ai")}>
          🤖
        </button>
      </div>

    </div>

  );

}
