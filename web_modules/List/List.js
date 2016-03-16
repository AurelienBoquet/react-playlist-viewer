import React, { Component } from 'react';
import Item from 'Item/Item';
import Input from 'Input/Input';

export default class List extends Component {

    render() {

        return (
            <div className="inline">
                <Input placeholder="test" onChange={this.props.change} />
                {
                    this.props.items &&
                    this.props.items.map((item, index) => {
                        return (
                            <Item key={index} name={item.name} />
                        );
                    })
                }
            </div>
        );
    }
}


