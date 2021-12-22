const path = require('path')

const config = {
    entry: './app/index.js', // Arquivo de entrada
    output: {
        path: path.join(__dirname, 'dist'), // Diretorio de saída
        filename: 'bundle.js', // Arquivo de saída
        publicPath: 'dist/' // Informa ao DevServe o diretorio do bundle
    }
}

// Valida se é produção
if (process.env.NODE_ENV === 'development') {
    config.watch = true;
    config.devtool = 'source-map'
}

module.exports = config