
import Card from "../components/frontend/private/Card"
import Favorite from "../components/frontend/private/Favorite"
// import MyProfile from "../components/frontend/private/MyProfile"

export const RouteAuthUser = () => {
    return (
        [
            {
                path: "card",
                element:  <Card />
            },
            {
                path: "favorite",
                element:  <Favorite />
            },
            // {
            //     path: "myProfile",
            //     element:<MyProfile />
            // }
        ]
    )

}