let apiKey = null;
import { default as Maps } from "https://js.api.here.com/v3/3.1/mapsjs.bundle.js";
class MapElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.div = document.createElement("div");
        this.div.style.width = "100%";
        this.div.style.height = "460px";
        this.shadowRoot.appendChild(this.div);
        if (apiKey == null) {
            this.div.innerHTML = "please insert an Api key to the top line of \"MapWC.js\""
        } else {
            this.platform = new Maps.service.Platform({
                'apikey': apiKey
            });
            this.defaultLayers = this.platform.createDefaultLayers();
        }
    }
    connectedCallback() {
        if (apiKey != null) {

            this.map = new Maps.Map(
                this.div,
                this.defaultLayers.vector.normal.map,
                {
                    zoom: 8,
                    center: { lat: 52.5, lng: 13.4 }
                });
            this.behavior = new Maps.mapevents.Behavior(new Maps.mapevents.MapEvents(this.map));
            this.ui = Maps.ui.UI.createDefault(this.map, this.defaultLayers, 'de-DE');
            var bubble = new Maps.ui.InfoBubble({ lng: 13.4, lat: 52.51 }, {
                content: '<b>Hello World!</b>'
            });
            this.ui.addBubble(bubble);
        }
    }

}
window.customElements.define("g-map", MapElement);