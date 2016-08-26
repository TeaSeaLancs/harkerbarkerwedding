/* globals window */

"use strict";

export default url => {
    if (typeof window !== 'undefined') {
        return window.location + url;
    }
    
    return `http://localhost:9000/${url}`;
}