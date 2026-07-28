import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'cakto-upsell-buttons': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'cakto-upsell-accept': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'bg-color'?: string;
        'text-color'?: string;
        'upsell-accept-url'?: string;
        'offer-id'?: string;
        'app-base-url'?: string;
        'offer-type'?: string;
        'upsell-reject-url'?: string;
      }, HTMLElement>;
      'cakto-upsell-reject': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'upsell-reject-url'?: string;
      }, HTMLElement>;
    }
  }
}
