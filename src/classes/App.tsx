import React from 'react'
import { ReactWidget } from '@jupyterlab/apputils'
// import { AppComponent } from '../components/AppComponent'
import {ConnectorSelect} from '../components/ConnectorSelect'

export class ReactAppWidget extends ReactWidget {
  constructor() {
    super()
    this.addClass('jl-ReactAppWidget')
  }

  render(): JSX.Element {
    return (
        <ConnectorSelect />
    )
  }
}
