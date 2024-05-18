import type { Component } from 'vue';
import { SVGIconLogoIco } from '#components';

export interface MenuData {
    name: string;
    url: string;
    icon: string;
    icon2: Component;
}

export const menuData: MenuData[] = [
    {
        icon: 'radix-icons:dashboard',
        name: 'Home',
        url: '/',
        icon2: SVGIconLogoIco
    },
    {
        icon: 'ep:goods',
        name: 'Products',
        url: '/about',
        icon2: SVGIconLogoIco
    },
    {
        icon: 'ph:contactless-payment',
        name: 'Payments',
        url: '/',
        icon2: SVGIconLogoIco
    },
    {
        icon: 'fluent:receipt-28-regular',
        name: 'Orders',
        url: '/',
        icon2: SVGIconLogoIco
    },
    {
        icon: 'mingcute:group-line',
        name: 'Customers',
        url: '/',
        icon2: SVGIconLogoIco
    }
];