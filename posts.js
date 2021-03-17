import AbstractViews from "./AbstractViews.js";

export default class extends AbstractViews {
    constructor(){
        super();
        this.setTitle("posts ");
    }

    async getHtml() {
        return  "<h1>This is a post</h1>", 
        <p>This is the post I was talking about earlier</p>,
        <p> wwe oadjladhD,mdalsndakdnansdl.akdnkndn</p>,

        <a href ="/posts" data-link>view recent posts</a>
        ;
        }
}