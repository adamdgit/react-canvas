import ToolbarLeft from "./ToolbarLeft";
import ToolbarRight from "./ToolbarRight";
import ToolbarTop from "./ToolbarTop";

export default function EditorBody() {
  return (
    <main>

      <ToolbarTop />

      <div className="divider2">
        <ToolbarLeft />

        <div className="canvas-wrap">
          <div className="canvas-layers">
          </div>
        </div>
        
        <ToolbarRight />
      </div>

    </main>
  )
}
