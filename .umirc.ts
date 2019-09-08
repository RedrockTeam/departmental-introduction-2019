import { IConfig } from 'umi-types'
// @ts-ignore
import pxToViewPort from 'postcss-px-to-viewport'



// ref: https://umijs.org/config/
const config: IConfig = {
  base: './',
  treeShaking: true,
  publicPath: './',
  history: 'hash',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: 'departmental-introduction-2019',
        dll: false,
        pwa: true,
        routes: {
          exclude: [/components\//],
        },
        fastClick: true,
      },
    ],
  ],
  extraPostCSSPlugins: [
    pxToViewPort({
      viewportWidth: 1280,
      viewportHeight: 720,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
    })
  ],
}

export default config
