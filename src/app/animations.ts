import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const enterAnimationIcon = trigger('enterAnimationIcon', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('600ms', style({ opacity: 1 }))
  ])
]);

export const slideInLayoutAnimation = trigger('routeLayoutAnimations', [
  transition('* <=> *', [
    style({ position: 'relative', opacity: 0 }),
    query(':enter, :leave', [
      style({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100vh',
        opacity: 0,
      })
    ], { optional: true }),
    query(':enter', [
      animate('1000ms ease', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);

export const slideInAppAnimation = trigger('routeAnimations', [
  transition('SigninPage => LayoutPage', [
    style({ position: 'relative', overflow: 'hidden', opacity: 0 }),
    query(':enter, :leave', [
      style({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100vh',
        opacity: 0,
      }),
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%', opacity: 0 }),
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ left: '100%', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%', opacity: 1 }))
      ], { optional: true }),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),
  transition('LayoutPage => SigninPage', [
    style({ position: 'relative', overflow: 'hidden', opacity: 0 }),
    query(':enter, :leave', [
      style({
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        minHeight: '100vh',
        opacity: 0,
      }),
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%', opacity: 0 }),
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ right: '100%', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ right: '0%', opacity: 1 }))
      ], { optional: true }),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),
  transition('* <=> NotFoundPage', [
    style({ position: 'relative', overflow: 'hidden', opacity: 0 }),
    query(':enter, :leave', [
      style({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100vh',
        opacity: 0,
      }),
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 }),
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms ease-out', style({ opacity: 1 }))
      ], { optional: true }),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ])
]);
