import React, {Component} from "react";
import './UsersGridList.css'
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";

export default class UsersGridList extends Component {
    IMAGE_URL_PREFIX = 'https://img.lovoo.com/users/pictures/';
    IMAGE_URL_POSTFIX = '/thumb_xl.jpg'; // we can choose another size here

    constructor(props) {
        super(props);

        this.state = {
            usersUrl: 'http://localhost:5000/users',
            result: []
        }
    }

    componentDidMount() {
        const { usersUrl } = this.state;  //extract usersUrl from this.state and save it as usersUrl variable

        fetch(usersUrl) // GET call to backend
            .then(response => response.json()) //convert result to JSON
            .then(
                data => this.setState({ result: data }) //set instance variable "result" to the incoming data
            );
    }


    render()  {
        const { result } = this.state;
        console.log(result);

        //const {classes} = props;

        return (
            <div className="root">
                <GridList className="gridList" cols={4} cellHeight={"auto"}>
                    {result.map(user => (
                        <GridListTile key={user.image}>
                            <img src={this.IMAGE_URL_PREFIX + user.picture + this.IMAGE_URL_POSTFIX} alt={user.lastOnlineTime} height={320} width={320}/>
                            {/*subtitle that overlays the picture*/}
                            <GridListTileBar
                                title={<span>Name: {user.name}</span>}
                                subtitle={<span>{user.locations.current.distance} km away</span>}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}
