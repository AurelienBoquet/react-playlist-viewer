import React, {Component, PropTypes} from 'react';

export default class Input extends Component {
    
    static propTypes = {
        type: PropTypes.string,
        onChange: PropTypes.func,
        name: PropTypes.string,
        value: PropTypes.string,
        placeholder: PropTypes.string
    };
    
    static defaultProps = {
        type: 'text',
        onChange: ()=>{},
        name: null,
        value: null,
        placeholder: null
    };

    onChangeHandler = (event) => {

        const {
            onChange
        } = this.props;

        this.setState({value: event.target.value});

        if (typeof onChange === 'function') {
            onChange(event);
        }

    };
    
    state = {
        value: ''
    };

    render() {
        
        const {
            type,
            name,
            placeholder
        } = this.props;
        
        return (
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                value={this.state.value}
                onChange={this.onChangeHandler}
            />
        );
    }
}

