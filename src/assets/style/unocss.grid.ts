import { toEscapedSelector } from 'unocss';
import type { Preset } from 'unocss';

/*
 * unocss grid system
 *
 * .row
 * .col-? (range: 1 ~ 12)
 * .col-auto
 * .col-fill
 *
 * .spacing-? (x & y, 1 equals 0.5rem)
 * .spacing-x-? (horizontal padding)
 * .spacing-y-? (vertical margin)
 */

export const presetGridSystem = (): Preset => ({
  name: 'unocss-grid-system',
  rules: [
    [
      /^row$/,
      (_, { rawSelector }) => {
        const _selector = toEscapedSelector(rawSelector);

        return `${_selector} {
          --gs-gutter-x: 0;
          --gs-gutter-y: 0;
          display: flex;
          flex-wrap: wrap;
          margin-top: calc(-1 * var(--gs-gutter-y));
        }
        ${_selector} > * {
          flex-shrink: 0;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          padding-right: var(--gs-gutter-x);
          padding-left: var(--gs-gutter-x);
          margin-top: var(--gs-gutter-y);
        }`.replace(/^ {8}/gm, '');
      },
      { autocomplete: 'row' },
    ],
    [
      /^col-(\d*(?:\.\d+)?)$/,
      ([, d]) => {
        const dtmp = Number(d);
        const width = dtmp <= 0 || dtmp > 12 ? '100%' : `${(dtmp / 12) * 100}%`;
        return { flex: '0 0 auto', width };
      },
      { autocomplete: 'col-<num>' },
    ],
    ['col-auto', { flex: '0 0 auto', width: 'auto' }],
    ['col-fill', { flex: '1 1 auto', width: 'auto' }],
    [
      /^spacing-(x-|y-)?(-?\d+)$/,
      ([, axis, d]) => {
        const spacings: Record<string, string> = {};

        if (axis !== 'y-') spacings['--gs-gutter-x'] = `${Number(d) * 0.5}rem`;
        if (axis !== 'x-') spacings['--gs-gutter-y'] = `${Number(d) * 0.5}rem`;

        return spacings;
      },
      { autocomplete: ['spacing-<num>', 'spacing-x-<num>', 'spacing-y-<num>'] },
    ],
  ],
});
