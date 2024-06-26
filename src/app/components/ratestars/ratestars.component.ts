import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ratestars',
  standalone: true,
  imports: [],
  template: `
    <p>
      {{ stars }}/5
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          id="star"
        >
          <path
            d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"
          />
        </symbol>
      </svg>
      @for(s of [1,2,3,4,5]; track s) {
        @if( s <= stars ) {
          <svg class="c-icon active" width="16" height="16">
            <use xlink:href="#star"></use>
          </svg>
        } @else  {
          <svg class="c-icon" width="16" height="16">
            <use xlink:href="#star"></use>
          </svg>
        }
      }
    </p>
  `,
  styles: `
  .c-icon {
    --star-active: #fece3c;
    --star-inactive: #6c6962;
    fill: var(--star-inactive);
  }
  .c-icon.active {
      fill: var(--star-active);
  }
`,
})
export class RatestarsComponent {
  @Input() stars!: number;
  as: number[] = [1,2,3,4,5]
}
