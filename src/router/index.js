import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue";
//import HeaderPage from "../components/HeaderPage.vue";
import OnePage from "../components/body/OnePage.vue";
import TwoPage from "../components/body/TwoPage.vue";
import FirstPage from "../components/try/FirstPage.vue";
import VideoMange from "../components/body/VideoMange.vue";
import VideoPlay from "../components/body/VideoPlay.vue";
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component: HomePage,
            children:[
                {
                    path:"/home/num1",
                    component:OnePage,
                },{
                    path:"/home/num2",
                    component:VideoMange
                },{
                    path:"/home/num3",
                    component:VideoPlay
                }
            ]
        },{
            path:"/head",
            component:OnePage
        },{
            path:"/img",
            component:TwoPage
        },{
            path:"/first",
            component:FirstPage
        }
    ]
});