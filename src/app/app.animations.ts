import { trigger, style, transition, animate, state, keyframes } from '@angular/animations';

export const Animations = {
    enterAnimation: trigger('enterAnimation', [
        transition(':enter', [
            style({
                opacity: 0
            }),
            animate('.3s', style({
                opacity: 1
            }))
        ]),
        transition(':leave', [
            style({
                opacity: 1
            }),
            animate('.3s', style({
                opacity: 0
            }))
        ])
    ]
    ),
    progressBarAnimation: trigger('progressBarAnimation', [
        state('0', style({width: '0%'})),
        state('1', style({width: '100%'})),
        transition('0 => 1', animate('10s')),
        transition('* => 1', animate('10s')),
        transition(':leave', [
            style({
                opacity: 1
            }),
            animate('.3s', style({
                opacity: 0
            }))
        ])
    ]),
    fade: trigger('fade', [
        state('0', style({opacity: '1'})),
        state('1', style({opacity: '1'})),
        transition('1 => 0', animate('1s', keyframes([
            style({opacity: '1', offset: 0}),
            style({opacity: '0.5', offset: 0.25}),
            style({opacity: '0', offset: 0.5}),
            style({opacity: '0.5', offset: 0.75}),
            style({opacity: '1', offset: 1})
        ]))),
    ])
}