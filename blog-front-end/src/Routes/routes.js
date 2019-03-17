import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from '../Components/posts'
import Post from '../Components/post'


class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route path="/blogposts/:id" render={(routeParams)=>{ return <Post postID={routeParams.match.params.id}/>}} />
                </Switch>
            </BrowserRouter>
            )
    }
}

export default AppRouter;