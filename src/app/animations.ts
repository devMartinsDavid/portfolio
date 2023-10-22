import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const enterAnimationIcon = 
    trigger('enterAnimationIcon', [
        transition(':enter', [
            style({opacity: 0}),
            animate('600ms', style({opacity: 1}))
        ])
    ]);

export const slideInLayoutAnimation =
    trigger('routeLayoutAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    width: '100%',
                    opacity: 0,
                })
            ], { optional: true }),
            query(':enter', [
                animate('2000ms ease', 
                    style({ opacity: 1 })
                )
            ], { optional: true })
        ])
    ]);

export const slideInAppAnimation =
    trigger('routeAnimations', [
        transition('SigninPage => LayoutPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('LayoutPage => SigninPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%'
                })
            ]),
            query(':enter', [
                style({ right: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ right: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ right: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> NotFoundPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ opacity: 0 })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('500ms ease-out', style({ opacity: 0 }))
                ]), 
                query(':enter', [
                    animate('500ms ease-out', style({ opacity: 1}))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);