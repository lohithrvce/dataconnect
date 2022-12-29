import { JupyterFrontEnd, ILayoutRestorer } from '@jupyterlab/application';
import {
  ICommandPalette,
  MainAreaWidget,
  WidgetTracker
} from '@jupyterlab/apputils';
import { ILauncher } from '@jupyterlab/launcher';
import { EXTENSION_ID, EXTENSION_NAME, OPEN_COMMAND } from './enums';
import { ReactAppWidget } from './classes/App';
import { IMainMenu } from '@jupyterlab/mainmenu';

export const activate = (
  app: JupyterFrontEnd,
  palette: ICommandPalette,
  restorer: ILayoutRestorer,
  launcher: ILauncher,
  menu: IMainMenu
): void => {
  console.log(`JupyterLab extension ${EXTENSION_ID} is activated!`);

  // Create a single widget
  let widget: MainAreaWidget<ReactAppWidget>;

  if (launcher) {
    const fileMenuItems = [];

    launcher.add({
      command: OPEN_COMMAND,
      category: 'Other',
      rank: 0
    });

    fileMenuItems.push({
      command: OPEN_COMMAND,
      args: { isMenu: true },
      rank: 0
    });

    menu.fileMenu.newMenu.addGroup(fileMenuItems);
  }

  app.commands.addCommand(OPEN_COMMAND, {
    label: EXTENSION_NAME,
    execute: () => {
      if (!widget) {
        const content = new ReactAppWidget();
        widget = new MainAreaWidget({ content });
        widget.id = EXTENSION_ID;
        widget.title.label = EXTENSION_NAME;
        widget.title.closable = true;
      }

      if (!tracker.has(widget)) {
        tracker.add(widget);
      }
      if (!widget.isAttached) {
        // Attach the widget to the main work area if it's not there
        app.shell.add(widget, 'main');
      }

      // Activate the widget
      app.shell.activateById(widget.id);
    }
  });

  // Add the command to the palette.
  palette.addItem({ command: OPEN_COMMAND, category: 'React Redux Extension' });

  const tracker = new WidgetTracker<MainAreaWidget<ReactAppWidget>>({
    namespace: EXTENSION_ID
  });

  restorer.restore(tracker, {
    command: OPEN_COMMAND,
    name: () => EXTENSION_ID
  });
};
