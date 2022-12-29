import React from 'react'
import { ReactWidget } from '@jupyterlab/apputils'
import { AppComponent } from '../components/AppComponent'
import { EXTENSION_CSS_CLASSNAME } from '../enums'

export class ReactAppWidget extends ReactWidget {
  constructor() {
    super()
    this.addClass(EXTENSION_CSS_CLASSNAME)
  }

  render(): JSX.Element {
    return (
        <AppComponent />
    )
  }
}
