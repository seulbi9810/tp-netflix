import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './redux/store'; // Redux store 불러오기

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient= new QueryClient()

root.render(
    <Provider store={store}> {/* Redux Provider 추가 */}
        <QueryClientProvider client={queryClient}>
                <App />
        </QueryClientProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
