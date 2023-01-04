import React from 'react'
import { ReactWidget } from '@jupyterlab/apputils'
import { SidePanel } from '../components/SidePanel'

export class ReactSidePanelWidget extends ReactWidget {
  constructor() {
    super()
    this.addClass('jl-ReactAppWidget')
  }

  render(): JSX.Element {
    return (
        <SidePanel />
    )
  }
}
