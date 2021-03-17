import Dashbaord from "./views/Dashboard.js";
import posts from "./views/posts.js";
import settings from "./views/settings.js";


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path:"/", view: Dashbaord},
        {path:"/posts", view: posts},
        {path:"/settings", view: settings}
    ];

    //test each route for potential match
    const potentialMatches = route.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });
    
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch )

    if (!match) {
        match = {
            route: route[0],
            isMatch: Trues
        }
    };

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(match.route.view());  
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("Click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});