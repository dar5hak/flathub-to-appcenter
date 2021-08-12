import { writeFileSync } from "fs";
import got from "got";
import jsYaml from "js-yaml";

(async () => {
  const flathubUrl = process.argv[2];
  let manifest = await got(flathubUrl).json();

  if (manifest.base !== "io.elementary.BaseApp") {
    console.error("Not an elementary OS app");
    return;
  }

  const appId = manifest["app-id"];

  manifest = {
    ...manifest,
    base: undefined,
    ["base-version"]: undefined,
    runtime: "io.elementary.Platform",
    ["runtime-version"]: "6",
    sdk: "io.elementary.Sdk",
  };

  manifest.modules[manifest.modules.length - 1].sources = [
    {
      type: "dir",
      path: ".",
    },
  ];

  manifest = jsYaml.dump(manifest, { lineWidth: -1 });

  writeFileSync(`${appId}.yml`, manifest);
})();
