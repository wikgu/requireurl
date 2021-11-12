import requireurl from "../index.js";
(async () => {
  await requireurl("https://unpkg.com/@stdlib/dist-flat@0.0.96/build/bundle.min.js");
  console.log(stdlib.fastmath.acosh(1.5));
})();
