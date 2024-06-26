
export default function ToolbarTop() {
  return (
    <div className="toolbar-top">
        <div>
          <label htmlFor="ImgInp">Upload Image</label>
          <input type="file" accept="image/*" id="imgInp" />
        </div>

        <div className="toolbar-container">
          <label htmlFor="colorpicker">Color</label>
          <input name="colorpicker" type="color" id="colorpicker" />
        </div>
        <div className="toolbar-container">
          <label htmlFor="brushsize">Brush Size</label>
          <input name="brushsize" type="range" className="brushsize" />
          <span className="brush-value"></span>
        </div>

        <button className="undo-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20" width="20" viewBox="0 0 512 512"><path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"/></svg>
          Undo
        </button>
        <button className="redo-button">
          Redo
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20" width="20" viewBox="0 0 512 512"><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg>
        </button>
      </div>
  )
}
