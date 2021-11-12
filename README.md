# requireurl    
 Load JavaScript file from Network URL in Node.JS  
  
### Installation
 `npm i @wikgu/requireurl`  
  
### Example usage
 ```js  
import requireurl from "@wikgu/requireurl";
(async () => {
  await requireurl("https://unpkg.com/@stdlib/dist-flat@0.0.96/build/bundle.min.js");
  console.log(stdlib.fastmath.acosh(1.5));
})();
```  
