<html>
<head>
  <meta charset="utf-8">
  <title>Blockly Demo: Code</title>
  <script type="text/javascript" src="../../blockly_compressed.js"></script>
  <script type="text/javascript" src="../../../generators/pascal.js"></script>
  <script type="text/javascript" src="../../../generators/pascal/control.js"></script>
  <script type="text/javascript" src="../../../generators/pascal/logic.js"></script>
  <script type="text/javascript" src="../../../generators/pascal/math.js"></script>
  <script type="text/javascript" src="../../../generators/pascal/text.js"></script>
  <script type="text/javascript" src="../../../generators/pascal/lists.js"></script>
  <script type="text/javascript" src="../../../generators/pascal/variables.js"></script>
  <script type="text/javascript" src="../../../generators/pascal/procedures.js"></script>
  <script type="text/javascript" src="../../../generators/c.js"></script>
  <script type="text/javascript" src="../../../generators/c/control.js"></script>
  <script type="text/javascript" src="../../../generators/c/logic.js"></script>
  <script type="text/javascript" src="../../../generators/c/math.js"></script>
  <script type="text/javascript" src="../../../generators/c/text.js"></script>
  <script type="text/javascript" src="../../../generators/c/lists.js"></script>
  <script type="text/javascript" src="../../../generators/c/variables.js"></script>
  <script type="text/javascript" src="../../../generators/c/procedures.js"></script>
  <script type="text/javascript" src="../../../generators/dart.js"></script>
  <script type="text/javascript" src="../../../generators/dart/control.js"></script>
  <script type="text/javascript" src="../../../generators/dart/logic.js"></script>
  <script type="text/javascript" src="../../../generators/dart/math.js"></script>
  <script type="text/javascript" src="../../../generators/dart/text.js"></script>
  <script type="text/javascript" src="../../../generators/dart/lists.js"></script>
  <script type="text/javascript" src="../../../generators/dart/variables.js"></script>
  <script type="text/javascript" src="../../../generators/dart/procedures.js"></script>
  <script type="text/javascript" src="../../../generators/javascript.js"></script>
  <script type="text/javascript" src="../../../generators/javascript/control.js"></script>
  <script type="text/javascript" src="../../../generators/javascript/logic.js"></script>
  <script type="text/javascript" src="../../../generators/javascript/math.js"></script>
  <script type="text/javascript" src="../../../generators/javascript/text.js"></script>
  <script type="text/javascript" src="../../../generators/javascript/lists.js"></script>
  <script type="text/javascript" src="../../../generators/javascript/variables.js"></script>
  <script type="text/javascript" src="../../../generators/javascript/procedures.js"></script>
  <script type="text/javascript" src="../../../generators/python.js"></script>
  <script type="text/javascript" src="../../../generators/python/control.js"></script>
  <script type="text/javascript" src="../../../generators/python/logic.js"></script>
  <script type="text/javascript" src="../../../generators/python/math.js"></script>
  <script type="text/javascript" src="../../../generators/python/text.js"></script>
  <script type="text/javascript" src="../../../generators/python/lists.js"></script>
  <script type="text/javascript" src="../../../generators/python/variables.js"></script>
  <script type="text/javascript" src="../../../generators/python/procedures.js"></script>
  <script type="text/javascript" src="../../../language/id/_messages.js"></script>
  <script type="text/javascript" src="../../../language/id/control.js"></script>
  <script type="text/javascript" src="../../../language/id/logic.js"></script>
  <script type="text/javascript" src="../../../language/id/math.js"></script>
  <script type="text/javascript" src="../../../language/id/text.js"></script>
  <script type="text/javascript" src="../../../language/id/lists.js"></script>
  <script type="text/javascript" src="../../../language/id/variables.js"></script>
  <script type="text/javascript" src="../../../language/id/procedures.js"></script>
 <style>
    html, body {
      background-color: #fff;
      margin: 0;
      padding:0;
	  background:url(a.gif) 0 0 repeat;
      overflow: hidden;
    }
    .blocklySvg {
      height: 100%;
      width: 100%;
    }
  </style>
  <script>
    function init() {
      Blockly.inject(document.body, {path: '../../../'});

      if (window.parent.init) {
        // Let the top-level application know that Blockly is ready.
        window.parent.init(Blockly);
      } else {
        // Attempt to diagnose the problem.
        var msg = 'Error: Unable to communicate between frames.\n\n';
        if (window.parent == window) {
          msg += 'Try loading index.html instead of frame.html';
        } else if (window.location.protocol == 'file:') {
          msg += 'This may be due to a security restriction preventing\n' +
              'access when using the file:// protocol.\n' +
              'http://code.google.com/p/chromium/issues/detail?id=47416';
        }
        alert(msg);
      }
    }
  </script>
</head>

<body onload="init()">
</body>

</html>
