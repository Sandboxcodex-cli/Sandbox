export default function TopBar({
  createFile,
  saveWorkspace,
  runPreview,
  exportWorkspace,
  importWorkspace,
}){

  return(

    <div
      className="topbar"
      style={{
        height:50,
        background:"#111827",
        color:"#fff",
        display:"flex",
        alignItems:"center",
        gap:8,
        padding:"0 10px",
        borderBottom:"1px solid #333",
      }}
    >

      <button onClick={createFile}>📄</button>

      <button onClick={saveWorkspace}>💾</button>

      <button onClick={runPreview}>▶</button>

      <button onClick={exportWorkspace}>📤</button>

      <button onClick={importWorkspace}>📥</button>

      <div
        style={{
          marginLeft:"auto",
          fontWeight:"bold",
        }}
      >
        Sandbox CodeX
      </div>

    </div>

  );

}
