import { renderToString } from 'react-dom/server';
import LoaderSpinner from './LoadingSpinner';

class LoadingSpinner {
    _loaderWrapperId = 'loading-indicator';
    _loaderid = 'loadingSpinner';

    constructor() {}

    static show() {
        const instance = new LoadingSpinner();
        if (document.getElementById(instance._loaderid)) return;
        instance._render();
    }

    static hide() {
        const instance = new LoadingSpinner();
        const loader = document.getElementById(instance._loaderid);
        loader.remove();
    }

    _render() {
        document.getElementById(this._loaderWrapperId).innerHTML =
            renderToString(<LoaderSpinner />);
    }
}

export default LoadingSpinner;
