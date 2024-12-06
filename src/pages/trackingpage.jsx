import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Trade {
    constructor(entry, exit, size, direction, market, currencyPair) {
        this.entry = entry;
        this.exit = exit;
        this.size = size;
        this.direction = direction;
        this.market = market;
        this.currencyPair = currencyPair;
        this.date = new Date().toISOString().split('T')[0];
    }

    pips() {
        const diff = this.exit - this.entry;
    if (this.currencyPair === 'SP500') {
        return this.direction === 'long' ? 
            Math.round(diff * 1) : 
            Math.round(-diff * 1);
    }
        const multiplier = this.currencyPair === 'USD/JPY' ? 100 : 10000;
        return this.direction === 'long' ? 
            Math.round(diff * multiplier) : 
            Math.round(-diff * multiplier);
    }

    profit() {
        if (this.currencyPair === 'SP500') {
            return this.pips() * this.size * 50; 
        }
        if (this.currencyPair === 'USD/JPY') {
            return (this.pips() * (this.size * 10)) / 100;
        }
        return this.pips() * 10;
    }
}

const TradingTracker = () => {
    const [trades, setTrades] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        entry: '',
        exit: '',
        size: '',
        direction: 'long',
        market: 'forex',
        currencyPair: 'EUR/USD'
    });

    const currencyPairs = [
        'EUR/USD',
        'GBP/USD',
        'USD/JPY',
        'SP500'
    ];

    useEffect(() => {
        const savedTrades = JSON.parse(localStorage.getItem('trades') || '[]');
        const reconstructedTrades = savedTrades.map(trade => 
            new Trade(trade.entry, trade.exit, trade.size, trade.direction, trade.market, trade.currencyPair)
        );
        setTrades(reconstructedTrades);
    }, []);

    const filterTradesByType = (type) => {
        return trades.filter(trade => 
            type === 'forex' ? trade.currencyPair !== 'SP500' : trade.currencyPair === 'SP500'
        );
    };

    const calculateStatsByType = (type) => {
        const filteredTrades = filterTradesByType(type);
        if (!filteredTrades.length) return {
            totalTrades: 0,
            totalPips: '0',
            totalProfit: '0.00',
            winRate: '0.00'
        };

        const totalTrades = filteredTrades.length;
        const totalPips = filteredTrades.reduce((sum, trade) => sum + trade.pips(), 0);
        const totalProfit = filteredTrades.reduce((sum, trade) => sum + trade.profit(), 0);
        const winningTrades = filteredTrades.filter(trade => trade.profit() > 0).length;
        const winRate = (winningTrades / totalTrades) * 100;

        return {
            totalTrades,
            totalPips: totalPips,
            totalProfit: '$' + totalProfit.toFixed(2),
            winRate: winRate.toFixed(2) + '%'
         };
    };

    const prepareChartDataByType = (type) => {
        const filteredTrades = filterTradesByType(type);
        let balance = 0;
        return filteredTrades.map(trade => {
            balance += trade.profit();
            return {
                date: trade.date,
                profit: trade.profit(),
                balance: balance
            };
        });
    };

    const saveTrades = (newTrades) => {
        localStorage.setItem('trades', JSON.stringify(newTrades));
        setTrades(newTrades);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTrade = new Trade(
            parseFloat(formData.entry),
            parseFloat(formData.exit),
            parseFloat(formData.size),
            formData.direction,
            formData.market,
            formData.currencyPair
        );
        const newTrades = [...trades, newTrade];
        saveTrades(newTrades);
        setShowForm(false);
        setFormData({
            entry: '',
            exit: '',
            size: '',
            direction: 'long',
            market: 'forex',
            currencyPair: 'EUR/USD'
        });
    };

    const deleteTrade = (index, type) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta operación?')) {
            const filteredTrades = filterTradesByType(type);
            const allOtherTrades = trades.filter(trade => 
                type === 'forex' ? trade.currencyPair === 'SP500' : trade.currencyPair !== 'SP500'
            );
            const newTrades = [...allOtherTrades, ...filteredTrades.filter((_, i) => i !== index)];
            saveTrades(newTrades);
        }
    };

    const TradingSection = ({ type, title }) => (
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {Object.entries(calculateStatsByType(type)).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-sm text-gray-500 uppercase">{key}</h3>
                        <p className="text-2xl font-semibold text-gray-900">{value}</p>
                    </div>
                ))}
            </div>

            <div className="h-80 mb-8">
                <LineChart width={800} height={300} data={prepareChartDataByType(type)}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line 
                        type="monotone"
                        dataKey="balance"
                        name="Balance"
                        stroke="#3b82f6"
                        dot={true}
                    />
                </LineChart>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Par</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dirección</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Entrada</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Salida</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lotes</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pips</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profit/Loss</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filterTradesByType(type).map((trade, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{trade.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{trade.currencyPair}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{trade.direction}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{trade.entry}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{trade.exit}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{trade.size}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{trade.pips()}</td>
                                <td className={`px-6 py-4 whitespace-nowrap ${trade.profit() > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    ${trade.profit().toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                <button 
    onClick={() => deleteTrade(index, type)}
    className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md transition-colors duration-200"
>
    Eliminar
</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Trading Performance Tracker</h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Agregar Operación
                    </button>
                </div>

                <TradingSection type="forex" title="Forex Trading Performance" />
                <TradingSection type="sp500" title="SP500 Trading Performance" />

                {showForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h2 className="text-xl font-bold mb-4">Nueva Operación</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Par</label>
                                        <select
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                            value={formData.currencyPair}
                                            onChange={e => setFormData({...formData, currencyPair: e.target.value})}
                                        >
                                            {currencyPairs.map(pair => (
                                                <option key={pair} value={pair}>{pair}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Dirección</label>
                                        <select
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                            value={formData.direction}
                                            onChange={e => setFormData({...formData, direction: e.target.value})}
                                        >
                                            <option value="long">Long</option>
                                            <option value="short">Short</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Entrada</label>
                                        <input
                                            type="number"
                                            step="0.00001"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                            value={formData.entry}
                                            onChange={e => setFormData({...formData, entry: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Salida</label>
                                        <input
                                            type="number"
                                            step="0.00001"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                            value={formData.exit}
                                            onChange={e => setFormData({...formData, exit: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Tamaño</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                            value={formData.size}
                                            onChange={e => setFormData({...formData, size: e.target.value})}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TradingTracker;