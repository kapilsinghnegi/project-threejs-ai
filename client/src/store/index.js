import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLocalTexture: true,
    isFullTexture: false,
    logoDecal:'./threejs.png',
    fullecal:'./threejs.png',
});

export default state;