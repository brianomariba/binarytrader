const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@/components': path.resolve(__dirname, 'src/components'),
            '@/utils': path.resolve(__dirname, 'src/utils'),
            '@/stores': path.resolve(__dirname, 'src/stores'),
            '@/constants': path.resolve(__dirname, 'src/constants'),
            '@/hooks': path.resolve(__dirname, 'src/hooks'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.xml$/,
                use: 'raw-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '.',
                },
                {
                    from: 'node_modules/@deriv/deriv-charts/dist/*',
                    to: 'js/smartcharts/[name][ext]',
                    globOptions: {
                        ignore: ['**/*.LICENSE.txt'],
                    },
                },
                {
                    from: 'node_modules/@deriv/deriv-charts/dist/chart/assets/*',
                    to: 'assets/[name][ext]',
                },
                {
                    from: 'node_modules/@deriv/deriv-charts/dist/chart/assets/fonts/*',
                    to: 'assets/fonts/[name][ext]',
                },
                {
                    from: 'node_modules/@deriv/deriv-charts/dist/chart/assets/shaders/*',
                    to: 'assets/shaders/[name][ext]',
                },
            ],
        }),
    ],
    devServer: {
        port: 8443,
        compress: true,
        historyApiFallback: true,
    },
};
