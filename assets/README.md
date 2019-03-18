# Offline Jeeliz VTO widget

This version of the VTO widget is like [jeelizGlassesVTOWidget](https://github.com/jeeliz/jeelizGlassesVTOWidget) except it works offline.

It differs from the connected widget (see [demo.html](demo.html) by:

* the script [glasses.js](glasses.js) is included. This script defines the global JS variable `GLASSESBYSKU`,
* `JEEWIDGET.start` has 2 new properties as arguments:
  * `catalog: GLASSESBYSKU`
  * `assetsPath: './data/'` 



Notes:

* The image based VTO, usually generated server side (fallback mode) is not working offline (it requires a connection to the server),
* Only the models specified in [glassesSKU.csv](glassesSKU.csv) are included.
