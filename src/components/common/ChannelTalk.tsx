'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        ChannelIO?: any;
        ChannelIOInitialized?: boolean;
    }
}

export default function ChannelTalk() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        (function () {
            var w = window;
            if (w.ChannelIO) {
                return;
            }
            var ch = function () {
                // @ts-ignore
                ch.c(arguments);
            };
            // @ts-ignore
            ch.q = [];
            // @ts-ignore
            ch.c = function (args) {
                // @ts-ignore
                ch.q.push(args);
            };
            w.ChannelIO = ch;
            function l() {
                if (w.ChannelIOInitialized) {
                    return;
                }
                w.ChannelIOInitialized = true;
                var s = document.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
                var x = document.getElementsByTagName("script")[0];
                if (x && x.parentNode) {
                    x.parentNode.insertBefore(s, x);
                }
            }
            if (document.readyState === "complete") {
                l();
            } else {
                w.addEventListener("DOMContentLoaded", l);
                w.addEventListener("load", l);
            }
        })();

        window.ChannelIO('boot', {
            "pluginKey": "e0ee2eda-b6f7-4b30-984b-bc8cbc77e365"
        });
    }, []);

    return null;
}
