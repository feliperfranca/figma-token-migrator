figma.showUI(`<html><body><h3>Figma Token Migrator</h3></body></html>`, { width: 420, height: 600 });

figma.ui.postMessage({
  type: 'BOOTSTRAP',
  message: 'Plugin initialized'
});