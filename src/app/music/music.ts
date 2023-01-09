import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-music')
export default class Music extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .music {
      border-color: hsla(var(--ig-secondary-400));
      border-width: 2px;
      border-style: dashed;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      left: -19px;
      top: 5.569955871373721px;
      position: absolute;
      padding: 64px;
      width: 1931px;
      min-width: 50px;
      min-height: 50px;
    }
    .group {
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .image {
      object-fit: cover;
      margin: 0 0 24px;
      width: 1245px;
      height: 590px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .text {
      text-align: center;
      color: hsla(var(--ig-gray-900));
      width: 280px;
      height: max-content;
      min-width: min-content;
      max-width: 280px;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout music">
        <img src="/src/assets/37-music-logos-design.gif" class="image" />
        <p class="typography__overline text">
          The Home of all your Music Demands
        </p>
        <div class="group"></div>
      </div>
    `;
  }
}
