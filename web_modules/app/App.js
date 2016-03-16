import React, {Component} from 'react';
import List from 'List/List';

let busy = false;

const kindList = [
    {name: 'Rap'},
    {name: 'Rock'},
    {name: 'Pop'}
];

export default class App extends Component {

    state = {
        artistList: [],
        kindList: [
            {name: 'Rap'},
            {name: 'Rock'},
            {name: 'Pop'}
        ]
    };

    inputChangeKind = (event) => {

        var inputVal = event.target.value.toLowerCase();

        this.setState({
            kindList: kindList.filter((item, key) => {
                return item && item.name.toLowerCase().startsWith(inputVal);
            })
        });
    };

    inputChangeArtist = (event) => {
        this.fetchArtist(event.target.value);
    };

    fetchArtist(value) {

        if (value.length < 3 || busy) {
            return;
        }

        busy = true;

        var url = `https://api.spotify.com/v1/search?q=${value}&type=artist&limit=10`;

        fetch(url, {
            method: 'get'
        }).then((response) => {
            response.json().then((data) => {
                if (data && data.artists) {
                    this.setState({artistList: data.artists.items});
                }
            });
            busy = false;
        }).catch(function(err) {
            console.log(err);
            busy = false;
        });
    }

    render() {

        console.log(this.state.kindList);

        return (
            <div>
                <div>
                    <List change={this.inputChangeArtist} items={this.state.artistList} />
                    <List change={this.inputChangeKind} items={this.state.kindList} />
                </div>
            </div>
        );
    }
}
