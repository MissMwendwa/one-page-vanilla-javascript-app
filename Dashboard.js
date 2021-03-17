import AbstractViews from "./AbstractViews.js";

export default class extends AbstractViews {
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return  "<h1>Hello and Welcome</h1>", 
        <p>Hope to see you once again soon</p>,
        <p> wwe oadjladhD,mdalsndakdnansdl.akdnkndn</p>,

        <a href ="/posts" data-link>view recent posts</a>
        ;
        }
}
