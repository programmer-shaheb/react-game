import { useEffect, useState } from "react";

const ScriptLoader = () => {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  const scriptUrls = ["adapter-latest.js", "webRtcPlayer.js", "app.js"];

  useEffect(() => {
    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScriptsSequentially = async () => {
      for (const url of scriptUrls) {
        await loadScript(url);
      }
      setScriptsLoaded(true);
    };

    if (!scriptsLoaded) {
      loadScriptsSequentially();
    } else {
      if (window.load && typeof window.load === "function") {
        window.load();
      }
    }
  }, [scriptUrls, scriptsLoaded]);

  return null;
};

export default ScriptLoader;
