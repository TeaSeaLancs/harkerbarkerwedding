/* globals window */

"use strict";

export default url => {
    if (typeof window !== 'undefined') {
        return `${window.location.origin}${url}`;
    }
    
    return `${process.env.ADMIN_URL}${url}`;
};