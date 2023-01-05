import { JupyterFrontEndPlugin, JupyterFrontEnd, ILayoutRestorer } from '@jupyterlab/application'
import { ICommandPalette, MainAreaWidget, WidgetTracker  } from '@jupyterlab/apputils';
import { ReactAppWidget } from './classes/App';
import { ReactSidePanelWidget } from './classes/SidePanel';
import { dbIcon } from './style/icons';

const EXTENSION_ID = 'dataconnectornode-jupyterlab'
const EXTENSION_NAME = 'Data Connector'
const OPEN_COMMAND = 'jle:open'


const activate = (app: JupyterFrontEnd, palette: ICommandPalette, restorer: ILayoutRestorer): void => {
  console.log(`JupyterLab extension ${EXTENSION_ID} is activated!`)

  const tracker = new WidgetTracker<MainAreaWidget<ReactAppWidget>>({
    namespace: EXTENSION_ID,
  })
  
  // Create a single widget
  let widget: MainAreaWidget<ReactAppWidget>
  app.commands.addCommand(OPEN_COMMAND, {
    label: EXTENSION_NAME,
    execute: () => {
      if (!widget) {
        const content = new ReactAppWidget()
        widget = new MainAreaWidget({ content })
        widget.id = EXTENSION_ID
        widget.title.label = EXTENSION_NAME
        widget.title.closable = true
      }
      
      if (!tracker.has(widget)) {
        tracker.add(widget)
      }
      if (!widget.isAttached) {
        // Attach the widget to the main work area if it's not there
        app.shell.add(widget, 'main')
      }

      // Activate the widget
      app.shell.activateById(widget.id)
    },
  })

  // Side Panel
  let sidePanel: MainAreaWidget<ReactSidePanelWidget>
  const sideContent = new ReactSidePanelWidget();
  sidePanel = new MainAreaWidget({content: sideContent});
  sidePanel.id = EXTENSION_ID + 'side-panel'
  sidePanel.title.icon = dbIcon;
  sidePanel.title.caption = 'Data Connect';

  // sidePanel.title.closable = true
  if (!sidePanel.isAttached) {
    app.shell.add(sidePanel, 'left')
  }
  app.shell.activateById(sidePanel.id)
  if (!tracker.has(sidePanel)) {
    tracker.add(sidePanel)
  }

  restorer.restore(tracker, {
    command: OPEN_COMMAND,
    name: () => EXTENSION_ID,
  })

  // Add the command to the palette.
  palette.addItem({ command: OPEN_COMMAND, category: 'React Redux Extension' })
}


const extension: JupyterFrontEndPlugin<void> = {
  id: EXTENSION_ID,
  autoStart: true,
  requires: [ICommandPalette, ILayoutRestorer],
  activate,
}

export default extension;
