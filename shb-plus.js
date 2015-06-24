(function() {
  var buttons = document.getElementById('software-buttons');

  var old = document.getElementById('show-windows-button');
  if (old) {
    old.remove();
  }
  old = document.getElementById('kill-window-button');
  if (old) {
    old.remove();
  }

  var showWindows = document.createElement('button');
  showWindows.id = 'show-windows-button';
  showWindows.textContent = '▢';
  showWindows.style.position = 'absolute';
  showWindows.style.right = '1rem';
  showWindows.style.top = 0;
  showWindows.style.height = '5rem';
  showWindows.style.width = '7rem';
  showWindows.style.backgroundColor = 'red';
  showWindows.style.zIndex = 99999999;
  showWindows.style.pointerEvents = 'all';
  showWindows.style.background = 'transparent';
  showWindows.style.border = 'none';
  showWindows.style.color = 'white';
  showWindows.style.fontSize = '3rem';
  showWindows.addEventListener('mousedown', function() {
    window.dispatchEvent(new CustomEvent('taskmanagershow'));
  }, true);
  buttons.appendChild(showWindows);

  var kill = document.createElement('button');
  kill.id = 'kill-window-button';
  kill.textContent = 'X';
  kill.style.position = 'absolute';
  kill.style.left = '1rem';
  kill.style.top = 0;
  kill.style.height = '5rem';
  kill.style.width = '7rem';
  kill.style.backgroundColor = 'yellow';
  kill.style.zIndex = 99999999;
  kill.style.pointerEvents = 'all';
  kill.style.background = 'transparent';
  kill.style.border = 'none';
  kill.style.color = 'white';
  kill.style.fontSize = '2.1rem';
  kill.addEventListener('mousedown', function() {
    var oldApp = window.wrappedJSObject.StackManager.getCurrent();
    window.wrappedJSObject.SheetsTransition.begin('ltr');
    window.wrappedJSObject.SheetsTransition.snapBack(1);
    window.wrappedJSObject.StackManager.goPrev();
    oldApp.kill();
  }, true);
  buttons.appendChild(kill);
}());