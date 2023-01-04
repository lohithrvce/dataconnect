import React from 'react'
import { ReactWidget } from '@jupyterlab/apputils'
import { AppComponent } from '../components/AppComponent'

export class ReactAppWidget extends ReactWidget {
  constructor() {
    super()
    this.addClass('jl-ReactAppWidget')
  }

  render(): JSX.Element {
    return (
        <AppComponent />
    )
  }
}
