const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const symbols = ["BINANCE:BTCUSDT", "BINANCE:ETHUSDT", "BINANCE:BNBUSDT", "BINANCE:XRPUSDT"];
let currentIndex = 0;

// Event listener for left arrow click
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === symbols.length - 1) ? 0 : currentIndex + 1;
    updateCharts();
});

// Event listener for right arrow click
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? symbols.length - 1 : currentIndex - 1;
    updateCharts();
});

// Function to update all charts with new data
function updateCharts() {
    const widgets = [
        document.getElementById('chart1'),
        document.getElementById('chart2'),
        document.getElementById('chart3'),
        document.getElementById('chart4')
    ];

    // Define specific styles for each chart
    const styles = [1, 3, 4, 2];

    widgets.forEach((widget, index) => {
        const className = 'chart' + (index + 1);
        widget.className = '';
        widget.classList.add('tradingview-widget-container', className);
        const options = {
            "autosize": true,
            "symbol": symbols[(currentIndex + index) % symbols.length],
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": styles[index], // Assign specific style for each chart
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "container_id": widget.id
        };
        new TradingView.widget(options);
    });
}

// Initial setup call to populate the charts
updateCharts();
