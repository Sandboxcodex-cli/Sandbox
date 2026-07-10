export default function Editor({
  code,
  setCode,
}){

  return(
    <textarea
      value={code}
      onChange={(e)=>setCode(e.target.value)}
      style={{
        width:"100%",
        height:"100%",
        border:"none",
        outline:"none",
        padding:16,
        background:"#1e1e1e",
        color:"#fff",
        fontFamily:"monospace",
        fontSize:14,
        boxSizing:"border-box",
      }}
    />
  );

}
