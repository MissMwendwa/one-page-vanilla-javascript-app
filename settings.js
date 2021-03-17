import AbstractViews from "./AbstractViews.js";

export default class extends AbstractViews {
    constructor(){
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return  "<h1>Hello and this is the settings</h1>", 
        <p> wwe oadjladhD,mdalsndakdnansdl.akdnkndn</p>,

        <a href ="/posts" data-link>view recent posts</a>
        ;
        }
}