import "./index.css";
import ScriptLoader from "./ScriptLoader";

const App = () => {
  return (
    <>
      <div id="playerUI">
        <div id="player"></div>
        <div id="overlay" className="overlay text-light bg-dark">
          <div>
            <div id="qualityStatus" className="greyStatus">
              &#9679;
            </div>
            <div id="overlayButton">+</div>
          </div>
          <div id="overlaySettings">
            <div id="kickOthers">
              <div className="settings-text">Kick all other players</div>
              <label className="btn-overlay">
                <input
                  type="button"
                  id="kick-other-players-button"
                  className="overlay-button btn-flat"
                  value="Kick"
                />
              </label>
            </div>
            <div id="fillWindow">
              <div className="settings-text">
                Enlarge Display to Fill Window
              </div>
              <label className="tgl-switch">
                <input
                  type="checkbox"
                  id="enlarge-display-to-fill-window-tgl"
                  className="tgl tgl-flat"
                  defaultChecked
                />
                <div className="tgl-slider"></div>
              </label>
            </div>
            <div id="qualityControlOwnership">
              <div className="settings-text">Quality control ownership</div>
              <label className="tgl-switch">
                <input
                  type="checkbox"
                  id="quality-control-ownership-tgl"
                  className="tgl tgl-flat"
                />
                <div className="tgl-slider"></div>
              </label>
            </div>
            <br />
            <section id="encoderSettings">
              <div className="settings-text">Encoder Settings</div>
              <div id="encoderParamsContainer" className="collapse">
                <div className="form-group">
                  <label
                    htmlFor="encoder-rate-control"
                    className="settings-text"
                  >
                    Rate Control
                  </label>
                  <select id="encoder-rate-control">
                    <option value="CBR">CBR</option>
                    <option value="VBR">VBR</option>
                    <option value="ConstQP">ConstQP</option>
                  </select>
                  <label htmlFor="encoder-target-bitrate-text">
                    Target Bitrate (kbps)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="encoder-target-bitrate-text"
                    defaultValue="0"
                    min="0"
                    max="100000"
                  />
                  <label htmlFor="encoder-max-bitrate-text">
                    Max Bitrate (kbps)
                  </label>
                  <input
                    type="number"
                    className="htmlForm-control"
                    id="encoder-max-bitrate-text"
                    value="0"
                    min="0"
                    max="100000"
                  />
                  <label htmlFor="encoder-min-qp-text">Min QP</label>
                  <input
                    type="number"
                    className="form-control"
                    id="encoder-min-qp-text"
                    value="0"
                    min="0"
                    max="999"
                  />
                  <label htmlFor="encoder-max-qp-text">Max QP</label>
                  <input
                    type="number"
                    className="form-control"
                    id="encoder-max-qp-text"
                    value="0"
                    min="0"
                    max="999"
                  />
                  <label htmlFor="encoder-multipass" className="settings-text">
                    Multipass
                  </label>
                  <select id="encoder-multipass">
                    <option value="DISABLED">DISABLED</option>
                    <option value="QUARTER">QUARTER</option>
                    <option value="FULL">FULL</option>
                  </select>
                  <div className="settings-text">Filler Data</div>
                  <label className="tgl-switch">
                    <input
                      type="checkbox"
                      id="encoder-filler-data-tgl"
                      className="tgl tgl-flat"
                    />
                    <div className="tgl-slider"></div>
                  </label>
                </div>
                <input
                  id="encoder-params-submit"
                  className="btn btn-primary btn-lg mt-3"
                  type="button"
                  value="Apply"
                />
              </div>
              <br />
            </section>
            <div id="showFPS">
              <div className="settings-text">Show FPS</div>
              <label className="btn-overlay">
                <input
                  type="button"
                  id="show-fps-button"
                  className="overlay-button btn-flat"
                  value="Toggle"
                />
              </label>
            </div>
            <div id="matchViewportResolution">
              <div className="settings-text">Match Viewport Resolution</div>
              <label className="tgl-switch">
                <input
                  type="checkbox"
                  id="match-viewport-res-tgl"
                  className="tgl tgl-flat"
                />
                <div className="tgl-slider"></div>
              </label>
            </div>

            <div id="statsPanel">
              <div className="settings-text">Show Stats</div>
              <label className="tgl-switch">
                <input
                  type="checkbox"
                  id="show-stats-tgl"
                  className="tgl tgl-flat"
                  defaultChecked
                />
                <div className="tgl-slider"></div>
              </label>
              <div id="statsContainer" className="statsContainer">
                <div id="stats" className="stats"></div>
              </div>
              <br />
            </div>
            <div id="latencyTest">
              <div className="settings-text">Latency Stats</div>
              <label className="btn-overlay">
                <input
                  type="button"
                  id="test-latency-button"
                  className="overlay-button btn-flat"
                  value="Test Latency"
                />
              </label>
              <div id="latencyStatsContainer" className="statsContainer">
                <div id="LatencyStats" className="stats">
                  No stats yet...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScriptLoader />
    </>
  );
};

export default App;
