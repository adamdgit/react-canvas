
export default function ToolbarRight() {
  return (
    <div className="toolbar-right">
      <button className="add-layer-btn">
        Add new layer
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="25" width="25" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v144H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h144v144c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V304h144c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32z"/></svg>
      </button>
      <div className="layers-wrap">
      </div>
    </div>
  )
}
