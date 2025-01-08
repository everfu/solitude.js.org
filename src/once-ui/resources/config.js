const baseURL = 'solitude.js.org'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Solitude - 一款简洁、易用、响应式的 Hexo 主题',
    description: '一款简洁、易用、响应式的 Hexo 主题',
    icon: '/favicon.ico',
}


// default open graph data
const og = {
    title: 'Solitude for Hexo',
    description: '一款简洁、易用、响应式的 Hexo 主题',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: 'Everly',
    description: '',
    email: 'o@efu.me'
}

// social links
const social = {
    twitter: 'https://www.twitter.com/everfu8'
}

export { baseURL, style, meta, og, schema, social };