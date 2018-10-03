// TODO

var Apples = () => (
    <li>Apples</li>
);

var Oranges = () => (
    <li>Oranges</li>
);

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false,
            hover: false
        }
    }

    onListItemClick() {
        this.setState({
            done: !this.state.done
        })
    }

    onListItemHover() {
        this.setState({
            hover: !this.state.hover
        })
    }

    render() {
        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none',
            fontWeight: this.state.hover ? '700' : '200'
        }

        return (
            <li style={style} 
            onClick={this.onListItemClick.bind(this)}
            onMouseEnter={this.onListItemHover.bind(this)}
            onMouseLeave={this.onListItemHover.bind(this)}>{this.props.fruit}</li>
        );
    }
}

var GroceryList = (props) => (
    <ul>
        {props.fruits.map(fruit =>
            <GroceryListItem fruit={fruit} key={fruit} />
        )}
    </ul>
);

var App = () => (
    <div>
        <h2>My Grocery List</h2>
        <GroceryList fruits={['apple', 'orange']} />
    </div>
);


ReactDOM.render(<App />, document.getElementById("app"));