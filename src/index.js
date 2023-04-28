// if ("serviceWorker" in navigator){
//     navigator.serviceWorker.register("sw.js").then( registration => {
//         console.log("SW registered");
//         console.log(registration);
//     }).catch( error => {
//         console.error("SW registration failed");
//         console.error(error);
//     });
// }
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import {Game} from "./Game";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

window.game = new Game()